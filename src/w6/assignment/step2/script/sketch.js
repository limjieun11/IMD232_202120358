// let emitter;
// let gravity;

// function setup() {
//   setCanvasContainer('canvas', 2, 1, true);
//   colorMode(HSL, 360, 100, 100, 100);
//   emitter = new Emitter(width / 2, height / 2);
//   gravity = createVector(0, 0.1);
//   background(360, 0, 100);
//   for (let n = e; n < 100; n++) emitter.createParticle();
// }

// function draw() {
//   background(360, 0, 100);
// }
let gravity;
let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  gravity = createVector(0, 10);
  emitter = new Emitter();

  for (let n = 0; n < 100; n++) {
    emitter.emit(1, width / 2, height / 2);
  }
}

function draw() {
  background(360, 0, 100);
  emitter.update();
  emitter.display();
  console.log('현재 파티클의 갯수: ' + emitter.particles.length);
}

function mouseClicked() {
  emitter.emit(100, mouseX, mouseY);
}
