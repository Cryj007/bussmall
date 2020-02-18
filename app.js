'use strict'

//what needs to happen

//list of the images

//constructor function to track the properties if the images
    //how many times the images render
    //how many times the images are clicked

//images should be randomly rendered

//no images showing up twice after render

//gloabl variables

var allBusImages=[]; //--> array to store random generated images

//constructor function for the images

function busItems(name, imagePath){
this.name= name;
this.image= imagePath
this.timesClicked= 0;
this.timesRendered= 0;
allBusImages.push(this);
}

var bag= new busItems('Bag', './img/bag[1].jpg');
var banana= new busItems('Banana', './img/banana[1].jpg');

//generate random images


//render images
//no duplicates



//conditional logic to render images different
