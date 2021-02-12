if (window.sketch !== undefined) { delete window.sketch; }
window.sketch = new p5(function (p) {
  let nuxtLoaded = false;

  function waitForNuxt () {
    if (window.$nuxt !== undefined) {
      nuxtLoaded = true;
    }
    else {
      setTimeout(waitForNuxt, 250);
    }
  };

  waitForNuxt();

  // number of rows and columns
  const cols = 10;
  const rows = 10;
  const mazeGenSpeed = 20;
  const mazeSolveSpeed = 12;

  // canvas variable
  let canvas;
  // log
  let messageP;
  let grid;
  // start and end
  let start, end;
  // width and height
  let w, h;
  // objects
  let pathfinding;
  let backtracker;
  // settings
  let diagonal = true;
  let onlyPath = false; // show only path
  let pathAsLine = true;
  let wallsAsLine = false;
  let randomGeneration = true;
  let repeatSearch = true;

  // setInterval(() => nuxtLoaded ? console.log($nuxt) : "", 1000);

  const wallProbability = 0.2;

  const resetCooldown = 3000;

  function reset() {
    // setup the grid
    grid = gridSetup(cols, rows, w, h, wallsAsLine, randomGeneration);
    // set the start and the end of route
    start = grid[0][0];
    end = grid[cols - 1][rows - 1];
    if (!randomGeneration) { backtracker.setTask(grid, start); }
    pathfinding.SetTask(start, end, diagonal, solution, noSolution);
  }

  p.setup = function () {
    // smallest of windowWidth and windowHeight
    const smallestDimension = p.min(p.windowWidth - 100, p.windowHeight - 100);
    canvas = p.createCanvas(smallestDimension + 1, smallestDimension + 1);
    canvas.parent("canvasContainer");
    // setup text display

    messageP = p.select("#message");
    messageP.html("Calculating...");
    // setup of height of cells
    w = smallestDimension / cols;
    h = smallestDimension / rows;
    // make maze algorithm
    backtracker = new MazeCreator();
    // make A* algorithm
    pathfinding = new AStar(w, h);
    reset();
  };

  p.draw = function () {
    if (!pathfinding.searching && backtracker.ready) { return; }

    p.background(255);

    if (!backtracker.ready && !randomGeneration) {
      // display text
      messageP.html("Building the maze...");
      p.frameRate(mazeGenSpeed); // set the speed to make it bearable to watch
      // make a step of maze generting
      backtracker.backtrackerStep();
      // visualize grid, visited cells and current
      backtracker.draw();
    } else {
      pathfinding.draw();
      // display text
      messageP.html("Solving the maze...");
      p.frameRate(mazeSolveSpeed); // set the speed to make it bearable to watch
      // make a step of pathfinding and draw
      pathfinding.aStarStep(onlyPath, pathAsLine, 1);
      if (!pathfinding.searching) {
        setTimeout(reset, resetCooldown);
      }
    }
    drawGrid();
  };

  function drawGrid() {
    // loops through all cells and draw them
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].drawCell(255, false, wallsAsLine);
      }
    }
  }

  function removeFromArray(arr, elt) {
    // loop through all population of array from the end
    for (let i = arr.length - 1; i >= 0; i--) {
      // if is the right element, break
      if (arr[i] === elt) {
        arr.splice(i, 1);
        break;
      }
    }
  }

  function moveBetweenArrays(arr1, arr2, elt) {
    removeFromArray(arr1, elt);
    arr2.push(elt);
  }

  function noSolution() {
    messageP.html("No solution");
    if (!repeatSearch) { p.noLoop(); }
  }

  function solution() {
    messageP.html("Finished");
    if (!repeatSearch) { p.noLoop(); }
  }

  function Spot(x, y, w, h, grid, wallsAsLine, randomGeneration) {
    // x and y
    this.x = x;
    this.y = y;
    // g, h and f scores
    this.f = 0;
    this.g = 0;
    this.h = 0;
    // is visited by maze
    this.mazeVisited = false;
    // which grid are we using
    this.grid = grid;
    // neighbors
    this.neighbors = undefined;
    // walls
    this.walls = [this.top = true, this.right = true, this.bottom = true, this.left = true];
    this.isWall = false;
    // if needed,  generate walls
    if (randomGeneration) {
      if (!wallsAsLine) {
        if (p.random(1) < wallProbability) {
          this.isWall = true;
        }
      } else {
        for (let k = 0; k < 4; k++) {
          if (p.random(1) < 1 - wallProbability) {
            this.walls[k] = false;
          }
        }
      }
    }
    this.drawCell = function (color, cellStroke, wallsAsLine) {
      // create x and y
      const x = this.x * w;
      const y = this.y * h;
      if (wallsAsLine) {
        // if walls as line
        // set stroke
        p.strokeWeight(1);
        p.stroke(0);
        // draw walls
        if (this.walls[0]) {
          p.line(x, y, x + w, y);
        }
        if (this.walls[1]) {
          p.line(x + w, y, x + w, y + h);
        }
        if (this.walls[2]) {
          p.line(x + w, y + h, x, y + h);
        }
        if (this.walls[3]) {
          p.line(x, y + h, x, y);
        }
      } else {
        // set stroke
        if (cellStroke) {
          p.stroke(0);
        } else {
          p.noStroke();
        }
        // if is wall, draw
        if (this.isWall) {
          color = 0;
        }

        if (color !== 255) {
          // draw
          p.fill(color);
          p.rect(x, y, w, h);
        }
      }
    };
    this.mazeNeighbor = function () {
      // vertical and horizontal neighbors
      const lineMoves = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
      ];
      // array of neighbors
      const mazeNeighbors = [];
      // choose all unvisited cells possible
      for (let j = 0; j < 4; j++) {
        const neighbor = this.getCell(x + lineMoves[j][0], y + lineMoves[j][1]);
        if (neighbor != null && !neighbor.mazeVisited) {
          mazeNeighbors.push(neighbor);
        }
      }
      // if there are neighbors
      if (mazeNeighbors.length > 0) {
        // chose a random neighbor
        const chosen = mazeNeighbors[p.floor(p.random(0, mazeNeighbors.length))];
        // choose walls
        let wall;
        if (chosen.x === this.x) {
          switch (chosen.y - this.y) {
            case 1:
              wall = 2;
              break;
            case -1:
              wall = 0;
              break;
          }
        } else {
          switch (chosen.x - this.x) {
            case 1:
              wall = 1;
              break;
            case -1:
              wall = 3;
              break;
          }
        }
        // remove walls
        this.walls[wall] = false;
        chosen.walls[(wall + 2) % 4] = false;
        return chosen;
      } else {
        // if no neighbors, return null
        return null;
      }
    };
    this.getNeighbors = function () {
      // if no neighbors
      if (!this.neighbors) {
        // calculate neighbors
        this.addNeighbors();
      }
      // return the result
      return this.neighbors;
    };
    this.addNeighbors = function () {
      // x and y
      const x = this.x;
      const y = this.y;
      // neighbors array
      this.neighbors = [];
      // moores neighborhoods
      const lineMoves = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
      ];
      const diagonalMoves = [
        [1, -1],
        [1, 1],
        [-1, 1],
        [-1, -1],
      ];
      // make horizontal and vertical neighbors
      if (wallsAsLine) {
        for (let j = 0; j < 4; j++) {
          const neighbor = this.getCell(x + lineMoves[j][0], y + lineMoves[j][1]);
          if (neighbor != null && this.walls[j] !== true && neighbor.walls[(j + 2) % 4] !== true) {
            this.neighbors.push(neighbor);
          }
        }
      } else {
        for (let j = 0; j < 4; j++) {
          const neighbor = this.getCell(x + lineMoves[j][0], y + lineMoves[j][1]);
          if (neighbor != null && !neighbor.isWall) {
            this.neighbors.push(neighbor);
          }
        }
      }
      // create diagonal neighbors
      if (diagonal) {
        if (wallsAsLine) {
          for (let j = 0; j < 4; j++) {
            const neighbor = this.getCell(x + diagonalMoves[j][0], y + diagonalMoves[j][1]);
            if (neighbor != null && !(this.isCorner(this, neighbor, j)) && !(this.isCorner(neighbor, this, j + 2))) {
              this.neighbors.push(neighbor);
            }
          }
        } else {
          for (let j = 0; j < 4; j++) {
            const neighbor = this.getCell(x + diagonalMoves[j][0], y + diagonalMoves[j][1]);
            if (neighbor != null && !neighbor.isWall && !grid[neighbor.x][this.y].isWall && !grid[this.x][neighbor.y].isWall) {
              this.neighbors.push(neighbor);
            }
          }
        }
      }
    };
    this.getCell = function (x, y) {
      // if out of bounds
      if (x < 0 || x > cols - 1 || y < 0 || y > rows - 1) {
        return null;
      } else {
        return this.grid[x][y];
      }
    };
    this.thisOrNeighbor = function (cell1, cell2, wall) {
      return cell1.walls[wall % 4] || cell2.walls[(wall + 2) % 4];
    };// returns statement showing if a wall exists
    this.isCorner = function (cell1, cell2, j) {
      if ((cell2.x - cell1.x) + (cell2.y - cell1.y) !== 0) {
        return this.thisOrNeighbor(cell1, grid[cell2.x][cell1.y], j) || this.thisOrNeighbor(cell1, grid[cell1.x][cell2.y], j + 1);
      }
      return this.thisOrNeighbor(cell1, grid[cell2.x][cell1.y], j + 1) || this.thisOrNeighbor(cell1, grid[cell1.x][cell2.y], j);
    };// returns if there is a corner
  }

  function AStar(w, h) {
    // set constant variables
    this.openSet = [];
    this.closedSet = [];
    this.path = [];
    this.w = w;
    this.h = h;
    // stop task
    this.searching = false;
    this.SetTask = function (start, end, allowDiagonals, sol, noSol) {
      // set start and end
      this.start = start;
      this.end = end;
      // set callbacks
      this.sol = sol;
      this.noSol = noSol;
      // empty openSet, closedSet, path
      this.openSet = [];
      this.closedSet = [];
      this.path = [];
      // set diagonals boolean
      this.allowDiagonals = allowDiagonals;
      // make start and end not walls
      start.isWall = false;
      end.isWall = false;
      // put start to openSet
      this.openSet.push(start);
      // start task
      this.searching = true;
    };
    this.aStarStep = function (onlyPath, pathAsLine) {
      const result = this.algorithm();
      this.draw(onlyPath, pathAsLine);
      return result;
    };
    this.aStarResult = function () {
      let result = 0;
      while (result === 0) {
        result = this.algorithm(false);
      }
      return result;
    };
    this.calcPath = function (current) {
      // new array
      const path = [];
      let temp = current;
      // push previous in array until there is no previous left
      while (temp) {
        path.push(temp);
        temp = temp.previous;
      }
      return path;
    };
    this.Heuristic = function (a, b, multiplier = 0) {
      // heuristic
      let d;
      // choose right heuristic and apply it
      if (this.allowDiagonals) {
        // pythagorean distance
        d = p.dist(a.x, a.y, b.x, b.y);
      } else {
        // manhatton distance
        d = p.abs(a.x - b.x) + p.abs(a.y - b.y);
      }
      return d * multiplier;
    };
    this.algorithm = function (showCalc = true, heuristic = 1) {
      // if openset is not empty
      if (this.openSet.length > 0) {
        // this.searching for lowest f
        let lowerIndex = 0;
        for (let i = 0; i < this.openSet.length; i++) {
          if (this.openSet[i].f < this.openSet[lowerIndex].f) {
            lowerIndex = i;
          }
        }
        const current = this.openSet[lowerIndex];
        // move current cell into closed set
        moveBetweenArrays(this.openSet, this.closedSet, current);
        // stop if reached the end
        if (current === this.end) {
          // stop task
          this.searching = false;
          // calculate path
          this.path = this.calcPath(current);
          // callback
          this.sol();
          // return result
          return this.path;
        }
        // foreach neighbor
        const neighbors = current.getNeighbors();
        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i];
          // if was not evaluated
          if (!this.closedSet.includes(neighbor)) {
            // update tempG
            const tempG = current.g + 1;
            // is not new path
            let isNewPath = false;
            // if is already in openSet
            if (this.openSet.includes(neighbor)) {
              // check if it is a more efficient way
              if (tempG < neighbor.g) {
                neighbor.g = tempG;
                isNewPath = true;
              }
            } else {
              // is new cell in openset
              // set g
              neighbor.g = tempG;
              // if not in openSet, add it
              this.openSet.push(neighbor);
              // is new path
              isNewPath = true;
            }
            // if was not evaluated before, set h, f and previous
            if (isNewPath) {
              neighbor.h = this.Heuristic(neighbor, this.end, heuristic);
              neighbor.f = neighbor.g + neighbor.h;
              neighbor.previous = current;
            }
          }
        }
        // if need results
        if (showCalc) {
          this.path = this.calcPath(current);
        }
        // return 0 if not finished
        return 0;
      } else {
        // no solution
        // stop searching
        this.searching = false;
        // empty the path
        this.path = [];
        // no solution callback
        this.noSol();
        return null;
      }
    };
    this.draw = function (onlyPath = true, pathAsLine = true) {
      // draw openSet and closedSet
      if (!onlyPath) {
        // openSet cells
        this.drawCells(this.openSet, p.color(0, 255, 0), false, false);
        // closedSet cells
        this.drawCells(this.closedSet, p.color(255, 100, 100), false, false);
      }
      // if path is line, draw line. if path is not a line, drawCell
      if (pathAsLine) {
        p.noFill(); // shape is recognized as shape, but not as line
        p.stroke(100, 100, 255);
        p.strokeWeight((this.w + this.h) / 4);
        // remember vertices
        p.beginShape();
        for (let i = 0; i < this.path.length; i++) {
          p.vertex(this.path[i].x * this.w + this.w / 2, this.path[i].y * this.h + this.h / 2);
        }
        p.endShape();
      } else {
        this.drawCells(this.path, p.color(255, 0, 200), false, false);
      }
    };
    this.drawCells = function (arr, color, stroke, wallsAsLine) {
      // loop through all cells in array
      for (let i = 0; i < arr.length; i++) {
        arr[i].drawCell(color, stroke, wallsAsLine);
      }
    };
  }

  function MazeCreator() {
    this.ready = true;
    this.stack = [];
    this.visitedCells = 0;

    let grid;

    this.setTask = function (_grid, start) {
      grid = _grid;
      // set ready variable to false(task has started)
      this.current = start;
      // mark it as visited
      start.mazeVisited = true;

      this.ready = false;
      // empty the stack
      this.stack = [];
      // set visited cells to 0
      this.visitedCells = 0;
    };
    this.backtrackerStep = function () {
      this.algorithm();
      this.draw();
    };
    this.draw = function () {
      // loop through all cells and draw visited by maze
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j].mazeVisited) {
            grid[i][j].drawCell(p.color(100, 100, 255), false, false);
          }
        }
      }
      // draw current
      this.current.drawCell(p.color(0, 255, 0), false, false);
    };
    this.algorithm = function () {
      // if there are cells left
      if (this.visitedCells < grid[0].length * grid.length - 1) {
        // Step 1
        // choose random neighbor and remove the walls
        const next = this.current.mazeNeighbor();
        // if there are neighbors
        if (next) {
          // add a visited cell
          this.visitedCells++;
          // Step 2
          // push current to stack
          this.stack.push(this.current);
          // Step 3
          // set current to next
          this.current = next;
          this.current.mazeVisited = true;
          // else if there are elements in stack
        } else if (this.stack.length > 0) {
          // get the last element from stack and delete interval
          // also, set current to this value
          this.current = this.stack.pop();
        }
        // if finished
      } else {
        this.ready = true;
      }
    };
  }

  function gridSetup(cols, rows, w, h, wallsAsLine, randomGeneration) {
    // making a 1d array
    const grid = new Array(cols);
    // making a 2d array
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }
    // assigning values
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j, w, h, grid, wallsAsLine, randomGeneration);
      }
    }
    return grid;
  }
});
