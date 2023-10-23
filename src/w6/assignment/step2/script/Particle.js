class Particle {
  constructor(x, y, initialVelocity, mass) {
    this.pos = createVector(x, y);
    this.vel = initialVelocity.mult(3);
    this.acc = createVector(0, 0);
    this.radius = 10;
    this.lifespan = 60;
    this.mass = mass;
    this.hue = random(0, 360);
  }
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan--;
  }

  display() {
    noStroke();
    fill(this.hue, 80, 70, map(this.lifespan, 0, 60, 0, 100));
    ellipse(this.pos.x, this.pos.y, this.radius);
  }

  isDead() {
    return this.lifespan <= 0 || this.pos.y > height;
  }
}
