function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  circle(mouseX, mouseY, 90);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
