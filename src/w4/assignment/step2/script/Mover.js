class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** 0.5 * 20;
    this.isDragging = false;
    this.draggingOffset = createVector();
    this.isHover = false;
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.rad - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.7;
    if (this.pos.x < 0 + this.rad) {
      this.pos.x -= 0 + this.rad;
      this.pos.x *= -1;
      this.pos.x += 0 + this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x -= width - 1 - this.rad;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y -= height - 1 - this.rad;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.rad;
      this.vel.y *= bounce;
    }
  }

  chkIsHover(x, y) {
    const distSq = (this.pos.x - x) ** 2 + (this.pos.y - y) ** 2;
    this.isHover = distSq <= this.rad ** 2;
  }

  display() {
    noStroke();
    fill(0, 0, 255, 127);
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
    this.chkIsHover(mX, mY);
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.draggingOffset.set(mX - this.pos.x, mY - this.pos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.set(mX - this.draggingOffset.x, mY - this.draggingOffset.y);
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
