let mover;
let gravity;
let mVec;
let pMVec;
let dragForce;
let isHover = false;
let isDragging = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 2, height / 2, 20);
  gravity = createVector(0, 0.1);
  dragForce = createVector();
  mVec = createVector(mouseX, mouseY);
  pMVec = createVector(pmouseX, pmouseY);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(mover.mass);
  mover.applyForce(gravityA);

  if (mover.contactEdge()) {
    let c = 0.01;
    let friction = mover.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    mover.applyForce(friction);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  mover.mousePressed(mouseX, mouseY);
  if (mover) {
    isDragging = true;
    x = mouseX - mover.x;
    y = mouseY - mover.y;
    mover.vel.mult(0);
    mVec.set(mouseX, mouseY);
    pMVec.set(mVec);
  }
}

function mouseDragged() {
  if (isDragging) {
    mVec.set(mouseX, mouseY);
    force = p5.Vector.sub(mVec, pMVec);
    force.mult(0.1);
    dragForce = force;
    pMVec.set(mVec);

    let speed = force.mag();
    dragForce.mult(speed * 30);
  } else {
    dragForce.set(0, 0);
  }
  if (!isDragging) {
    mover.applyForce(gravity);
    mover.update();
  }
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  if (isDragging) {
    isDragging = false;
    mover.applyForce(dragForce);
  }
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  mover.applyForce(gravity);
}
