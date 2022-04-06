var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
if (!isMobile) {
    luxy.init({
        wrapper: '#luxy',
        wrapperSpeed: 0.065,

    });
}


var figure = $(".video");
var vid = $("video");

[].forEach.call(figure, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e) {
    $('.thevideo')[0].play();
}

function hideVideo(e) {
    $('.thevideo')[0].pause();
}