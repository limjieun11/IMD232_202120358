let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new MoverWithMass(width / 3, height / 2, 10);
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
  // 왜 둘다 가벼운걸까.... 한쪽이 무거워야 하는데
  // 길이가 두배가 되면 무게는 4배가 된다.
  // 무거운 물체 가벼운 물체 같은 높이에서 떨어지면 둘다 동시에 떨어진다.
  // 하지만 서버에서는 똑같은 중력을 가해도 무거운 물체는 느리게 떨어진다.
  // 중량은 물체가 가진 질량에 비례해서 적용이 되어야 한다.
}
function draw() {
  background(255);
  moverA.applyForce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  moverB.applyForce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
