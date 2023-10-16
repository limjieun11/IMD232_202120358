const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleStep = 5; // 느린 속도로 변경

function setup() {
  createCanvas(800, 800);
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
  gridC = width / (cNum + 2);
  gridR = height / rNum;
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      const x = gridC + c * gridC;
      const y = r * gridR;

      push();
      translate(x, y);
      rotate(radians(angleBegin + c * angleStep + r * 15));
      stroke(90 * ((r * cNum + c) % 4), 80, 70);
      line(0, 0, gridC / 4, 0);
      noFill();
      ellipse(0, 0, 50);
      fill(0);
      noStroke();
      const circleSize = 15;
      ellipse(gridC / 5, 0, circleSize);
      pop();
      angleBegin += 1; // 매 프레임마다 1도씩 증가
    }
  }
}
