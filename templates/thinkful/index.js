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

    function onSlideChange(
        currentSlide,
        totalSlides,
        currentFragment,
        totalFragments
    ) {
        getProgressBar().style.width = `${100 *
            currentSlide /
            (totalSlides - 1)}%`;
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
    }

    function highlightCode() {
        // Trim whitespace
        const code = document.querySelectorAll('pre code');
        code.forEach(block => {
            block.innerHTML = block.innerHTML.replace(/(^\s*\n)+/, '');
        });
        hljs.initHighlighting();
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
