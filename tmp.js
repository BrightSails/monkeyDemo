// ==UserScript==
// @name         RainBow
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  color name!
// @author       You
// @match        https://www.pttime.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// ==/UserScript==style="

(function() {
    'use strict';
    try{
    document.querySelectorAll('body > table.head.auto.mb10 > tbody > tr > td > div > div.right > a.btn.btn-danger')[0].remove()
    document.querySelectorAll('#mainmenu > li.lianghao > a')[0].remove()
    document.getElementsByClassName('smallshop')[0].remove()
    document.querySelectorAll('#mainmenu > li:nth-child(13) > a')[0].remove()
    document.querySelectorAll('#outer')[0].innerHTML=""
    document.querySelectorAll('#info_block > tbody > tr:nth-child(3) > td > div')[0].innerHTML = ""
    document.querySelectorAll('#ka65')[0].setAttribute('style','display:none')
    
    
   
    }catch(error){

    }
    try{
        document.querySelectorAll('#ad_belowsearchbox')[0].innerHTML = ""
    }catch(error){

    }
    try{
        document.querySelectorAll('#info_block > tbody > tr:nth-child(2) > td > div.left > span:nth-child(7) > font')[0].innerHTML = ""
    }catch(error){

    }

    const randomColor = () => `#${Math.random().toString(16).substr(2, 6)}`;    
    let a = document.querySelectorAll('#info_block > tbody > tr:nth-child(1) > td > span > a > b')[0].innerHTML;
    let x= "";
    for(let b = 0;b<5;b++){
        x+="<font color=\""+ randomColor() +"\">" + a[b] + "</font>"
    }

    let p =document.querySelectorAll('#info_block > tbody > tr:nth-child(1) > td > span > a > b')[0]
    setInterval(function () { //每0.5秒刷新一次图表
       let x= "";
       for(let b = 0;b<5;b++){
           x+="<font color=\""+ randomColor() +"\">" + a[b] + "</font>"
       }
       p.innerHTML = x
   }, 500);

  
    
   //window.open('https://www.pttime.org/attendance.php','_self');
  
})();
