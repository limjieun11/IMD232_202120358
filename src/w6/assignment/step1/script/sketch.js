let emitter;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  emitter = new Emitter(width / 2, height / 2);
  gravity = createVector(0, 0.01);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);
  // 캔버스를 갱신하지 않고, 파티클 시스템을 업데이트 및 그립니다.
  emitter.update();
  emitter.display();
  console.log('파티클 현재 갯수: ' + emitter.particles.length);
}
