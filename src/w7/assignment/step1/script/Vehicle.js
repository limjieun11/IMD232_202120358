class Vehicle {
  //Vehicle 클래스 정의
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //새 객체를 생성할 떄 자동으로 호출
    //vehicle 속성 초기화
    this.pos = createVector(x, y); //vehicle의 createVector 함수로 생성된 벡터 'x','y' 매개변수로 초기 위치 설정
    this.vel = p5.Vector.random2D(); //vehicle의 속도를 p5.js'random2D'함수로 생성된 벡터로 무작위 방향으로 초기화
    this.acc = createVector(); //vehicle에 작용하는 가속도
    this.mass = mass; //vehicle 질량 'mass' 매개변수로 전달된 값을 사용하여 초기화
    this.rad = rad; //vehicle의 반지름을 나타낸다.
    this.speedMx = speedMx; //vehicle의 최대 속도
    this.forceMx = forceMx; //vehicle에 작용할 수 있는 최대 힘
    this.neighborhooodRad = 50; //vehicle의 주변 vehicle을 탐지하는 이웃 반경을 나타낸다. 50으로 지정
    this.color = color; //vehicle 색상
  }

  cohesion(others) {
    let cnt = 0; //cnt 변수 초기값을 0으로 설정
    const steer = createVector(0, 0); //steer 변수를 초기 빈 벡터로 설정
    others.forEach((each) => {
      if (each !== this) {
        //현재 반복중인 차량이 자기 자신이 아닌 경우
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; // this와 each 차량 간의 거리 제곱을 계산
        if (distSq < this.neighborhooodRad ** 2) {
          //계산된 거리 제곱이 'this.neighborhoood'의 제곱보다 작은 경우
          steer.add(each.pos); //steer 벡터에 다른 차량의 위치를 추가
          cnt++; //주변 vehicle 수를 증가
        }
      }
    });
    if (cnt > 0) {
      //1개 이상의 인근 vehicle이 있을 경우
      steer.div(cnt); //steer 벡터를 cnt로 나눔
      steer.sub(this.pos); // 차량의 현재 위치에서 평균 위치를 뺌
      steer.setMag(this.speedMx); //steer 벡터의 크기를 this.speedMx로 설정
      steer.sub(this.vel); //차량의 현재 속도에서 응집 힘을 뺌
      steer.limit(this.forceMx); // steer 벡터의 크기를 this.forceMx로 제한
    }
    return steer; //계산된 steer을 반환
  }

  align(others) {
    let cnt = 0; //cnt 변수 초기값을 0으로 설정
    const steer = createVector(0, 0); //steer 변수를 초기 빈 벡터로 설정
    others.forEach((each) => {
      if (each !== this) {
        //현재 반복중인 차량이 자기 자신이 아닌 경우
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //this 와 each간의 거리 제곱 계산
        if (distSq < this.neighborhooodRad ** 2) {
          //계산된 거리 제곱이 this.neighborhooodRad의 제곱보다 작은 경우
          steer.add(each.vel); //steer 벡터에 each의 속도(this.vel)를 추가
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; //주변 vehicle 수를 증가
        }
      }
    });
    if (cnt > 0) {
      //1개 이상의 주변 차량이 있을 경우
      steer.div(cnt); //steer 벡터를 cnt로 나눔
      steer.setMag(this.speedMx); //steer 벡터의 크기를 this.speedMx로 설정
      steer.sub(this.vel); // 차량의 현재 속도에서 정렬 힘을 뺌
      steer.limit(this.forceMx); //steer 벡터의 크기를 this.forceMx로 제한
    }
    return steer; //계산된 steer을 반환
  }

  separate(others) {
    let cnt = 0; //cnt 변수 초기값을 0으로 설정
    const steer = createVector(0, 0); //steer 변수를 초기 빈 벡터로 설정
    others.forEach((each) => {
      if (each !== this) {
        //현재 반복 중인 차량이 자기 자신이 아닌 경우를 확인
        const dist = this.pos.dist(each.pos); //현재 차량과 다른 차량 간의 유클리드 거리를 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          //계산된 거리가 0보다 크고, 두 차량의 반지름 합보다 작은 경우
          const distNormal = dist / (this.rad + each.rad); //distNormal 변수는 두 차량 사이의 거리를 차량 반지름 합으로 나눈 값을 저장
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); //towardMeVec 변수는 현재 차량에서 다른 차량을 향하는 벡터 생성
          towardMeVec.setMag(1 / distNormal); //towardMeVec 벡터의 크기를 1 / disNormal로 설정
          steer.add(towardMeVec); // steer 벡터에 분리 힘을 추가
          cnt++; //분리 힘을 계산한 횟수를 증가
        }
      }
    });
    if (cnt > 0) {
      //1개 이상의 주변 차량이 있을 경우
      steer.div(cnt); //steer 벡터를 cnt로 나눔
      steer.setMag(this.speedMx); //steer 벡터의 크기를 this.speedMx로 설정
      steer.sub(this.vel); // 차량의 현재 속도에서 분리 힘을 뺌
      steer.limit(this.forceMx); //steer 벡터의 크기를 this.forceMx로 제한
    }
    return steer; //계산된 분리 힘을 반환
  }

  applyForce(force) {
    // 힘을 vehicle에 적용하는 메서드
    const forceDivedByMass = p5.Vector.div(force, this.mass); // p5.Vector.div 함수를 사용하여 force 벡터를 this.mass로 나눈 결과를 forceDivedByMass 변수에 저장
    this.acc.add(forceDivedByMass); //forceDivedByMass를 this.acc에 더함
  }

  update() {
    //vehicle의 상태를 업데이트하는 메서드
    this.vel.add(this.acc); //속도에 가속도를 더하여 새로운 속도를 업데이트
    this.vel.limit(this.speedMx); // 최대 속도를 제한하는 값, 현재 속도를 this.speedMx로 제한
    this.pos.add(this.vel); // 현재 위치에 현재 속도를 더하여 새로운 위치를 계산
    this.acc.mult(0); // 가속도를 0으로 재설정, 새로운 가속도를 적용하기 전에 현재 가속도를 초기화
  }

  borderInfinite() {
    // 화면 경계를 넘어갈 때 위치를 조정하는 메서드
    if (this.pos.x < -infiniteOffset) {
      //만약 vehicle의 x 좌표가 화면의 왼쪽 경계를 넘어갔다면 이 조건은 참
      this.pos.x = width + infiniteOffset; // 조건이 참일 경우, vehicle의 x좌표를 화면의 오른쪽 경계 바깥으로 이동
    } else if (this.pos.x > width + infiniteOffset) {
      //만약 vehicle의 x좌표가 화면의 오른쪽 경계를 넘어갈 경우
      this.pos.x = -infiniteOffset; //vehicle x좌표를 화면의 왼쪽 경계 바깥으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      //x좌표와 마찬가지로 y좌표가 화면의 위쪽 경계를 넘어갔다면 조건이 참이 됨.
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      //만약 vehicle의 y좌표가 화면 아래쪽으로 경계가 넘어갔다면
      this.pos.y = -infiniteOffset; //y좌표를 화면의 위쪽 경계 바깥으로 이동
    }
  }

  display() {
    //vehicle을 화면에 그리는 메서드
    push(); // 그림그리기 상태를 저장, 현재 그림 설정과 변환 행렬을 저장하여 이후 작업이 현재 상태에 영향을 미치지 않도록 함
    translate(this.pos.x, this.pos.y); //현재 그림의 원점을 'this.pos'의 위치로 이동
    rotate(this.vel.heading()); //vehicle의 'this.vel'의 방향으로 그림을 회전
    noStroke(); //선X
    fill(this.color); //그림 색상을 'this.color'로 설정
    beginShape(); //다각형을 그리기 위한 시작 명령어
    vertex(this.rad, 0); //현재 다각형의 (this.rad,0)위치에 꼭짓점 하나 추가
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); // 두번째 꼭짓점 추가
    vertex(0, 0); //시작 지점에 세번째 꼭짓점 추가
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE); //다각형 그리기 종료, CLOSE 다각형이 닫혀있는 다각형임을 나타냄
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); // 그림그리기상태를 이전 상태로 복원
  }
}
