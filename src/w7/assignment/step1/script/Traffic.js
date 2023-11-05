class Traffic {
  //Traffic 클래스 정의
  constructor() {
    this.vehicles = []; // vehicle 객체들을 저장할 배열 초기화
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles); //eachVehicle 객체에 대해 separate 메서드를 호출하여 다른 차량과의 분리 작업을 수행하고 그 결과를 separate 변수에 저장
      separate.mult(1.5); //separate 벡터의 크기를 1.5배 증폭
      eachVehicle.applyForce(separate); //separate를 eachVehicle에 적용
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5); //align 벡터의 크기를 0.5배
      eachVehicle.applyForce(align); // 'align' 힘을 eachVehicle에 적용
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5); //cohesion 벡터의 크기를 0.5배로 줄여 힘을 약화
      eachVehicle.applyForce(cohesion); //'cohesion'힘을 eachVehicle에 적용
      eachVehicle.update(); //eachVehicle 객체의 상태를 업데이트
      eachVehicle.borderInfinite(); // eachVehicle 객체의 borderInfinite 메서드 호출
      eachVehicle.display(); // eachVehicle 객체의 display 메서드 호출
    });
  }

  addVehicle(x, y) {
    const mass = 1; // 동일한 크기로 하고 싶을때
    this.vehicles.push(
      //'this.vehicles' 배열에 새로운 vehicle 객체를 추가 push 함수는 배열의 끝에 요소를 추가
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40)) //새로운 'vehicle' 객체를 생성
    );
  }
}
