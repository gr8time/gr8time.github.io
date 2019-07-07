/* var navLi = document.getElementById("nav-list").getElementsByTagName("li");
var sound = document.getElementById(soundobj);
navLi.onmouseover = PlaySound('pop'); */

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}