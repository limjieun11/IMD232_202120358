class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = null; // "rock", "paper", "scissors" 중 하나의 상태
    this.nextState = null;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  countWinningNeighbors() {
    let rockCount = 0;
    let paperCount = 0;
    let scissorsCount = 0;

    this.neighbors.forEach((neighbor) => {
      if (neighbor) {
        if (neighbor.state === 'rock') {
          rockCount++;
        } else if (neighbor.state === 'paper') {
          paperCount++;
        } else if (neighbor.state === 'scissors') {
          scissorsCount++;
        }
      }
    });

    return { rockCount, paperCount, scissorsCount };
  }

  calcNextState() {
    const { rockCount, paperCount, scissorsCount } =
      this.countWinningNeighbors();

    if (this.state === 'rock') {
      this.nextState = paperCount > 2 ? 'paper' : 'rock';
    } else if (this.state === 'paper') {
      this.nextState = scissorsCount > 2 ? 'scissors' : 'paper';
    } else if (this.state === 'scissors') {
      this.nextState = rockCount > 2 ? 'rock' : 'scissors';
    }
  }

  update() {
    this.state = this.nextState;
  }

  display(mouseX, mouseY) {
    if (this.state === 'rock') {
      fill('pink');
    } else if (this.state === 'paper') {
      fill('mint');
    } else if (this.state === 'scissors') {
      fill('skyblue');
    }

    rect(this.x, this.y, this.w, this.h);

    // 마우스 위치에 따라 특정 셀 강조 표시
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    ) {
      noFill();
      stroke(0);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  // 마우스 클릭 시 상태 토글
  toggleState(mouseX, mouseY) {
    // ...
  }
}
