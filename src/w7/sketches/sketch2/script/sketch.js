function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}
function draw() {
  background(255);

  randomSeed(1);
  ellipse(width / 2 + random(100, 200), height / 2, 50);
  ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);
}
// 랜덤이 진짜 무작위가 아닌 똑같이 움직이게 할 수 있다.
// 랜덤시드 난수표중에 n번에서 랜덤값을 뽑아준다
