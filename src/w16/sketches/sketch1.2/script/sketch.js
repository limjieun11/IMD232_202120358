var imgs = [];
var imgNames = [
  // './assets/자산 4.png',
  './assets/자산 5.png',
  './assets/자산 6.png',
  './assets/자산 7@2x.png',
];
var imgIndex = -1;

var loadPercentage = 0.045; // 0 to 1.0
var closeEnoughTarget = 50;

var allParticles = [];

var mouseSizeSlider;
var particleSizeSlider;
var speedSlider;
var resSlider;
var nextImageButton;

function preload() {
  // Pre-load all images.
  for (let i = 0; i < imgNames.length; i++) {
    const newImg = loadImage(imgNames[i]);
    newImg.resize(200, 200);
    imgs.push(newImg);
  }
}

function setup() {
  setCanvasContainer('canvas', 1000, 1000, true);
  for (let i = 0; i < imgNames.length; i++) {
    imgs[i].resize(imgs[i].width * 0.7, imgs[i].height * 0.7);
  }

  // Create on-screen controls.
  e = createElement('h4', 'Mouse Size')
    .position(105, 60)
    .style('color', '#ffffff');
  mouseSizeSlider = new SliderLayout('Mouse size', 50, 200, 100, 1, 100, 100);

  e = createElement('h4', 'Particle Size')
    .position(105, 130)
    .style('color', '#ffffff');
  particleSizeSlider = new SliderLayout(
    'Particle size',
    1,
    20,
    8,
    1,
    100,
    mouseSizeSlider.slider.position().y + 70
  );

  e = createElement('h4', 'Speed').position(105, 200).style('color', '#ffffff');
  speedSlider = new SliderLayout(
    'Speed',
    0,
    5,
    1,
    0.5,
    100,
    particleSizeSlider.slider.position().y + 70
  );

  e = createElement('h4', 'Resolution')
    .position(105, 270)
    .style('color', '#ffffff');
  resSlider = new SliderLayout(
    'Count multiplier (on next image)',
    0.1,
    2,
    1,
    0.1,
    100,
    speedSlider.slider.position().y + 70
  );

  nextImageButton = createButton('Next image');
  nextImageButton.position(100, resSlider.slider.position().y + 60);
  nextImageButton.style('color', '#000000');
  nextImageButton.style('font-size', '16px');
  nextImageButton.mousePressed(nextImage);

  // saveImageButton = createButton('Screenshot');
  // saveImageButton.position(100, resSlider.slider.position().y + 120);
  // saveImageButton.style('color', '#00bb00');
  // saveImageButton.style('font-size', '16px');
  // saveImageButton.mousePressed(saver);

  // Change to first image.
  nextImage();
}

function draw() {
  background(0);

  for (var i = allParticles.length - 1; i > -1; i--) {
    allParticles[i].move();
    allParticles[i].draw();

    if (allParticles[i].isKilled) {
      if (allParticles[i].isOutOfBounds()) {
        allParticles.splice(i, 1);
      }
    }
  }

  // these are commented out, because they were visible in the screen capture
  // I used createElement commands so that they are not captured
  // Display slider labels.
  // mouseSizeSlider.display();
  // particleSizeSlider.display();
  // speedSlider.display();
  // resSlider.display();
}

function keyPressed() {
  nextImage();
}

// function saver() {
//   save(
//     'img_' +
//       month() +
//       '-' +
//       day() +
//       '_' +
//       hour() +
//       '-' +
//       minute() +
//       '-' +
//       second() +
//       '.jpg'
//   );
// }
