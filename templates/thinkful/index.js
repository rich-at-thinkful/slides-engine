(function() {
    const CONTENT_WIDTH = 1280;
    const CONTENT_HEIGHT = 720;

    function getMain() {
        return document.getElementById('main');
    }

    function getSlideWrapper() {
        return document.getElementById('slide-wrapper');
    }

    function resize() {
        const main = getMain();
        const width = main.clientWidth;
        const height = main.clientHeight;

        const wrapper = getSlideWrapper();
        const xScale = width / CONTENT_WIDTH;
        const yScale = height / CONTENT_HEIGHT;
        const scale = Math.min(xScale, yScale);
        wrapper.style.width = `${CONTENT_WIDTH}px`;
        wrapper.style.height = `${CONTENT_HEIGHT}px`;
        wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }

    function main() {
        window.onresize = resize;
        resize();
    }

    window.addEventListener('DOMContentLoaded', main);
})();
