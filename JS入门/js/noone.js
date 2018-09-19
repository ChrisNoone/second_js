// JavaScript Document

function $(v) {
    if (typeof v === "function") {
        /*
        *   相当于将一个函数 function (){} 传给了 $()
        * */
        window.onload = v;
    } else if (typeof v === "string") {
        return document.getElementById(v);
    } else if (typeof v === "object") {
        return v;
    }
}

// 获取元素样式函数
function getStyle(obj, attr) {
    // 三步运算
    return getComputedStyle(obj) ? getComputedStyle(obj)[attr] : obj.currentStyle[sttr];
    /*
    *   getComputedStyle - 获取到计算机(浏览器)计算后的样式
    *   currentStyle - 解决getComputedStyle在低版本IE中不兼容的问题
    *
    * */
}

// 移动函数
function doMove(obj, attr, speed, loc, endFunc) {
    speed = parseInt(getStyle(obj, attr)) < loc ? speed : -speed;

    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var location = parseInt(getStyle(obj, attr)) + speed;

        if (speed > 0 && location >= loc || speed < 0 && location <= loc) {
            location = loc;
        }

        obj.style[attr] = location + "px";

        if (location  === loc) {
            clearInterval(obj.timer);

            // if (endFunc) {
            //     endFunc();
            // }

            endFunc && endFunc();
        }
    }, 30);
}

// 抖动函数
function shake(obj, attr) {
    clearInterval(obj.shack);
    obj.style[attr] = obj.pos + "px";

    obj.pos = parseInt(getStyle(obj, attr));
    obj.shack = null;
    var arr = [];
    var num =0;

    for (var i = 10; i >= 0; i-=2) {
        arr.push(i, -i);
    }

    obj.shack = setInterval(function () {
        obj.style[attr] = obj.pos + arr[num] + "px";
        num++;
        if (num === arr.length) {
            obj.able = true;
            clearInterval(obj.shack);
        }
    }, 50)
}