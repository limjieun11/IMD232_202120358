// module aliases
// var Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Bodies = Matter.Bodies,
//   Composite = Matter.Composite;
// engine -> 안쪽에 세계가 있음
// render -> 그림 그려주는 역할
// Runner -> draw 역할
// bodies -> 다각형등 물체를 만들수 있는 기능 역할
// composite -> 추가하는 역할

let Engine = Matter.Engine;
let Render = Matter.Render;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

// create an engine
// 필수과정 1 : 엔진 만들기
var engine = Engine.create();

const elem = document.querySelector('#canvas');
console.log(elem);

// create a renderer
// 필수과정 2 : 렌더러 만듣기
var render = Render.create({
  element: elem,
  engine: engine,
  options: {
    width: elem.clientWidth,
    height: (elem.clientWidth / 4) * 3,
  },
});
console.log(render);

// create two boxes and a ground
// 옵션과정1 : 물체 만들기
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(200, 500, 810, 40, { isStatic: true });
console.log(ground);

// add all of the bodies to the world
// 옵션과정2 : 물체를 세계에 추가하기
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
// 필수과정3: 그림 그리기
Render.run(render);

// create runner
// 필수과정4: 자동으로 계속 동작하게 해주는 장치 만들기
var runner = Runner.create();

// run the engine
// 필수과정5: 자동 뺑뺑이에게 엔진을 등록해서 ㄱ
Runner.run(runner, engine);
