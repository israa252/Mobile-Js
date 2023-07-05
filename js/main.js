var circle =document.getElementById('circle');
var upbtn =document.getElementById('upbtn');
var dobtn =document.getElementById('dobtn');
var rotateVal=circle.style.transform;
var rotatesum;
upbtn.onclick=function(){
    rotatesum = rotateVal +"rotate(-90deg)";
    circle.style.transform =rotatesum;
     rotateVal = rotatesum;
}
dobtn.onclick=function(){
    rotatesum = rotateVal +"rotate(90deg)";
    circle.style.transform =rotatesum;
     rotateVal = rotatesum;
}