class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0.5); // 수정된 초기 속도
    this.size = 15; // 파티클 크기를 일정하게 설정
    this.color = color(random(360), 80, 50, 80); // 랜덤 색상
    this.angle = random(TWO_PI); // 랜덤 회전 각도
    this.rotationSpeed = random(-0.1, 0.3); // 랜덤 회전 속도
  }

  applyForce(force) {
    this.vel.add(force);
  }

  update() {
    this.pos.add(this.vel);
    this.angle += this.rotationSpeed; // 랜덤 회전 각도 추가
  }

  isOffScreen() {
    return (
      this.pos.x < -this.size ||
      this.pos.x > width + this.size ||
      this.pos.y > height + this.size
    );
  }

  display() {
    push();
    noStroke();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle); // 랜덤 회전 각도 적용
    fill(this.color);
    rect(0, 0, this.size, this.size);
    pop();
  }
}
