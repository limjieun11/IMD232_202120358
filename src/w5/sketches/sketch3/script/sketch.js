const stripeNum = 20;
const stripeNum2 = 15;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}
function draw() {
  background(255);

  noStroke();
  // fill('salmon');
  // * 몇개의 스트라이프를 그릴거냐가 정해져 있고 이 공간에 대해서 어떻게든 넣게다는 그리는 방식
  //   for (let a = 0; a < stripeNum; a++) {
  //     const rectWidth = width / (stripeNum + stripeNum + 1);
  //     const rectX = (width / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //     rect(rectX, 0, rectWidth, height);
  //   }
  // // 높이
  //   for (let a = 0; a < stripeNum; a++) {
  //     const rectHeight = height / (stripeNum + stripeNum + 1);
  //     const rectY = (height / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //     rect(0, rectY, width, rectHeight);
  //   }

  rectMode(CENTER);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((255 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 1) * width) / (stripeNum + 1);
      let y = ((b + 1) * height) / (stripeNum2 + 1);
      if (a % 2 == 0) {
        ellipse(x, y, 10);
      } else {
        rect(x, y, 10);
      }
    }
  }

  // * 일정한 사이즈로 그려하된다고 정하고 그린다
  // for (let a = stripeBegin; a < width; a += 2 * stripeGap) {
  //   rect(a, 0, stripeGap, height);
  // }
}
