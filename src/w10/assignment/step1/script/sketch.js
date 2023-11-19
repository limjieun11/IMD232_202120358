const tiles = [];
let rowNum = 50,
  colNum = 50;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const w = width / colNum;
  const h = w;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
    }
  }

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [
        getIdx(row - 1, col - 1),
        getIdx(row - 1, col),
        getIdx(row - 1, col + 1),
        getIdx(row, col + 1),
        getIdx(row + 1, col + 1),
        getIdx(row + 1, col),
        getIdx(row + 1, col - 1),
        getIdx(row, col - 1),
      ];

      // ... (기존 이웃 설정 코드 유지)

      const neighbors = [];
      neighborsIdx.forEach((eachIdx) => {
        neighbors.push(eachIdx >= 0 ? tiles[eachIdx] : null);
      });

      const idx = getIdx(row, col);
      tiles[idx].setNeighbors(neighbors);
    }
  }

  randomSeed(1);
  tiles.forEach((each) => {
    const randomValue = random();
    if (randomValue < 0.33) {
      each.state = 'rock';
    } else if (randomValue < 0.66) {
      each.state = 'paper';
    } else {
      each.state = 'scissors';
    }
  });

  frameRate(15);
  background(255);
  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function draw() {
  background('white');

  tiles.forEach((each) => {
    each.calcNextState();
  });

  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++) {
    if (tiles[idx].toggleState(mouseX, mouseY)) {
      break;
    }
  }
}

function keyPressed() {
  // 추가적인 키 입력 로직 (필요 시 추가)
}
