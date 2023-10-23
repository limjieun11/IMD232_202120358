class Particle {
  constructor(x, y, initialVelocity, mass) {
    this.position = createVector(x, y);
    this.velocity = initialVelocity.mult(5);
    this.acceleration = createVector(0, 0);
    this.radius = 10;
    this.lifespan = 60; // 초기 수명 설정
    this.mass = mass;
    this.hue = random(0, 360); // 랜덤한 Hue 값 (0에서 360 사이)
    this.exploded = false;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    if (this.lifespan > 0 && !this.exploded) {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
      this.lifespan -= 1; // 수명 감소
    } else {
      this.applyForce(gravity); // 중력 적용
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
  }

  display() {
    if (this.lifespan > 0) {
      noStroke();
      fill(this.hue, 80, 70, map(this.lifespan, 0, 60, 0, 100));
      ellipse(this.position.x, this.position.y, this.radius);
    }
  }

  isDead() {
    return this.lifespan <= 0 && this.position.y >= height;
  }
}
