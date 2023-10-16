let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];
// anArray 가 하나의 변수가 아닌 여러개의 변수 값을 가지고 있고 적어준 순서대로 0,1,2,3 번호를 매기고
// 꺼내서 보여줌 번호는 0부터 시작
// anArray.length -> 몇개의 변수가 저장되어 있다
// array -> array.push 기능 : 사후적으로 array에 데이터를 넣어줄 수 있는 기능

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log('anArray', aVariable);
  console.log('anArray[0]', anArray[0]);
  console.log('anArray[1]', anArray[1]);
  console.log('anArray[2]', anArray[2]);
  console.log('anArray.length', anArray.length);
  anotherArray.push(10);
  console.log('anotherArray[0]', anotherArray[0]);

  background(255);
}
function draw() {}
