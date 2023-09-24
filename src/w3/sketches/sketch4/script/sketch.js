let pos;
let vel;
let acc;
let mouse;
let mouseToCircle;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  mouse = createVector();
  mouseToCircle = createVector();
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}
function draw() {
  background(255);
  update();
  display();
  checkEdges();
  displayVectors();

  mouse.set(mouseX, mouseY);
  mouseToCircle = p5.Vector.sub(mouse, pos);
  strokeWeight(2);
  stroke(0);
  translate(pos.x, pos.y);
  line(0, 0, mouseToCircle.x, mouseToCircle.y);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function displayVectors() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 80);
}
