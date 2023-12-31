class Emitter {
  constructor() {
    this.position = createVector(0, 0);
    this.particles = [];
  }

  emit(count, x, y) {
    for (let i = 0; i < count; i++) {
      let angle = random(TWO_PI);
      let initialVelocity = p5.Vector.fromAngle(angle);
      this.particles.push(new Particle(x, y, initialVelocity, 10));
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.applyForce(gravity);
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
