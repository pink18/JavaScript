function getElement(str) {
    if (str.charAt(0) === '.') {
        return document.getElementsByClassName(str);
    } else if (str.charAt(0) === '#') {
        return document.getElementById(str);
    } else {
        return document.getElementsByTagName(str);
    }

}

function html(el,str){
    el.innerHTML=str;
    return el;
}

function hide(el) {
    var val = 1;
    el.style.opacity = val;
    var timer = setInterval(function () {
        val -= 0.1;
        if (val <= 0) {
            el.style.opacity = 0;
            // el.style.display = 'none';
            clearInterval(timer);
            return;
        }
        el.style.opacity = val;
    }, 50)


    return el;
}
setTimeout(function () {
    show(box);
}, 300)

function show(el) {
    var val = 0;
    el.style.opacity = val;
    var timer = setInterval(function () {
        val += 0.1;
        if (val >= 1) {
            el.style.opacity = 1;
            clearInterval(timer);
            return;
        }
        el.style.opacity = val;
    }, 50)

    return el;
}