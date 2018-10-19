// Code by Brooklyn Olliver
// October 19th, 2018
// JavaScript CPNT 262 - Final Assignment 

function showMenu(){
    console.log("showing menu");
    var myMenu = document.getElementById("hamburger-menu");
    var myIcon = document.getElementById("hamburger-icon");
    myMenu.style.display = "block";
    myIcon.onclick = hideMenu;
}

function hideMenu(){
    console.log("hiding menu");
    var myMenu = document.getElementById("hamburger-menu");
    var myIcon = document.getElementById("hamburger-icon");
    myMenu.style.display = "none";
    myIcon.onclick = showMenu;

}


window.onload = function () {
    var myIcon = document.getElementById("hamburger-icon");
    myIcon.onclick = showMenu;
    var date= new Date();
    document.getElementById('date').innerHTML= date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear(); 
   
}

