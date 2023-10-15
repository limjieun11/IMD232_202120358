function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  line(200, 0, 200, height);
  line(0, 100, width, 100);

  //   여기 push는 array랑 상관없음
  //   push();
  translate(width / 2, height / 2);
  rotate((TAU / 360) * 25);
  noStroke();
  fill('salmon');
  rect(0, 0, 50);
  stroke('salmon');
  line(200, 0, 200, height);
  line(0, 100, width, 100);
  //   pop();
  //   push : pop이 되었을때 자동으로 앞에 모든 행동을 무시하고 다시 돌아가준다
  //   translate랑 rotate 하는 경우엔 감싸주는게 좋음
  //   * push와 pop이 있을 경우
  //    밑에 작업이 필요없음
  //    rotate((TAU / 360) * -25);
  //    translate(-width / 2, -height / 2);

  rotate((TAU / 360) * -25);
  translate(-width / 2, -height / 2);

  translate(200, 100);
  rotate((TAU / 360) * -15);
  noStroke();
  fill('slateblue');
  rect(0, 0, 50);
}
function draw() {}
