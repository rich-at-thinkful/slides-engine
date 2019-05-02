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
        annotateCode();
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
        annotateCode();
    }

    function highlightCode() {
        // Trim whitespace
        const code = document.querySelectorAll('pre code');
        code.forEach(block => {
            block.innerHTML = block.innerHTML.replace(/(^\s*\n)+/, '');
        });
        hljs.initHighlighting();
    }

    function drawLine(e1, e2, svg) {
        const rect1 = e1.getBoundingClientRect();
        const rect2 = e2.getBoundingClientRect();
        let x1, x2, cx1, cx2, y1, y2, cy1, cy2;

        if (rect1.x + rect1.width < rect2.x) {
            // e2 is to the right of e1
            x1 = rect1.x + rect1.width;
            x2 = rect2.x;
            y1 = rect1.y + rect1.height / 2;
            y2 = rect2.y + rect2.height / 2;
            cx1 = (x1 + x2) / 2;
            cy1 = y1;
            cx2 = (x1 + x2) / 2;
            cy2 = y2;
        } else if (rect2.x + rect2.width < rect1.x) {
            // e2 is to the left of e1
            x1 = rect1.x;
            x2 = rect2.x + rect2.width;
            y1 = rect1.y + rect1.height / 2;
            y2 = rect2.y + rect2.height / 2;
            cx1 = (x1 + x2) / 2;
            cy1 = y1;
            cx2 = (x1 + x2) / 2;
            cy2 = y2;
        } else if (rect1.y + rect1.height < rect2.y) {
            // e2 is below e1
            x1 = rect1.x + rect1.width / 2;
            x2 = rect2.x + rect2.width / 2;
            y1 = rect1.y + rect1.height;
            y2 = rect2.y;
            cx1 = x1;
            cy1 = (y1 + y2) / 2;
            cx2 = x2;
            cy2 = (y1 + y2) / 2;
        } else if (rect2.y + rect2.height < rect1.y) {
            // e2 is above ei
            y1 = rect1.y;
            y2 = rect2.y + rect2.height;
            x1 = rect1.x + rect1.width / 2;
            x2 = rect2.x + rect2.width / 2;
            cx1 = x1;
            cy1 = (y1 + y2) / 2;
            cx2 = x2;
            cy2 = (y1 + y2) / 2;
        } else {
            // They overlap
            console.error(
                `Could not draw line between overlapping elements ${e1} and ${e2}`
            );
            return;
        }

        const path = document.createElementNS(SVG_NS, 'path');
        const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
        path.setAttributeNS(null, 'd', d);
        svg.appendChild(path);
    }

    function annotateCode() {
        const svg = getSvg();
        while (svg.firstChild) {
            svg.firstChild.remove();
        }

        const annotations = document.querySelectorAll('.visible .annotation');
        annotations.forEach(annotation => {
            const targetId = annotation.getAttribute('data-for');
            const target = document.querySelector(`#${targetId}`);
            if (target.getAttribute('data-split')) {
                return;
            }

            target.innerHTML = target.innerHTML
                .split('\n')
                .map(line => `<span>${line}</span>`)
                .join('\n');
            target.setAttribute('data-split', true);
        });

        // RAF to wait until redraw is complete
        requestAnimationFrame(() => {
            annotations.forEach(annotation => {
                const targetId = annotation.getAttribute('data-for');
                const lineNumber = annotation.getAttribute('data-line');
                const line = document.querySelector(
                    `#${targetId} > span:nth-child(${lineNumber})`
                );
                drawLine(line, annotation, svg);
            });
        });
    }

    function main() {
        window.onresize = resize;
        highlightCode();
        resize();
        Fieldfare.onSlideChange = onSlideChange;
        Fieldfare.start();
    }

    window.addEventListener('DOMContentLoaded', main);
})();
