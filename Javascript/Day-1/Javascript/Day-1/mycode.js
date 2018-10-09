// This is how you leave a comment// 
//alert is the pop up when you load the page//   
alert('Hello world');
alert('How is your day?');


// This is stored in the console//
console.log('Secret message');
console.log('Another secret message');


/* This is how you add something to the page */
document.write('Hey whats up?');

// This is my variable//
var myName= ('Brooklyn');
console.log(myName);

var number=(7361827);
console.log(number);

//Arithmetic
var numberOfCars=6
var numbrOfBikes=20
var numberOfvehicles= numberOfCars + numbrOfBikes
console.log(numberOfvehicles)

var numberOfLipsticks=20
var numberOfEyeshadow=15
var numberOfMakeup= numberOfLipsticks * numberOfEyeshadow
console.log(numberOfMakeup)

var numberOfpieSlices=8
var numberOfPeople=4
var slicesPerPerson= numberOfpieSlices / numberOfPeople
console.log(slicesPerPerson)


//Strings

// var firstName= ('Brooklyn ');
// var fullName= firstName + "Olliver";
// console.log(fullName);


var myName= ('Brook ');
myName += 'Olliver';
console.log(myName);


//Function

function makeupTypes(){
    console.log('Lipstick, eyeliner, eyeshadow');
    console.log('Highlighter, bronzer, foundation');
}

// Calling the function
makeupTypes();


//Practice Function

function functionFullName(){
   console.log('Brooklyn Olliver');
}
functionFullName();



function fullName(firstName, lastName){
    return firstName + lastName
}
console.log(fullName('Brook ', 'Olliver'));




function box(number){
    return number * number;
}

console.log(box(3));

//name function
function addOne (num){
    var newNumber = num + 1;
    console.log('You now have ' + newNumber);
}
// declare variables
var numberOfGum= 5

//use them in fuctions
addOne(numberOfGum);


function addNumbers(a, b){
console.log(a + b);
}

addNumbers(5, 7);


function newName(nameA, nameB){
    return nameA + nameB
}

console.log (newName('Debbie ', 'Olliver'));

//Control Flow

var temp = -30 ;
var hasScarf= true;
var hasGlasses= true;


if (temp < -20 && hasScarf == true) {
    console.log('Stay inside and have a scarf');
} else if (temp < -1) {
    console.log('Wear a coat and hat');
} else if (temp < 10) {
    console.log('Wear a coat');
} else if (temp >= 10 && hasGlasses == true) {
    console.log('Wear whatever you want');
}

