class Emitter {
  constructor() {
    this.position = createVector(0, 0);
    this.particles = [];
  }

  emit(count, x, y) {
    for (let i = 0; i < count; i++) {
      // 무작위로 방향 설정
      let angle = random(TWO_PI); // 0부터 2π 사이의 각도를 무작위로 선택
      let initialVelocity = p5.Vector.fromAngle(angle); // 무작위 각도로부터 초기 속도 벡터 생성
      this.particles.push(new Particle(x, y, initialVelocity, 10));
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let p of this.particles) {
      p.display();
    }
  }
}
