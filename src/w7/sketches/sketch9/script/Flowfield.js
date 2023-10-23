class Flowfield {
  constructor(resolution, noiseVel) {
    this.resolution = resolution;
    this.columnNum = ceil(width / this.resolution);
    this.rowNum = ceil(height / this.resolution);
    this.field = new Array(this.columnNum);
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      this.field[colIdx] = new Array(this.rowNum);
    }
    // this.field = [this.columnNum][this.rowNum];
    this.noiseVel = noiseVel;
    this.init();
  }

  init() {
    noiseSeed(random(1000));
    let noiseX = 0;
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      let noiseY = 0;
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        // const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        // const vector = createVector(1, 0);
        // vector.rotate(angle);
        // const field[colIdx][rowIdx] = vector;
        // 위 4줄을 밑에 2줄로 줄여서 해결 할 수 있다.
        const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        this.field[colIdx][rowIdx] = p5.Vector.fromAngle(angle);
        noiseY += this.noiseVel;
      }
      noiseX += this.noiseVel;
    }
  }

  display() {
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        const vector = this.field[colIdx][rowIdx];
        const s = this.resolution;
        const x = s * colIdx + s * 0.5;
        const y = s * rowIdx + s * 0.5;
        const angle = vector.heading();
        push();
        translate(x, y);
        rotate(angle);
        noFill();
        stroke(0);
        line(-this.resolution * 0.4, 0, this.resolution * 0.4, 0);
        pop();
      }
    }
  }

  lookup(pos) {
    const colIdx = constrain(
      ceil(pos.x / this.resolution),
      0,
      this.columnNum - 1
    );
    const rowIdx = constrain(ceil(pos.y / this.resolution), 0, this.rowNum - 1);
    return this.field[colIdx][rowIdx];
  }
}

// 한 타일의 크고 작음 -> resolution
// 얼마나 많은 타일이 가로로 존재할 것이냐 -> 화면 크기 대비 resolution에 의해 결정
// 행으로도 몇개 존재하냐 -> 높이 대비 resolution
// 몇 개냐 : 정수로 떨어뜨리기 위해 반올림을 쓸 수 있음
// 이중 어레이 : 어레이 안에 어레이
// column : x 열 , row : y 행
