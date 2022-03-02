
var x;

var y;

var xspeed;

var yspeed;

var life;

var score;

var speed;

var alive;

function keyPressed() {
    // Play Again
    x = 400;
    y = 200;
    var theta = random(-55, 55) * PI / 180;
    xspeed = ((speed * cos(theta)));
    yspeed = ((speed * sin(theta)));
    alive = true;
}

function setup() {
    initializeFields();
    // interface
    createCanvas(800, 400);
    var theta = random(-55, 55) * PI / 180;
    xspeed = ((speed * cos(theta)));
    yspeed = ((speed * sin(theta)));
}

function draw() {
    // background color
    background(125);
    // RGB
    fill(255, 120, 10);
    // ball
    circle(x, y, 55);
    fill(111, 0, 255);
    rect(800 - 40, mouseY - 50, 20, 120);
    fill(255, 255, 255);
    rect(22, y - 50, 20, 120);
    // ball + xspeed
    x = x + xspeed;
    // ball + yspeed
    y = y + yspeed;
    if (x < 55) {
        xspeed = -xspeed;
    }
    if (x > 780) {
        // END Game
        xspeed = 0;
        yspeed = 0;
        if (alive) {
            life = life - 1;
        }
        alive = false;
    }
    if (x > 760 && y > (mouseY - 50) && y < (mouseY + 50)) {
        xspeed = -xspeed;
        if (alive) {
            score = score + 3;
        }
    }
    if (y > 400 || y < 0) {
        yspeed = -yspeed;
    }
    textSize(40);
    fill(112, 244, 244);
    text("Score:" + score + " Life:" + life, 244, 40);
    if (life <= 0) {
        textSize(50);
        fill(255, 0, 0);
        text("Try Again", 300, 244);
    }
}

function initializeFields() {
    x = 400;
    y = 200;
    xspeed = 20;
    yspeed = 20;
    life = 3;
    score = 0;
    speed = 12;
    alive = true;
}
