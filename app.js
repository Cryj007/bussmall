'use strict'

//what needs to happen

//list of the images

//constructor function to track the properties if the images
    //how many times the images render
    //how many times the images are clicked

//images should be randomly rendered

//no images showing up twice after render

//gloabl variables
var imageOne= document.getElementById('image1');
var imageTwo= document.getElementById('image2');
var imageThree= document.getElementById('image3');
var imageFour= document.getElementById('image4');
var imageFive= document.getElementById('image5');
var imageSix= document.getElementById('image6');
var imageSeven= document.getElementById('image7');
var totalClicks= 0
var allBusImages=[]; //--> array to store random generated images
var chart= null; //-->i believe it can be changed later, no current value yet

//images in html
// image1
// image2

//constructor function for the images

function busItems(name, imagePath){ //-->the properties I want to show up in my 'new'
    this.name= name;
    this.image= imagePath
    this.timesClicked= 0;
    this.timesRendered= 0;
    allBusImages.push(this);
}

new busItems('Bag', './img/bag.jpg'); //--> the thing I want to show up with the properties above
new busItems('Banana', './img/banana.jpg');
new busItems('Bathroom', './img/bathroom.jpg');
new busItems('Bubblegum', './img/bubblegum.jpg');
new busItems('Cthulhu', './img/Cthulhu.jpg');
new busItems('Dog-Duck', './img/dog-duck.jpg');
new busItems('Shark', './img/shark.jpg');

//put images in html



//generate random images
function randomRoll() {
    var randomPic= Math.floor(Math.random() *allBusImages.length);
    var random= allBusImages[randomPic];

    while(
      random.name === imageOne||
      random.name === imageTwo  
    ){
        var randomPic= Math.floor(Math.random() *allBusImages.length);
        var random= image[randomPic];
    }
    return random;
}
//render images
//no duplicates

var randomImage1 = randomRoll();
var one = document.getElementById('image1');
var two = document.getElementById('image2');
var three = document.getElementById('image3');
var four = document.getElementById('image4');
var five = document.getElementById('image5');
var six = document.getElementById('image6');
var seven = document.getElementById('image7');


// console.log('HELLOOO ', randomImage1);
one.setAttribute('src', randomImage1.image);
one.setAttribute('alt', randomImage1.name);

two.setAttribute('src', randomImage1.image);
two.setAttribute('alt', randomImage1.name);

three.setAttribute('src', randomImage1.image);
three.setAttribute('alt', randomImage1.name);

four.setAttribute('src', randomImage1.image);
four.setAttribute('alt', randomImage1.name);

five.setAttribute('src', randomImage1.image);
five.setAttribute('alt', randomImage1.name);

six.setAttribute('src', randomImage1.image);
six.setAttribute('alt', randomImage1.name);

seven.setAttribute('src', randomImage1.image);
seven.setAttribute('alt', randomImage1.name);

// function renderImage
  

//conditional logic to render images different


//putting in the eventListener, a function

//record the clicks

//get new images after updating products

//add in chart.js

//