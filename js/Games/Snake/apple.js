class AppleManager {
  constructor(grid, snake, applesNum=1) {
    this.snake = snake;
    this.grid = grid;
    this.apples = [];
    for (var i = 0; i < applesNum; i++) {
      this.apples[i] = this.pickApple();
      this.apples[i].isApple = true;
    }
  }

  pickApple(){
    let tempSpot = this.random();
    while (!(!tempSpot.isApple && !this.snake.spots.includes(tempSpot))) {
      tempSpot = this.random();
    }
    return tempSpot;
  }

  random(){
    return grid.spots[floor(random(grid.cols))][floor(random(grid.rows))]
  }

  update(){
    let head = this.snake.head;
    for (let appleIndex in this.apples) {
      let apple = this.apples[appleIndex];
      if(head.x == apple.x && head.y == apple.y){
        this.apples[appleIndex].isApple = false;
        this.apples[appleIndex] = this.pickApple();
        this.apples[appleIndex].isApple = true;
        this.apples[appleIndex].draw();
        return true;
      }
    }
  }
}
