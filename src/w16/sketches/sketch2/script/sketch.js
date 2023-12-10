/*
Particles to image

Particles seek a target to make up an image. 
They get bigger the closer they get to their target.

Controls:
  - Move the mouse to interact.
  - Hold down the mouse button pull particles in.
  - Press any key to change to the next image.
  - Use the on-screen controls to change settings.

Thank's for original Author: Jason Labbe - jasonlabbe3d.com
  
Fork for a case study of an art instalation. j_espanca_bacelar 2020
	
*/

var imgs = [];
var imgNames = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/800px-Apple_Computer_Logo_rainbow.svg.png',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15e30876-73ca-433c-be3e-59ac016a0d49/d73mcku-6a0d825f-75b4-4a1b-b6c2-3c8b36ea6e55.png/v1/fill/w_1024,h_741/apple_30_year_anniversary_logo_by_nakkinya_d73mcku-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQxIiwicGF0aCI6IlwvZlwvMTVlMzA4NzYtNzNjYS00MzNjLWJlM2UtNTlhYzAxNmEwZDQ5XC9kNzNtY2t1LTZhMGQ4MjVmLTc1YjQtNGExYi1iNmMyLTNjOGIzNmVhNmU1NS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iFpCKyZRQZm8eanHMbq3IhuhNi5GTbwUYg1iKX6_lBg',
  //   'manuscript-font-illuminated_b.jpg',
];
//var imgNames = ["IMG_5746.JPG","IMG_5745.JPG","IMG_5748 2.JPG"];
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
  for (var i = 0; i < imgNames.length; i++) {
    var newImg = loadImage(imgNames[i]);
    newImg.resize(200, 200);
    imgs.push(newImg);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < imgNames.length; i++) {
    imgs[i].resize(imgs[i].width * 0.7, imgs[i].height * 0.7);
  }

  // Create on-screen controls.
  e = createElement('h3', 'Mouse Size')
    .position(105, 60)
    .style('color', '#ffffff');
  mouseSizeSlider = new SliderLayout('Mouse size', 50, 200, 100, 1, 100, 100);

  e = createElement('h3', 'Particle Size')
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

  e = createElement('h3', 'Speed').position(105, 200).style('color', '#ffffff');
  speedSlider = new SliderLayout(
    'Speed',
    0,
    5,
    1,
    0.5,
    100,
    particleSizeSlider.slider.position().y + 70
  );

  e = createElement('h3', 'Resolution')
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
  nextImageButton.style('color', '#ff0000');
  nextImageButton.style('font-size', '16px');
  nextImageButton.mousePressed(nextImage);

  saveImageButton = createButton('Screenshot');
  saveImageButton.position(100, resSlider.slider.position().y + 120);
  saveImageButton.style('color', '#00bb00');
  saveImageButton.style('font-size', '16px');
  saveImageButton.mousePressed(saver);

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

function saver() {
  save(
    'img_' +
      month() +
      '-' +
      day() +
      '_' +
      hour() +
      '-' +
      minute() +
      '-' +
      second() +
      '.jpg'
  );
}
