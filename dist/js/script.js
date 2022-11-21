const slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 1,
    autoplay: false,
    fixedWidth: 600,
    center: true,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    arrowKeys: true
});

document.querySelector('.prev').onclick = function() {
    slider.goTo('prev');
};
document.querySelector('.next').onclick = function() {
    slider.goTo('next');
};