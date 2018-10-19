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
    // date.getHours() + ":" + date.getMinutes();

    document.getElementById("airplane").style.left = "0px";
    setInterval(movePlane, 10); 
}
//pic1

document.getElementById("dining").onmouseenter = function(){
    document.getElementById("pic").src= "img/dinner2.jpg";
};

document.getElementById("dining").onmouseleave = function(){
    document.getElementById("pic").src= "img/dinner1.jpg";  
};

//pic2
document.getElementById("spa").onmouseenter = function(){
    document.getElementById("pic2").src= "img/spa2.jpg";
};

document.getElementById("spa").onmouseleave = function(){
    document.getElementById("pic2").src= "img/spa1.jpg";  
};

//pic3
document.getElementById("explore").onmouseenter = function(){
    document.getElementById("pic3").src= "img/surf1.jpg";
};

document.getElementById("explore").onmouseleave = function(){
    document.getElementById("pic3").src= "img/surf2.jpg";  
};

//pic4
document.getElementById("thingsToDo").onmouseenter = function(){
    document.getElementById("pic4").src= "img/sight1.jpg";
};

document.getElementById("thingsToDo").onmouseleave = function(){
    document.getElementById("pic4").src= "img/sight2.jpg";  
};

//pic5
document.getElementById("nightlife").onmouseenter = function(){
    document.getElementById("pic5").src= "img/nightlife1.jpg";
};

document.getElementById("nightlife").onmouseleave = function(){
    document.getElementById("pic5").src= "img/nightlife2.jpg";  
};