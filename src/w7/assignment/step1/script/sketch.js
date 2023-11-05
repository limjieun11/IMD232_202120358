let traffic; // Traffic 클래스 변수 선언
let infiniteOffset = 80; // 화면 가장자리에서 vehicle이 벗어나면 다시 화면 안으로 가져오기 위한 오프셋 값 설정

function setup() {
  setCanvasContainer('canvas', 3, 2, true); //캔버스 설정
  colorMode(HSL, 360, 100, 100, 100); //색상 모드를 HSL로 설정
  background('white'); //배경색을 흰색으로 설정
  traffic = new Traffic(); //Traffic 클래스의 객체를 생성하여 traffic 변수에 할당
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height)); //10개의 vehicle을 무작위 위치에 생성하고 traffic 객체에 추가
  }
}

function draw() {
  background('white'); //매 프레임마다 배경을 흰색 설정
  traffic.run(); //traffic 객체의 run() 호출
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY); //마우스를 드래그 하는 동안 새로운 vehicle을 마우스 위치에 추가
}
