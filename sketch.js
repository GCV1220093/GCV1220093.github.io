// this is for your game/web toy
var positionX;
var positionY;
var velocityX;
var velocityY;

function setup() {
  noStroke();
   new Canvas(600, 600);
    Block = new Sprite(300, 300);
    Block.img = 'assets/Block.png';
    var paddle = 'assets/Pongpaddle.png';
    positionX = width / 2;
    positionY = height / 2;
    velocityX = 15;
    velocityY = 10;
}
function draw() {
  fill(100, 100, 100);
  ellipse(mouseX, mouseY, 100);
ellipse(100, 100, 100, 30);
fill(255, 0, 0);
rect(200, 200, 20);
fill(20, 255, 200);
noStroke();
fill(100, 2, 0);
ellipse(positionX, positionY, 80);

positionX += velocityX;
if (positionX > width - 40) {
  velocityX *= -1;
}
if (positionX < 40) {
  velocityX *= -1;
}

positionY += velocityY;
if (positionY > height - 40) {
  velocityY *= -1;
}
if (positionY < 40) {
  velocityY *= -1;
}


  }
  




