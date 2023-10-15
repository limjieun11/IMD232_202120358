function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);

  //   line(10, 10, 10, height - 10);
  //   line(20, 10, 20, height - 10);
  //   line(30, 10, 30, height - 10);
  //   line(40, 10, 40, height - 10);
  //   line(50, 10, 50, height - 10);
  //   line(60, 10, 60, height - 10);
  //   line(70, 10, 70, height - 10);
  //   line(80, 10, 80, height - 10);
  //   line(90, 10, 90, height - 10);
  for (let i = 0; i < innerWidth; i += 10) {
    line(i + 10, 10, i + 10, height - 10);
  }
}
function draw() {}
