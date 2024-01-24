//selecting popup box popup overlay button
let popupoverlay=document.querySelector(".popup-overlay")
let popupbox=document.querySelector(".popup-box")
let addpopupbutton=document.getElementById("add-popup-button")
 addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
 })