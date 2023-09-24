let pos;
let vel;
let acc;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}
function draw() {
  background(255);
  update();
  display();
  checkEdges();

  let mouse = createVector(mouseX, mouseY);

  strokeWeight(2);
  stroke(0);
  line(pos.x, pos.y, mouse.x, mouse.y);
  //   line(0, 0, pos.x, pos.y);

  //   c = p5.Vector.sub(mouse, pos)
  mouse.sub(pos);
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

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 80);
}

// 마우스 좌표 벡터
// let mouse = createVector(mouseX, mouseY);
// 캔버스의 중심 좌표 벡터
// let center = createVector(width / 2, height / 2);

// 위 두개의 벡터를 나타낸다
// strokeWeight(4);
// stroke(200);
// line(0, 0, mouse.x, mouse.y);
// line(0, 0, center.x, center.y);

// 마우스 좌표 벡터에서 캔버스 중심 좌표 벡터를 뺀다.
// mouse.sub(center);

// 위 결과를 원점을 캔버스 중심으로 옮겨 그린다.
// 원점을 캔버스 중심: 마우스 좌표 벡터에 빼기 했던 벡터의 좌표로 옮기지 않고서야 화면에 제대로 나타낼 수 없다.
// stroke(0);
// translate(width / 2, height / 2);
// // line(0, 0, mouse.x, mouse.y);
