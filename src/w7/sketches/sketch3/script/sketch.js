let dataPoint = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(5);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(255);
}
function draw() {
  dataPoint[dataPoint.length - 1] = map(mouseY, 0, height, 1, 0);
  background(255);
  noStroke();
  fill(0);
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 10);
  }
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
}
// 랜덤이 진짜 무작위가 아닌 똑같이 움직이게 할 수 있다.
// 랜덤시드 난수표중에 n번에서 랜덤값을 뽑아준다
