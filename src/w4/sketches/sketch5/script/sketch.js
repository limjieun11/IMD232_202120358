let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  moverB = new Mover((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
  // 중력에 대한 묘사는 사실과는 거리가 멀지만 바람에 대한 묘사는 정확하다.
  // 중력가속도는 고정이다 : 9.80066m/s2 -> ACC (a)
  // f=m*a -> f/m = a
  // 중력 => Force (f)
  // 질량과 무관하게 결과적으로 가속도가 같다.
  // 중력/50=a 중력/10=a 중력/50 = 중력/10 => 결과적으로 50/50=10/10
  // 중력은 질량에 비례해서 작용한다. 그래서 결과적인 가속도가 같다.
}

function draw() {
  background(255);
  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }
  if (moverA.contactEdge()) {
    let c = 0.5;
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }
  if (moverB.contactEdge()) {
    let c = 0.5;
    let friction = moverB.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverB.applyForce(friction);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
