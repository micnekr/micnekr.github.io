//                                variables
let canvas;
let bird;
let pipes = [];
let pipeRate = 100;
let score = 0;
const gravity = 0.7;


function setup() {
  // smallest of windowWidth and windowHeight
  let smallestDimension = min(windowWidth - 100, windowHeight - 100);
  canvas = createCanvas(smallestDimension+1, smallestDimension+1);
  canvas.parent("canvasContainer");

  bird = new Bird(15, width/3);

  textAlign(CENTER);

  pipes.push(new Pipe(4, 30))
}

function draw() {
  // erase background
  background(51);
  // PIPES




  // add pipes every pipeRate seconds
  if (frameCount % pipeRate == 0) {
    pipes.push(new Pipe(4, 30))
  }

  // foreach pipe
  for (i = 0; i < pipes.length; i++) {
    let pipe = pipes[i];
    // move and draw
    pipe.update();
    pipe.draw();
    // check if colliding with any birds
      let touches = pipe.collides(bird);
      if (touches == true) {
        return gameOver();
      }else if(touches == false){
        score++
      }
    // discard a pipe if out of boundries
    if (pipe.offScreen) {
      pipes.splice(i, 1);
    }
  }
  // BIRD




    // add gravity, apply update
    bird.gravity(gravity);
    bird.update();
    bird.draw();

    // discard if out of boundries
    if (bird.y < 0 || bird.y > height) {
      return gameOver();
    }

  // score
  fill(0, 255, 0);
  textSize(16);
  text(score, width-100, 50);

}

function mousePressed() {
  jump();
}

function keyPressed() {
  jump();
}

function jump() {
  bird.jump();
}

function gameOver() {
  noLoop();
  // redraw pipes
  background(51);
  for (i = 0; i < pipes.length; i++) {
    let pipe = pipes[i];
    // move and draw
    pipe.draw();
  }
  // display "Game Over"
  fill(160);
  textSize(64);
  text("Game over", width/2, height/2);
  // score
  fill(0, 255, 0);
  textSize(32);
  text("Your score is " + score, width/2, 2*height/3);
}
