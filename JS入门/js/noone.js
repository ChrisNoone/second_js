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

function getStyle(obj, attr) {
    // 三步运算
    return getComputedStyle(obj) ? getComputedStyle(obj)[attr] : obj.currentStyle[sttr];
    /*
    *   getComputedStyle - 获取到计算机(浏览器)计算后的样式
    *   currentStyle - 解决getComputedStyle在低版本IE中不兼容的问题
    *
    * */
}