// Code goes here
var clRegex=/(^|\s)ripple(\s|$)/;
var animRegex=/(^|\s)animate(\s|$)/;
console.log(document.querySelectorAll('.ripple li'))
var ripple;
ripple=document.createElement("span");
document.querySelector('ul').addEventListener('click',function(elem){


    var ele=elem.target;
    debugger;
    if(!ele.added){
        ele.added=true;
        ripple=document.createElement("span");
        ele.insertBefore(ripple,ele.querySelector(':before'));
    }else{
        ripple=ele.querySelector('span');
    }
    ripple.className=ripple.className.replace(animRegex,'');
    var style=window.getComputedStyle(ele);
    var wid=style.width;
    var ht=style.height;
    console.log(wid,ht);
    var d=wid
    var parent=ele.parentNode;
    if(!ripple.className.match(clRegex))
        ripple.className+='ripple';
    ripple.style.width=d;
    ripple.style.height=d;
    ripple.style.left=(elem.pageX-this.offsetLeft-parseInt(d)/2)+"px";
    ripple.style.top=(elem.pageY-ele.offsetTop-parseInt(d)/2)+"px";
    window.setTimeout(function(){
        ripple.classList.add('animate');
    },100)
    console.log(elem);
},false)