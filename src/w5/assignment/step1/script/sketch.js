const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel = 1;
let angleStep = 15;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  const margin = min(width, height) / 150;

  gridC = (width - margin) / cNum;
  gridR = (height - margin) / rNum;
}

function draw() {
  background(360, 0, 100);

  for (let a = 0; a < rNum; a++) {
    for (let b = 0; b < cNum; b++) {
      push();

      const x = gridC * b + gridC / 2;
      const y = gridR * a + gridR / 2;

      translate(x, y);
      rotate(radians(angleBegin + (a * cNum + b) * angleStep));

      const colorIndex = (b + a) % 4;
      stroke(90 * colorIndex, 80, 70);

      line(0, 0, gridC / 4, 0);
      noFill();
      ellipse(0, 0, 50);

      fill(0);
      noStroke();
      const circleSize = 15;
      ellipse(gridC / 5, 0, circleSize);
      pop();
    }
  }
  angleBegin += angleBeginVel; // 각도 증가
}
