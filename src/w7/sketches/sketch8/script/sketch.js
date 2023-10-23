const tileSize = 40;
let columnNum;
let rowNum;
let noiseCoordMult = 0.01;
// 2차원 평면을 일정한 크기의 타일로 나누고 그 타일 안에서 좌표가 노이즈의 좌표는
// 아주 작게 커진다 그것을 각도로 변환시켜 각도에 해당하는 방향에 힘으로 만든다

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  columnNum = floor(width / tileSize);
  rowNum = floor(height / tileSize);

  background(255);
}

function draw() {
  //   randomseed(100);
  background(255);
  //   noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const idx = column + row * columnNum;
      //   fill(random() * 255); //   티비 지지직 노이즈 처럼 표현
      //   fill(noise(row * noiseCoordMult, column * noiseCoordMult) * 255); //   노이즈를 쓰면 다른 정도를 제어 할 수 있다
      //   rect(column * tileSize, row * tileSize, tileSize);
      push();
      translate(
        column * tileSize + tileSize * 0.5,
        row * tileSize + tileSize * 0.5
      );
      rotate(
        radians(noise(row * noiseCoordMult, column * noiseCoordMult) * 360)
      );
      //   ellipse(0, 0, tileSize);
      line(-tileSize * 0.3, 0, tileSize * 0.3, 0);
      pop();
    }
  }
}
