function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(230);

  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  //   바닥
  fill(190);
  noStroke();
  rect(0, 450, 5000, 200);

  //책장
  fill('blanchedalmond');
  noStroke();
  rect(410, 70, 250, 500);

  fill('burlywood');
  noStroke();
  rect(425, 85, 220, 380);

  fill('blanchedalmond');
  noStroke();
  rect(410, 160, 250, 20);
  fill('blanchedalmond');
  noStroke();
  rect(410, 260, 250, 20);
  fill('blanchedalmond');
  noStroke();
  rect(410, 360, 250, 20);

  //   책
  fill('lightcoral');
  noStroke();
  rect(430, 90, 18, 70);
  fill('lightblue');
  noStroke();
  rect(453, 90, 18, 70);
  fill('lightgreen');
  noStroke();
  rect(476, 90, 18, 70);
  fill('moccasin');
  noStroke();
  rect(499, 90, 18, 70);
  fill('sienna');
  noStroke();
  rect(522, 90, 18, 70);
  fill('seashell');
  noStroke();
  rect(545, 90, 18, 70);
  fill('skyblue');
  noStroke();
  rect(568, 90, 18, 70);
  fill('moccasin');
  noStroke();
  rect(591, 90, 18, 70);
  fill('green');
  noStroke();
  rect(430, 290, 18, 70);
  fill('lightblue');
  noStroke();
  rect(453, 290, 18, 70);
  fill('moccasin');
  noStroke();
  rect(476, 290, 18, 70);
  fill('lightyellow');
  noStroke();
  rect(499, 290, 18, 70);
  fill('sienna');
  noStroke();
  rect(522, 290, 18, 70);
  fill('grey');
  noStroke();
  rect(545, 290, 18, 70);
  fill('seashell');
  noStroke();
  rect(568, 290, 18, 70);
  fill('lightblue');
  noStroke();
  rect(591, 290, 18, 70);

  //   책상
  fill('white');
  rect(80, 270, 330, 17, 5, 0, 0, 5);
  fill('darkgray');
  rect(230, 287, 17, 200);

  //   컴퓨터
  fill('lightgray');
  rect(120, 125, 200, 120, 5);
  fill('lightgray');
  rect(203, 210, 30, 60);
  fill('black');
  rect(130, 135, 180, 100, 5);

  //   의자
  fill('white');
  rect(100, 370, 100, 120, 10);
  fill('gray');
  rect(100, 465, 100, 15);

  // 창문
  fill(180);
  rect(0, 30, 90, 200);
  fill('powderblue');
  rect(0, 40, 80, 180);

  // 시계
  fill('salmon');
  circle(460, 227, 50, 50);
  fill('white');
  circle(460, 227, 40, 40);
  fill('grey');
  arc(475, 202, 20, 20, PI, TWO_PI);
  fill('grey');
  arc(445, 202, 20, 20, PI, TWO_PI);
  stroke(0);
  strokeWeight(3);
  line(470, 240, 460, 227);
  stroke(0);
  strokeWeight(3);
  line(460, 215, 460, 227);
  stroke('lightgrey');
  strokeWeight(4);
  line(442, 248, 435, 258);
  stroke('lightgrey');
  strokeWeight(4);
  line(478, 248, 485, 258);

  // 달력
  fill('white');
  rect(520, 197, 60, 60, 5);
  stroke('black');
  strokeWeight(3);
  line(530, 190, 530, 202);
  stroke('black');
  strokeWeight(3);
  line(540, 190, 540, 202);
  stroke('black');
  strokeWeight(3);
  line(550, 190, 550, 202);
  stroke('black');
  strokeWeight(3);
  line(560, 190, 560, 202);
  stroke('black');
  strokeWeight(3);
  line(570, 190, 570, 202);

  // 액자

  // 전등
}
