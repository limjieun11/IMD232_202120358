function generateRandomPos(x, y, mag) {
  var pos = new p5.Vector(x, y);

  var randomDirection = new p5.Vector(random(width), random(height));

  var vel = p5.Vector.sub(randomDirection, pos);
  vel.normalize();
  vel.mult(mag);
  pos.add(vel);

  return pos;
}

function nextImage() {
  // 다음 이미지로 체인지
  imgIndex++;
  if (imgIndex > imgs.length - 1) {
    imgIndex = 0;
  }
  imgs[imgIndex].loadPixels();

  //파티클 배열생성
  var particleIndexes = [];
  for (var i = 0; i < allParticles.length; i++) {
    particleIndexes.push(i);
  }

  var pixelIndex = 0;

  // 이미지 픽셀
  for (var y = 0; y < imgs[imgIndex].height; y++) {
    for (var x = 0; x < imgs[imgIndex].width; x++) {
      //이미지 픽셀 컬러
      var pixelR = imgs[imgIndex].pixels[pixelIndex];
      var pixelG = imgs[imgIndex].pixels[pixelIndex + 1];
      var pixelB = imgs[imgIndex].pixels[pixelIndex + 2];
      var pixelA = imgs[imgIndex].pixels[pixelIndex + 3];

      pixelIndex += 4;

      if (random(1.0) > loadPercentage * resSlider.slider.value()) {
        continue;
      }

      var pixelColor = color(pixelR, pixelG, pixelB);

      if (particleIndexes.length > 0) {
        //기존 파티클 사용
        var index = particleIndexes.splice(
          random(particleIndexes.length - 1),
          1
        );
        var newParticle = allParticles[index];
      } else {
        // 새로운 파티클 생성
        var newParticle = new Particle(width / 2, height / 2);
        allParticles.push(newParticle);
      }

      newParticle.target.x = x + width / 2 - imgs[imgIndex].width / 2;
      newParticle.target.y = y + height / 2 - imgs[imgIndex].height / 2;
      newParticle.endColor = pixelColor;
    }
  }

  //나머지 파티클 제거
  if (particleIndexes.length > 0) {
    for (var i = 0; i < particleIndexes.length; i++) {
      allParticles[particleIndexes[i]].kill();
    }
  }
}
