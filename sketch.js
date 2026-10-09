function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  angleMode(DEGREES);
  stroke(255);
  strokeWeight(1);
}

function draw() {
  push();
  translate(random(0, width), random(0, height));
  rotate(random(360));
  scale(random(0.1 * random(1, 5)));
  spline(
    0, 0,
    random(350, 400), random(150, 250),
    random(500, 600), random(400, 500),
    180, 300,
  );
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}