var slider_plugin = (function () {
    var fifi_slider = function (settings) {
    }
    return fifi_slider;
})();


var fifi_slider = function (settings) {
    var _ = this;
    _.def = {
        target: $('.slider'),
        dotsWrapper: $('.dots-wrapper'),
        arrowLeft: $('.arrow-left'),
        arrowRight: $('.arrow-right'),
        transition: {
            speed: 300,
            easing: ''
        },
        swipe: true,
        autoHeight: true,
        afterChangeSlide: function afterChangeSlide() { }
    };
}

function $extendObj(_def, addons) {
    if (typeof addons !== "undefined") {
        for (var prop in _def) {
            if (addons[prop] != undefined) {
                _def[prop] = addons[prop];
            }
        }
    }
}



function $(elem) {
    return document.querySelector(elem);
}
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className
    }
}
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}