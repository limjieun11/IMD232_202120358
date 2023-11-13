const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Vertices,
  Bodies,
} = Matter;

// create engine
var engine = Engine.create(),
  world = engine.world;

// 러너 만들고 실행하기
var runner = Runner.create();
Runner.run(runner, engine);

let group;
let ropeA;
let ropeB;
let ropeC;
let vertices = [];

let m;
let mc;

const originalWidth = 800;
const originalHeight = 600;

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);
  rectMode(CENTER);

  // add bodies
  //--------------------------------------------------------------------------------------------------
  group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    // vertices = Vertices.fromPath('10 30 50 0 50 20 0 20');
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //--------------------------------------------------------------------------------------------------
  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //--------------------------------------------------------------------------------------------------
  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    // vertices = Vertices.fromPath('10 30 50 0 50 20 0 20');
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //--------------------------------------------------------------------------------------------------
  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  m = Mouse.create(document.querySelector('.p5Canvas'));
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    Constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  console.log('ropeA', ropeA);
  console.log(ropeB);
  console.log(ropeC);

  background('white');
  Runner.run(runner, engine);
}

function draw() {
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  background('white');

  for (let composite of world.composites) {
    for (let body of composite.bodies) {
      // 무작위 색상 설정
      fill('blue');
      noStroke();

      // 각 도형에 원하는 색상을 채워 그립니다.
      beginShape();
      for (let vert of body.vertices) {
        vertex(vert.x, vert.y);
      }
      endShape(CLOSE);
    }
  }

  for (let composite of world.composites) {
    for (let body of composite.bodies) {
      // 무작위 색상 설정
      fill('skyblue');
      noStroke();

      // 각 도형에 원하는 색상을 채워 그립니다.
      beginShape();
      for (let vert of body.vertices) {
        vertex(vert.x, vert.y);
      }
      endShape(CLOSE);
    }
  }

  // fill(0);
  // beginShape();
  // ropeA.bodies.forEach((each) => {
  //   vertex(
  //     (each.x / originalWidth) * width,
  //     (each.y / originalHeight) * height
  //   );
  // });
  // endShape(CLOSE);
}

function mouseReleased() {
  released = true;
}
