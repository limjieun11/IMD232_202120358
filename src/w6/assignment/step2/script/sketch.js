let gravity;
let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  gravity = createVector(0, 0.1);
  emitter = new Emitter(width / 2, height / 2);
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
