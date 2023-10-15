class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = random(16, 100);
    this.rad = this.mass ** (1 / 2) * 4;
    this.velVisualization = createVector(0, 0);
    this.accVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 20, 50);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.velVisualization.set(this.vel);
    this.velVisualization.mult(10);

    this.accVisualization.set(this.acc);
    this.accVisualization.mult(100);

    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 0, 255, 127);

    circle(this.pos.x, this.pos.y, this.rad * 2);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.velVisualization.x,
      this.pos.y + this.velVisualization.y
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accVisualization.x,
      this.pos.y + this.accVisualization.y
    );
  }
}
