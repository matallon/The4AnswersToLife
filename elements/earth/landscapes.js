
var landscapeImg; 
var fire; 
var tree;
var sunflower;
var no;
var wateringCan;
var sun;

var sunPos = [];
var firePos = []; 
var treePos  = [];
var sunflowerPos  = [];
var wateringCanPos = [];

var treeInPlace = false;
var sunInPlace = false;
var sunflowerInPlace = false; 
var wateringInPlace = false;

var sunMoving = false;
var treeMoving = false;
var sunflowerMoving = false; 
var wateringMoving = false;

function setup(){
    createCanvas(windowWidth, windowHeight);

    firePos = []; 
    treePos  = [width * 0.55, height * 0.05];
    sunflowerPos  = [width * 0.57, height * 0.3];
    sunPos = [width * 0.57, height * 0.5]; 
    wateringCanPos = [width * 0.56, height * 0.7];
}

function draw(){
    background(255);
    image(landscapeImg, 0,0, width/2, height);
    image(tree,treePos[0], treePos[1], width *0.1, height*0.25);
    image(sunflower,sunflowerPos[0], sunflowerPos[1], width *0.069, height*0.2);
    image(sun, sunPos[0], sunPos[1], width *0.09, height*0.2);
    image(wateringCan, wateringCanPos[0], wateringCanPos[1], width *0.09, height*0.2);


    if(sunMoving && !sunInPlace){
        sunPos = [mouseX, mouseY];

    } 
    
    if( wateringMoving && !wateringInPlace){
        wateringCanPos = [mouseX, mouseY];
    } 
    
    if(treeMoving && !treeInPlace){
        treePos = [mouseX, mouseY];
    } 
    
    if(sunflowerMoving && !sunflowerInPlace){
        sunflowerPos = [mouseX, mouseY];
    }

    if(sunflowerInPlace && treeInPlace && sunInPlace && wateringInPlace){
        button = createButton('GEE WHIZZ YOU GODDAMN DID IT MY FRIEND');
        button.position(width * 0.75, height* 0.45);
        button.mousePressed(nextPage);
    }
}

function preload(){
    landscapeImg = loadImage("assets/field.png");
    fire = loadImage("assets/fire.png");
    sun = loadImage("assets/sun.png");
    tree = loadImage("assets/tree.png");
    sunflower = loadImage("assets/sunflower.png");
    no = loadImage("assets/No.png");
    wateringCan = loadImage("assets/wateringCan.png");
}

function mouseClicked(){

    if(mouseX > sunPos[0] && mouseX < (sunPos[0] + 100) && mouseY > sunPos[1] && mouseY < (sunPos[1] + 100)){
        sunMoving = true;
        wateringMoving = false;
        treeMoving = false;
        sunflowerMoving = false;
    } 

    if(mouseX > wateringCanPos[0] && mouseX < (wateringCanPos[0] + 100) && mouseY > wateringCanPos[1] && mouseY < (wateringCanPos[1] + 100)){
        wateringMoving = true;
        sunMoving = false;
        treeMoving = false;
        sunflowerMoving = false; 
    } 

    if(mouseX > treePos[0] && mouseX < (treePos[0] + 100) && mouseY > treePos[1] && mouseY < (treePos[1] + 100)){
        treeMoving = true;
        sunMoving = false;
        wateringMoving = false;
        sunflowerMoving = false; 
    } 

    if(mouseX > sunflowerPos[0] && mouseX < (sunflowerPos[0] + 100) && mouseY > sunflowerPos[1] && mouseY < (sunflowerPos[1] + 100)){
        sunflowerMoving = true; 
        sunMoving = false;
        wateringMoving = false;
        treeMoving = false;
    } 

    //for everything to be in place
    if(sunMoving && mouseX > width*0.02 && mouseX < ((width*0.02)+ 100) && mouseY > height*0.1  && mouseY < ((height*0.1) + 100)){
        sunMoving = false;
        sunInPlace = true;
    }

    if(treeMoving && mouseX > width*0.3 && mouseX < ((width*0.3) + 100) && mouseY > height*0.44  && mouseY < ((height*0.44) + 100)){
        treeMoving = false;
        treeInPlace = true;
    }

    if(wateringMoving && mouseX > width*0.189 && mouseX < ((width*0.189) + 100) && mouseY > height*0.685  && mouseY < ((height*0.685) + 100)){
        wateringMoving = false;
        wateringInPlace = true;
    }

    if(sunflowerMoving && mouseX > width*0.07 && mouseX < ((width*0.07) + 100) && mouseY > height*0.64  && mouseY < ((height*0.64) + 100)){
        sunflowerMoving = false;
        sunflowerInPlace = true;
    }
}

function nextPage(){
    window.open('lastEarth.html');
}



