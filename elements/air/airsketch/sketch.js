
let circles = [];
let rectangleFill = 0;
const rectangleMaxFill = 200;

function preload() {
  // Load the background image
  bgImage = loadImage('boatimg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 30; i++) {
    circles.push(new Circle(random(width), random(height)));
  }
}

function draw() {
  // background(220);
  image(bgImage, 0, 0, width, height);

  fill(0, 100, 200, rectangleFill);
  rect(width / 2 - 100, height / 2 - 50, 200, 100);
  fill(0);

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }

  if (rectangleFill >= rectangleMaxFill) {
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text('o2', width / 2, height / 2);
  }
}

function mousePressed() {
  for (let i = circles.length - 1; i >= 0; i--) {
    if (circles[i].contains(mouseX, mouseY)) {
      circles.splice(i, 1);
      rectangleFill += 10;
    }
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, this.radius * 2);
  }

  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    return d < this.radius;
  }
}

