let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  // 괄호안에 값이 들어가도 되고 안들어가도 됨 필수는 아님 해주면
  // 컴퓨터 입장에선 벡터기능을 쓸 수 있는 친구 구나 인식
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}
function draw() {
  background(255);
  // 따로 분리 시켜 놓을 경우
  update();
  infiniteEdge();
  display();

  // acc = p5.Vector.random2D();
  // // 방향은 랜덤 길이는 무조건 1 우리가 원하는 정도의 길이감만 조정
  // acc.mult(2);
  // vel.add(acc);
  // pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // // }

  // if (pos.x < 0) {
  //   pos.x = width;
  // } else if (pos.x > width) {
  //   pos.x = 0;
  // }
  // if (pos.y < 0) {
  //   pos.y = height;
  // } else if (pos.y > height) {
  //   pos.y = 0;
  // }

  // if (pos.x < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }

  ellipse(pos.x, pos.y, 2 * radius);
}

function display() {
  fill('red');
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  pos.add(vel);
}

function infiniteEdge() {
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
