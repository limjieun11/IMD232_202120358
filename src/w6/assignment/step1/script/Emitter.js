class Emitter {
  constructor() {
    this.particles = [];
  }

  update() {
    if (random(1) < 0.5) {
      let x = random(width); // 랜덤한 x 위치
      let particle = new Particle(x, -50); // 시작 위치를 캔버스 위쪽으로 변경
      this.particles.push(particle);
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      let particle = this.particles[i];
      particle.applyForce(gravity);
      particle.update();
      if (particle.isOffScreen()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let particle of this.particles) {
      particle.display();
    }
  }
}
