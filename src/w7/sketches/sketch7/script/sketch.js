const tileSize = 40;
let columnNum;
let rowNum;
let noiseCoordMult = 0.05;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  columnNum = floor(width / tileSize);
  rowNum = floor(height / tileSize);

  background(255);
}

function draw() {
  //   randomseed(100);
  background(255);
  noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const idx = column + row * columnNum;
      //   fill(idx * 0.5);
      //   fill(random() * 255); //   티비 지지직 노이즈 처럼 표현
      //   * noise도 랜덤처럼 시드 값이 있다.
      fill(noise(row * noiseCoordMult, column * noiseCoordMult) * 255); //   노이즈를 쓰면 다른 정도를 제어 할 수 있다
      rect(column * tileSize, row * tileSize, tileSize);
    }
  }
}
