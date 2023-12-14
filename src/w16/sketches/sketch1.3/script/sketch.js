var imgs = [];
var imgNames = ['./assets/peace1.5.png', './assets/happy2.png'];
var imgIndex = -1;

var loadPercentage = 0.05;
var closeEnoughTarget = 50;

var allParticles = [];

var mouseSizeSlider;
var particleSizeSlider;
var speedSlider;
var resSlider;
var nextImageButton;

//이미지 미리 로드
function preload() {
  for (let i = 0; i < imgNames.length; i++) {
    const newImg = loadImage(imgNames[i]);
    newImg.resize(200, 200);
    imgs.push(newImg);
  }
}

function setup() {
  setCanvasContainer('canvas', 800, 800, true);
  for (let i = 0; i < imgNames.length; i++) {
    imgs[i].resize(imgs[i].width * 0.7, imgs[i].height * 0.7);
  }

  //슬라이더텍스트
  e = createElement('h6', 'Mouse Size')
    .position(105, 60)
    .style('color', '#ffffff')
    .style('font-family', 'kalnia, serif');
  mouseSizeSlider = new SliderLayout('Mouse size', 50, 200, 100, 1, 100, 100);

  e = createElement('h6', 'Particle Size')
    .position(105, 130)
    .style('color', '#ffffff')
    .style('font-family', 'kalnia, serif');
  particleSizeSlider = new SliderLayout(
    'Particle size',
    1,
    20,
    8,
    1,
    100,
    mouseSizeSlider.slider.position().y + 70
  );

  e = createElement('h6', 'Speed')
    .position(105, 200)
    .style('color', '#ffffff')
    .style('font-family', 'kalnia, serif');
  speedSlider = new SliderLayout(
    'Speed',
    0,
    5,
    1,
    0.5,
    100,
    particleSizeSlider.slider.position().y + 70
  );

  e = createElement('h6', 'Resolution')
    .position(105, 270)
    .style('color', '#ffffff')
    .style('font-family', 'kalnia, serif');
  resSlider = new SliderLayout(
    'Count multiplier (on next image)',
    0.1,
    2,
    1,
    0.1,
    100,
    speedSlider.slider.position().y + 70
  );

  //다음이미지버튼 스타일
  nextImageButton = createButton('Next image');
  nextImageButton.position(100, resSlider.slider.position().y + 60);
  nextImageButton.style('color', '#000000');
  nextImageButton.style('font-size', '16px');
  nextImageButton.style('font-family', 'kalnia, serif');
  nextImageButton.mousePressed(nextImage);

  //다음이미지 변환
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
}

function keyPressed() {
  nextImage();
}

function SliderLayout(
  label,
  minValue,
  maxValue,
  defaultValue,
  steps,
  posx,
  posy
) {
  this.label = label;
  this.slider = createSlider(minValue, maxValue, defaultValue, steps);
  this.slider.position(posx, posy);

  this.slider.style('red');

  this.display = function () {
    var sliderPos = this.slider.position();

    noStroke();
    fill(0);
    textSize(6);
    text(this.label, sliderPos.x, sliderPos.y - 10);

    fill(0);
    text(
      this.slider.value(),
      sliderPos.x + this.slider.width + 10,
      sliderPos.y + 10
    );
  };
}
