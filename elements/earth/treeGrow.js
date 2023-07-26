
var axiom = "F";
var sentence = axiom; 
var len = 150; 
var angle; 
var leaf; 
var timesGenerated; 
var watering; 


var rules = []; 
rules[0] = { 
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate(){
    len *=  0.5;
    var nextSentence = "";

    for(var i = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);
        var found = false; 
        for(var j = 0; j < rules.length; j++){
            if(current == rules[j].a){
                found = true; 
                nextSentence += rules[j].b;
                break;
            }
        }
        if(!found){
            nextSentence += current;
        }
        
    }

    sentence = nextSentence;   
    turtle();
}

function turtle(){
    stroke(80, 114, 60);
    resetMatrix();
    translate(width/2, height);

    for(var i = 0; i < sentence.length; i ++){
        var current = sentence.charAt(i);

        if(current == "F"){
            line (0,0,0, -len);
            translate(0, -len);
            image(leaf, 0,0,10,10);
        } else if(current == "+"){
            rotate(angle); 
        }else if(current == "-"){
            rotate(-angle); 
        }else if(current == "["){
            push(); 
        }else if(current == "]"){
            pop();
        }
    }
}


function setup() {
    timesGenerated = 0; 

    createCanvas(windowWidth, windowHeight);

    angle = radians(25);

    turtle();
    watering = false; 
}

function preload() {
    leaf = loadImage("assets/leaf.png");
    wateringCan = loadImage("assets/wateringCan.png");
    waterDrops = loadImage("assets/randrop.png");
    spaceBarImg = loadImage("assets/spacebar.png")
}

function draw(){
   background(255);

    image(spaceBarImg, 100,100,200,100);
    image(wateringCan, mouseX, mouseY,80,70);

    if(timesGenerated <= 3){
        turtle();
    }

    if(watering == true){
        resetMatrix();
        image(waterDrops, mouseX, mouseY + frameCount *3,30,30); 
    }
}

function keyPressed(){
    if(keyCode == 32 && timesGenerated < 3 ){
        watering = true; 
        timesGenerated +=1;
        generate();
    } 
}

function keyReleased(){
    watering = false;
}
