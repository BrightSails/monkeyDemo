// ==UserScript==
// @name         RainBow
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  color name!
// @author       You
// @match        https://www.pttime.org/*
// @include      https://www.pttime.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// ==/UserScript==style="

(function() {
    'use strict';
    document.querySelectorAll('#outer')[0].innerHTML=""
    document.querySelectorAll('#info_block > tbody > tr:nth-child(3) > td > div')[0].innerHTML = ""
    document.querySelectorAll('#ka65')[0].setAttribute('style','display:none')
    document.querySelectorAll('#info_block > tbody > tr:nth-child(2) > td > div.left > span:nth-child(7) > font')[0].innerHTML = ""
    
    const randomColor = () => `#${Math.random().toString(16).substr(2, 6)}`;    
    let a = document.querySelectorAll('#info_block > tbody > tr:nth-child(1) > td > span > a > b')[0].innerHTML;
    let x= "";
    for(let b = 0;b<5;b++){
        x+="<font color=\""+ randomColor() +"\">" + a[b] + "</font>"
    }

    let p =document.querySelectorAll('#info_block > tbody > tr:nth-child(1) > td > span > a > b')[0]
    setInterval(function () { //每5秒刷新一次图表
        //需要执行的代码写在这里
                 let x= "";
       for(let b = 0;b<5;b++){
           x+="<font color=\""+ randomColor() +"\">" + a[b] + "</font>"
       }
       p.innerHTML = x
   }, 500);
   window.open('https://www.pttime.org/attendance.php','_self');
  
})();
