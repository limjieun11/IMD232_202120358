const RESOLUTION = 5;

let imgUrl = './script/IMG_1.jpg';
let img;
let particles = [];

function preload() {
  img = loadImage(imgUrl);
}
function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  p = new Particle(70, 70, 0);
  spawnParticles();
}
function draw() {
  background(0);
  // image(img, 0, 0, width, height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
}

function spawnParticles() {
  for (i = 0; i < width; i += RESOLUTION) {
    for (let j = 0; j < height; j += RESOLUTION) {
      let x = (i / width) * img.width;
      let y = (j / height) * img.height;
      const color = img.get(x, y);
      particles.push(
        new Particle(i + PARTICLE_SIZE / 2, j + PARTICLE_SIZE / 2, color)
      );
    }
  }
}
