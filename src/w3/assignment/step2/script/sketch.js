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
}
function draw() {
  background(255);
  update();
  display();

  mouse.set(mouseX, mouseY);
  mouseToCircle = p5.Vector.sub(mouse, pos);
  strokeWeight(2);
  stroke(0);
  translate(pos.x, pos.y);
  line(0, 0, mouseToCircle.x, mouseToCircle.y);

  let target = createVector(mouseX, mouseY);
  let position = createVector(pos.x, pos.y);
  acc = p5.Vector.sub(target, position);

  acc.normalize();
  acc.mult(0.1);

  vel.x += acc.x;
  vel.y += acc.y;
  pos.x += vel.x;
  pos.y += vel.y;
}

function update() {
  vel.add(acc);
  vel.limit(3);
  pos.add(vel);
}

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 80);
}
