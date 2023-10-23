class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0.5);
    this.size = 15;
    this.color = color(random(360), 80, 50, 80);
    this.angle = random(TWO_PI);
    this.rotationSpeed = random(-0.1, 0.3);
  }

  applyForce(force) {
    this.vel.add(force);
  }

  update() {
    this.pos.add(this.vel);
    this.angle += this.rotationSpeed;
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
    rotate(this.angle);
    fill(this.color);
    rect(0, 0, this.size, this.size);
    pop();
  }
}
