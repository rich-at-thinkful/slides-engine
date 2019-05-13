(function() {
    const CONTENT_WIDTH = 1280;
    const CONTENT_HEIGHT = 720;

    const SVG_NS = 'http://www.w3.org/2000/svg';

    function getMain() {
        return document.getElementById('main');
    }

    function getSlideWrapper() {
        return document.getElementById('slide-wrapper');
    }

    function getProgressBar() {
        return document.getElementById('progress-bar');
    }

    function getSvg() {
        return document.querySelector('svg');
    }

    function onSlideChange(
        currentSlide,
        totalSlides,
        currentFragment,
        totalFragments
    ) {
        getProgressBar().style.width = `${100 *
            currentSlide /
            (totalSlides - 1)}%`;
        drawOverlay();
    }

    function resize() {
        const main = getMain();
        const {width, height} = main.getBoundingClientRect();

        const wrapper = getSlideWrapper();
        const xScale = width / CONTENT_WIDTH;
        const yScale = height / CONTENT_HEIGHT;
        const scale = Math.min(xScale, yScale);
        wrapper.style.width = `${CONTENT_WIDTH}px`;
        wrapper.style.height = `${CONTENT_HEIGHT}px`;
        wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
        drawOverlay();
    }

    function highlightCode() {
        hljs.initHighlighting();
    }

    function parseCodeSpan(span, lines) {
        const [lineInfo, ...attributes] = span.split(' ');
        const [lineNum, ...positions] = lineInfo.split(':');
        if (lineNum - 1 >= lines.length) {
            console.error(
                `Could not highlight code block: line ${lineNum} is out of bounds`
            );
            return;
        }
        // TODO: Check that lineNum is in bounds
        const [startPos = 1, endPos = lines[lineNum - 1].length] = positions;
        // Convert to zero-indexed
        return {
            lineNum: lineNum - 1,
            startPos: startPos - 1,
            endPos: endPos - 1,
            attributes
        };
    }

    function createSpan(attributes) {
        const classes = attributes
            .filter(attribute => attribute.startsWith('.'))
            .map(attribute => attribute.slice(1))
            .join(' ');
        const attributeString = attributes
            .filter(attribute => !attribute.startsWith('.'))
            .reduce((s, attribute) => {
                if (attribute.startsWith('#')) {
                    return `${s} id="${attribute.slice(1)}"`;
                } else {
                    const [name, value] = attribute.split('=');
                    if (value) {
                        return `${s} ${name}="${value}"`;
                    } else {
                        return `${s} ${name}`;
                    }
                }
            }, classes ? `class="${classes}"` : '');
        return `<span ${attributeString}>`;
    }

    function addCodeSpans() {
        // TODO: Make sure that spans are disjoint
        const code = document.querySelectorAll('pre code[data-span]');
        code.forEach(block => {
            const spans = block
                .getAttribute('data-span')
                .split(';')
                .map(s => s.trim())
                .filter(s => s !== '');
            const lines = block.innerText.split('\n');
            spans
                .map(span => parseCodeSpan(span, lines))
                // Remove out of bounds spans
                .filter(span => span !== undefined)
                .sort((a, b) => b.lineNum - a.lineNum || b.endPos - a.endPos)
                .forEach(span => {
                    const {lineNum, startPos, endPos, attributes} = span;
                    span = createSpan(attributes);
                    let line = lines[lineNum];
                    // +1 so we're inclusive on the endpost
                    line =
                        line.slice(0, endPos + 1) +
                        '</span>' +
                        line.slice(endPos + 1);
                    line =
                        line.slice(0, startPos) + span + line.slice(startPos);
                    lines[lineNum] = line;
                });
            block.innerHTML = lines.join('\n');
        });
    }

    function isZeros(rect) {
        return (
            rect.x === 0 &&
            rect.y === 0 &&
            rect.width === 0 &&
            rect.height === 0
        );
    }

    function getSides(side1, side2, rect1, rect2) {
        if (side1 !== 'auto' && side2 !== 'auto') {
            return [side1, side2];
        }

        if (rect1.x + rect1.width < rect2.x) {
            // e2 is to the right of e1
            side1 = side1 === 'auto' ? 'r' : side1;
            side2 = side2 === 'auto' ? 'l' : side2;
        } else if (rect2.x + rect2.width < rect1.x) {
            // e2 is to the left of e1
            side1 = side1 === 'auto' ? 'l' : side1;
            side2 = side2 === 'auto' ? 'r' : side2;
        } else if (rect1.y + rect1.height < rect2.y) {
            // e2 is below e1
            side1 = side1 === 'auto' ? 'b' : side1;
            side2 = side2 === 'auto' ? 't' : side2;
        } else if (rect2.y + rect2.height < rect1.y) {
            // e2 is above e1
            side1 = side1 === 'auto' ? 't' : side1;
            side2 = side2 === 'auto' ? 'b' : side2;
        } else {
            side1 = side1 === 'auto' ? 'm' : side1;
            side2 = side2 === 'auto' ? 'm' : side2;
        }

        return [side1, side2];
    }

    function getControlPoints(side, rect1, rect2) {
        let x, y, cx, cy;

        switch (side) {
            case 'l':
            case 'tl':
            case 'lt':
            case 'bl':
            case 'lb':
                x = rect1.x;
                break;
            case 'r':
            case 'tr':
            case 'rt':
            case 'br':
            case 'rb':
                x = rect1.x + rect1.width;
                break;
            case 't':
            case 'b':
            case 'm':
                x = rect1.x + rect1.width / 2;
                break;
        }

        switch (side) {
            case 't':
            case 'tl':
            case 'lt':
            case 'tr':
            case 'rt':
                y = rect1.y;
                break;
            case 'b':
            case 'bl':
            case 'lb':
            case 'br':
            case 'rb':
                y = rect1.y + rect1.height;
                break;
            case 'l':
            case 'r':
            case 'm':
                y = rect1.y + rect1.height / 2;
                break;
        }

        switch (side) {
            case 'l':
            case 'r':
            case 'lt':
            case 'lb':
            case 'rt':
            case 'rb':
                cy = y;
                break;
            case 't':
            case 'b':
            case 'tl':
            case 'tr':
            case 'bl':
            case 'br':
                cx = x;
                break;
            case 'm':
                cx = x;
                cy = y;
                break;
        }

        switch (side) {
            case 'l':
            case 'lt':
            case 'lb':
                cx = (x + rect2.x + rect2.width) / 2;
                break;
            case 'r':
            case 'rt':
            case 'rb':
                cx = (x + rect2.x) / 2;
                break;
            case 't':
            case 'tl':
            case 'tr':
                cy = (y + rect2.y) / 2;
                break;
            case 'b':
            case 'bl':
            case 'br':
                cy = (y + rect2.y + rect2.height) / 2;
                break;
        }

        return {x, y, cx, cy};
    }

    function drawLine(e1, e2, side1, side2, svg, className) {
        const rect1 = e1.getBoundingClientRect();
        const rect2 = e2.getBoundingClientRect();
        if (
            isZeros(rect1) ||
            isZeros(rect2) ||
            getComputedStyle(e1).visibility === 'hidden' ||
            getComputedStyle(e2).visibility === 'hidden'
        ) {
            // One of them isn't on screen (i.e. a fragment)
            return;
        }

        [side1, side2] = getSides(side1, side2, rect1, rect2);

        const {x: x1, y: y1, cx: cx1, cy: cy1} = getControlPoints(
            side1,
            rect1,
            rect2
        );
        const {x: x2, y: y2, cx: cx2, cy: cy2} = getControlPoints(
            side2,
            rect2,
            rect1
        );

        const path = document.createElementNS(SVG_NS, 'path');
        const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'class', className);
        svg.appendChild(path);
    }

    function annotateCode(svg) {
        const annotations = document.querySelectorAll('.visible .annotation');
        annotations.forEach(annotation => {
            const targetId = annotation.getAttribute('data-for');
            const target = document.querySelector(`#${targetId}`);
            if (target.getAttribute('data-split')) {
                return;
            }

            target.innerHTML = target.innerHTML
                .split('\n')
                .map(line =>
                    line.replace(/^(\s*)(.*?)(\s*)$/, '$1<span>$2</span>$3')
                )
                .join('\n');
            target.setAttribute('data-split', true);
        });

        // RAF to wait until redraw is complete
        requestAnimationFrame(() => {
            annotations.forEach(annotation => {
                const targetId = annotation.getAttribute('data-for');
                const lineNumber = annotation.getAttribute('data-line') || 1;
                // Can have multiple line numbers split by spaces
                const lineNumbers = lineNumber.split(' ');
                lineNumbers.forEach(lineNumber => {
                    const line = document.querySelector(
                        `#${targetId} > span:nth-child(${lineNumber})`
                    );
                    drawLine(
                        line,
                        annotation,
                        'auto',
                        'auto',
                        svg,
                        'line-annotation'
                    );
                });
            });
        });
    }

    function drawLines(svg) {
        const lines = document.querySelectorAll('.visible .line');

        lines.forEach(line => {
            const fromId = line.getAttribute('data-from');
            const from = document.querySelector(`#${fromId}`);

            const toId = line.getAttribute('data-to');
            const to = document.querySelector(`#${toId}`);

            const fromSide = line.getAttribute('data-from-side') || 'auto';
            const toSide = line.getAttribute('data-to-side') || 'auto';

            drawLine(from, to, fromSide, toSide, svg, line.className);
        });
    }

    function drawOverlay() {
        const svg = getSvg();
        const children = svg.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].tagName === 'defs') {
                continue;
            }
            children[i].remove();
        }

        annotateCode(svg);
        drawLines(svg);
    }

    function main() {
        window.onresize = resize;
        addCodeSpans();
        highlightCode();
        resize();
        Fieldfare.onSlideChange = onSlideChange;
        Fieldfare.start();
    }

    window.addEventListener('DOMContentLoaded', main);
})();
