let flowfield;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  flowfield = new Flowfield(30, 0.05);
  mVec = createVector(0, 0);

  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);

  const lookupVec = flowfield.lookup(mVec);

  background(255);
  flowfield.display();

  push();
  translate(mVec.x, mVec.y);
  rotate(lookupVec.heading());
  noStroke();
  fill('white');
  ellipse(0, 0, 20);
  noFill();
  //   strokeWeight(4);
  stroke('red');
  line(-10, 0, 10, 0);
  pop();
}

function mousePressed() {
  flowfield.init();
}
