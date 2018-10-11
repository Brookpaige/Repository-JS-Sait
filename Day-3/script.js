// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(navigator.platform);


//GEOLOCATION//

// function success(position){
//     var latitude= position.coords.latitude;
//     var longitude= position.coords.longitude;
//     document.write(latitude);
//     document.write(longitude);       
// }

// if (typeof navigator.geolocation){
//     console.log(success);
// } else {
//     console.log('Sorry your browser does not support this');
// }

// navigator.geolocation.getCurrentPosition(success);

// function geoError(errorObj){
//     alert('uh oh, somthing went wrong :( ');
    
// }
// navigator.geolocation.getCurrentPosition(success, geoError);



//HOW TO FIND SCREEN INFO//

// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.colorDepth);
// console.log(screen.orientation);

//CHANGE BACKGROUND COLOR//
document.bgColor="lightblue";


//LINKS AND IMAGES COLLECTIONS//
// console.log(document.images[0]);//1st image on the page
// console.log(document.images[1]);//2nd image on the page
// console.log(document.images.length);//Returns how many images are on the page
// console.log(document.links.length);//Returns how many links are on the page


//HTML COLLECTIONS//
var header= document.getElementById('header');

console.log(header);

var listItems = document.getElementsByTagName('li');
console.log(listItems);

listItems= document.getElementsByClassName("nav-item");
console.log(listItems);

listItems = document.querySelectorAll('li');
console.log(listItems);

var firstItem = document.querySelector('li')
console.log(firstItem);

console.log(listItems[0].classList);

document.getElementsByTagName('p');
var specificParagraph= document.getElementsByTagName('p')[1];
console.log(specificParagraph);

//CHANGE IMAGE//
// var imgPuppy = document.getElementById('puppyPic');
// imgPuppy.src= 'http://placekitten.com/200/300';

//ALSO CHANGE IMAGE//
var imgPuppy = document.getElementById('puppyPic');
imgPuppy.setAttribute('src', 'http://placekitten.com/200/300');

//CHANGE CSS IN JAVA// //FOR HEADER//
var pageHeader= document.getElementById('header');
pageHeader.style.backgroundColor='pink';

//CHANGE CSS FOR FOOTER
var pageFooter= document.getElementById('footer');
pageFooter.style.backgroundColor='orange';
pageFooter.style.padding='20px';
pageFooter.style.fontSize="30px";

//CHANGE CSS FOR NAV
var pageNav= document.getElementsByClassName('nav-item')[0];
pageNav.style.backgroundColor='red';
var pageNav= document.getElementsByClassName('nav-item')[1];
pageNav.style.backgroundColor='orange';
var pageNav= document.getElementsByClassName('nav-item')[2];
pageNav.style.backgroundColor='yellow';


//DOM INNERHTML// //CHANGING//
var pageFooter = document.getElementById('footer');
pageFooter.innerHTML= '<h1> Hey guys!</h1> <p>I changed my footer</p>';

//ADDING//
var pageHeader=document.getElementById('header');
pageHeader.innerHTML += 'I am adding this to my header';

//ADDING P TAG//
var newParagraph= document.createElement('p');
var paragraphText = document.createTextNode('PUPPY');
newParagraph.appendChild(paragraphText);

pageHeader.appendChild(newParagraph);


var newParagraph= document.createElement('p');
var paragraphText = document.createTextNode('Added this to footer');
newParagraph.appendChild(paragraphText);

pageFooter.appendChild(newParagraph);



var pageBody= document.getElementsByTagName('body')[0];
var newImg = document.createElement('img');
newImg.src = 'http://www.placepuppy.net/4p/400/250';
newImg.style.border= '1px solid black';

pageBody.appendChild(newImg);
