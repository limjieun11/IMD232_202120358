let posX;
let posY;
let posXAdd = 3;
let posYAdd = 5;
//   변수를 따로 분리 해주면 훨씬 편리함

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
}
function draw() {
  background(255);
  ellipse(posX, posY, 50);
  posX += posXAdd;
  posY += posYAdd;
  //   posX = posX+1;
  //   posX +=1;
}
