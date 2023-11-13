// engine -> 안쪽에 세계가 있음
// render -> 그림 그려주는 역할
// Runner -> draw 역할
// bodies -> 다각형등 물체를 만들수 있는 기능 역할
// composite -> 추가하는 역할

// module aliases
// let Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Bodies = Matter.Bodies,
//   Composite = Matter.Composite;
let { Engine, Render, Runner, Bodies, Composite } = Matter;

// create an engine
// 필수과정 1 : 엔진 만들기
let engine = Engine.create();

let boxA;
let boxB;
let ground;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  // create two boxes and a ground
  // 옵션과정1 : 물체 만들기
  boxA = Bodies.rectangle(400, 200, 80, 80);
  boxB = Bodies.rectangle(450, 50, 80, 80);
  ground = Bodies.rectangle(width / 2, height - 80, width - 200, 160, {
    isStatic: true,
  });

  // add all of the bodies to the world
  // 옵션과정2 : 물체를 세계에 추가하기
  Composite.add(engine.world, boxA);
  Composite.add(engine.world, boxB);
  Composite.add(engine.world, ground);

  background(255);
  console.log(ground);
}

function draw() {
  Engine.update(engine);
  background(255);

  push();
  translate(boxA.position.x, boxA.position.y);
  rotate(boxA.angle);
  rect(0, 0, 80, 80);
  pop();

  push();
  translate(boxB.position.x, boxB.position.y);
  rotate(boxB.angle);
  rect(0, 0, 80, 80);
  pop();

  rect(ground.position.x, ground.position.y, width - 200, 160);
}
