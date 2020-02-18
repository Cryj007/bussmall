'use strict'

//what needs to happen

//list of the images

//constructor function to track the properties if the images
    //how many times the images render
    //how many times the images are clicked

//images should be randomly rendered

//no images showing up twice after render

//gloabl variables

//staorage of the images
//page lement neede to reference
var busImageOne = document.getElementById(imageOne);
var busImageTwo = document.getElementById(imageTwo);
var allBusImages=[];

//constructor function for the images

function busItems(name, imagePath){
this.name= name;
this.image= imagePath
this.timesClicked= 0;
this.timesRendered= 0;
allBusImages.push(this);
}

new busImage('StarWarsBag', './img/bag[1].jpg');
new busImage('BananaCutter', './img/banana[1].jpg');

busImageOne.src= allBusImages[0].image;
busImageOne.alt= allBusImages[0].name;

busImageTwo.src= allBusImages[1].image;
busImagetwo.alt= allBusImages[1].name;