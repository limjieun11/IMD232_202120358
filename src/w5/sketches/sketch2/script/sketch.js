//for()
// for(begin; condition; step;) 세가지가 필요
// for(초기값;(red) 조건;(green) 매시행의끝에하는일;(blue)) {조건이 부합하는동안 할일}
// 조건에 들어갈 수 있는 것 : a >= b, a > b, a <= b, a < b, a === b (a와b가 완전히 똑같은가- 자바스크립트에선 = 3개)
// for (let 변수이름 = 초기값; 변수이름 < 값; 변수이름 += 값 )
// for (let a(대부분 a,j로 많이하지만 헷갈릴수있음) = 0; a < 3; a++ ) {
//  circle(a, 10, 10)}

//for (let 변수이름 = 0; 변수이름 < 어레이이름.length; 변수이름++){ 어레이이름[변수이름]}
// 위 숫자들을 full로 순회 가능

//for (let 변수이름 = 0; 변수이름 < 반복횟수; 변수이름++){ 정확하게 반복 횟수만큼 노란색 코드를 실행함. 어레이이름[변수이름](yellow)}
//

let anArray = [
  100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82,
  81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63,
  62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44,
  43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25,
  24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
  3, 2, 1,
];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}
function draw() {
  background(255);

  //   line(10, 10, 10, height - 10);
  //   line(20, 10, 20, height - 10);
  //   line(30, 10, 30, height - 10);
  //   line(40, 10, 40, height - 10);
  //   line(50, 10, 50, height - 10);
  //   line(60, 10, 60, height - 10);
  //   line(70, 10, 70, height - 10);
  //   line(80, 10, 80, height - 10);
  //   line(90, 10, 90, height - 10);
  for (let a = 0; a < width; a += 10) {
    line(a + 10, 10, a + 10, height - 10);
  }
  // ${a}가 작동이 안되네..
  for (let a = 0; a < anArray.length; a++) {
    console.log(`anArray[${a}]`, anArray[a]);
  }

  fill(0);
  for (let a = 0; a < 20; a++) {
    circle(a * 20, height / 2, 20);
  }
}
