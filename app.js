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
var imageEight= document.getElementById('image8');
var imageNine= document.getElementById('image9');
var imageTen= document.getElementById('image10');
var imageEleven= document.getElementById('image11');
var imageTwelve= document.getElementById('image12');
var imageThirteen= document.getElementById('image13');
var imageFourteen= document.getElementById('image14');
var imageFifteen= document.getElementById('image15');
var imageSixteen= document.getElementById('image16');
var imageSeventeen= document.getElementById('image17');
var imageEigthteen= document.getElementById('image18');
var imageNineteen= document.getElementById('image19');
var imageTwenty= document.getElementById('image20');
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
new busItems('Boots', './img/boots.jpg');
new busItems('Breakfast', './img/breakfast.jpg');
new busItems('Bubblegum', './img/bubblegum.jpg');
new busItems('Chair', './img/chair.jpg');
new busItems('Cthulhu', './img/Cthulhu.jpg');
new busItems('Dog-Duck', './img/dog-duck.jpg');
new busItems('Dragon', './img/dragon.jpg');
new busItems('Pen', './img/pen.jpg');
new busItems('Pet-Sweep', './img/pet-sweep.jpg');
new busItems('Scissors', './img/scissors.jpg');
new busItems('Shark', './img/shark.jpg');
new busItems('Sweep', './img/sweep.png');
new busItems('Tauntaun', './img/tauntaun.jpg');
new busItems('Unicorn', './img/unicorn.jpg');
new busItems('Usb', './img/usb.gif');
new busItems('Water-Can', './img/water-can.jpg');
new busItems('Wine-Glass', './img/wine-glass.jpg');

//put images in html



//generate random images
function randomRoll() {
    var randomPic= Math.floor(Math.random() * allBusImages.length);
    var random = allBusImages[randomPic];
console.log(random)
    while(
      random.imageTwo === imageOne.alt||
      random.imageThree === imageTwo.alt||
      random.imageOne === imageThree.alt )
      {
        var randomPic= Math.floor(Math.random() * allBusImages.length);
        var random= allBusImages[randomPic]; 
        console.log()
    }
    return random;
}
//render images
// function randomRoll()
//no duplicates

var randomImage1 = randomRoll();
var randomImage2 = randomRoll();
var randomImage3 = randomRoll();
var one = document.getElementById('image1');
var two = document.getElementById('image2');
var three = document.getElementById('image3');
var four = document.getElementById('image4');
var five = document.getElementById('image5');       
var six = document.getElementById('image6');
var seven = document.getElementById('image7');


// console.log('HELLOOO ', randomImage1);
function render(){


    one.setAttribute('src', randomImage1.image);
    one.setAttribute('alt', randomImage1.name);
    // allBusImages[randomRoll].timesRendered++;

    two.setAttribute('src', randomImage2.image);
    two.setAttribute('alt', randomImage2.name);

    three.setAttribute('src', randomImage3.image);
    three.setAttribute('alt', randomImage3.name);

    // four.setAttribute('src', randomImage1.image);
    // four.setAttribute('alt', randomImage1.name);

    // five.setAttribute('src', randomImage1.image);
    // five.setAttribute('alt', randomImage1.name);

    // six.setAttribute('src', randomImage1.image);
    // six.setAttribute('alt', randomImage1.name);

    // seven.setAttribute('src', randomImage1.image);
    // seven.setAttribute('alt', randomImage1.name);

}
render();

//putting in the eventListener, a function
//record the clicks

function eventClicks(event){
    var picId= event.target.getAttribute('alt');
    console.log(picId);

    for(var i=0;i<busItems.length;i++){
        if(picId === allBusImages[i].name)
        allBusImages[i].timesCLicked++;
    }
if(totalClicks<5){
totalClicks++;
        //  console.log(allBusImages[i]);
        }
    }
render();

one.addEventListener('click', eventClicks);
two.addEventListener('click', eventClicks);
three.addEventListener('click', eventClicks);

render();

//get new images after updating products

//add in chart.js

