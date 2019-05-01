(function() {
    const CONTENT_WIDTH = 1280;
    const CONTENT_HEIGHT = 720;

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

    function annotateCode() {
        const svg = getSvg();
        while (svg.firstChild) {
            svg.firstChild.remove();
        }

        const annotations = document.querySelectorAll('.visible .annotation');
        annotations.forEach(annotation => {
            // TODO: Don't need to do this for duplicated targets
            const targetId = annotation.getAttribute('data-for');
            const target = document.querySelector(`#${targetId}`);
            target.innerHTML = target.innerHTML
                .split('\n')
                .map(line => {
                    const trimmed = line.trim();
                    if (
                        trimmed.startsWith('<span>') &&
                        trimmed.endsWith('</span>')
                    ) {
                        return line;
                    }
                    return `<span>${line}</span>`;
                })
                .join('\n');
        });

        // RAF to wait until redraw is complete
        requestAnimationFrame(() => {
            annotations.forEach(annotation => {
                const targetId = annotation.getAttribute('data-for');
                const lineNumber = annotation.getAttribute('data-line');
                const line = document.querySelector(
                    `#${targetId} > span:nth-child(${lineNumber})`
                );
                const lineRect = line.getBoundingClientRect();
                console.log(line);
                const annotationRect = annotation.getBoundingClientRect();
                let lineX, annotationX, lineY, annotationY;
                lineY = lineRect.y + lineRect.height / 2;
                annotationY = annotationRect.y + annotationRect.height / 2;

                if (lineRect.x + lineRect.width < annotationRect.x) {
                    // Annotation to right of line
                    lineX = lineRect.x + lineRect.width;
                    annotationX = annotationRect.x;
                } else if (
                    annotationRect.x + annotationRect.width <
                    lineRect.x
                ) {
                    // Annotation to left of line
                    lineX = lineRect.x;
                    annotationX = annotationRect.x + annotationRect.width;
                } else {
                    return;
                }

                const svgNs = 'http://www.w3.org/2000/svg';
                const path = document.createElementNS(svgNs, 'path');
                const d = `M ${lineX} ${lineY}
                           C ${(annotationX + lineX) / 2} ${lineY},
                             ${(annotationX + lineX) / 2} ${annotationY},
                             ${annotationX} ${annotationY}`;
                path.setAttributeNS(null, 'd', d);
                svg.appendChild(path);
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
