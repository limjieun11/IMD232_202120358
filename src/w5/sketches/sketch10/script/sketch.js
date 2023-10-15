let angle = 0;
let angleVel;
let amplitude = 50;
let period = 60;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angleVel = periodToAngleVel(period);
  //   각도가 증가함에 따라 얼마나 빨리 왔다갔다 하느냐

  background(255);
}
function draw() {
  angle += angleVel;
  background(255);

  line(0, height / 2, width, height / 2);
  ellipse(width / 2, height / 2 + sin(angle) * amplitude, 50);
  //   console.log(sin(angle));
}

function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
