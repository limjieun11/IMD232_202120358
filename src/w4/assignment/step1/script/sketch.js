let bodies = [];

let G = 0.07;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();
}

function draw() {
  background(255);

  for (let a = 0; a < 45; a++) {
    for (let b = 0; b < 45; b++) {
      if (a !== b) {
        let forceForJ = bodies[a].attract(bodies[b]);
        bodies[b].applyForce(forceForJ);
      }
    }
    bodies[a].update();
    bodies[a].display();
    // bodies.forEach(() => {})
    // if (showVector) {
    //   bodies[a].displayVectors();
    // }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let a = 0; a < 45; a++) {
    bodies[a] = new Body(random(width), random(height), random(0.1, 2));
  }
}

// function keyPressed() {
//   if (key === 's' || key === 'S') {
//     showVector = !showVector;
//   }
// }
