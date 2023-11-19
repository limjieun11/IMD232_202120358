let cells = [];

const colNum = 51,
  rowNum = 1;

let w, h;

let currentGen = 0;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  randomSeed(1);

  w = width / colNum;
  h = w;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      //   const state = random() < 0.5;
      let state = false;
      if (col === floor(colNum / 2)) {
        state = true;
      }
      const idx = colNum * row + col;
      const newCell = new Cell(x, y, w, h, state, idx);
      cells.push(newCell);
    }
  }

  cells.forEach((eachCell) => {
    eachCell.addFriends(cells);
  });

  console.log(cells);

  frameRate(4);
  background('white');
  //   noLoop();
}

function draw() {
  background('white');

  const newGen = [];
  for (let col = 0; col < colNum; col++) {
    const idx = colNum * currentGen + col;
    cells[idx].calcNextState();
    const newCell = cells[idx].createNextGen();
    newGen.push(newCell);
    cells.push(newCell);
  }

  //   cells.forEach((eachCell) => {
  //     eachCell.updateState();
  //   });

  //   newGen.forEach((eachNewGen) => {
  //     cells.push(eachNewGen);
  //   });

  newGen.forEach((eachNewGen) => {
    eachNewGen.addFriends(cells);
  });

  currentGen++;

  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
