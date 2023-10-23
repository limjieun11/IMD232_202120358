// 이전의 파티클 js와 비슷함
class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    const headingAngle = this.vel.heading();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(headingAngle);
    fill(0);
    noStroke();
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke(this.color);
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    const steer = p5.Vector.sub(target, this.pos);
    steer.setMag(this.speedMx);
    // const steer = p5.Vector.sub(desiredVelocity, this.vel);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
    // this.vel.set(desiredVelocity);
  }

  flee(target) {
    const steer = p5.Vector.sub(target, this.pos);
    steer.mult(-1);
    steer.setMag(this.speedMx);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  borderInfinite() {
    if (this.pos.x < -this.rad) {
      this.pos.x = width + this.rad;
    } else if (this.pos.x > width + this.rad) {
      this.pos.x = -this.rad;
    }
    if (this.pos.y < -this.rad) {
      this.pos.y = width + this.rad;
    } else if (this.pos.y > width + this.rad) {
      this.pos.y = -this.rad;
    }
  }
}
// desiredVelocity는 갈수 있는 최대 속도라는 개념이 항상 있다 -> setMag를 통해서 최대속도로 갈 수 있다
// 가속도 개념을 줘서 빙글 돌아가기 위해 desiredVelocity에서 this.vel를 뺀다.
// seek 쫓아간다. flee 도망간다
