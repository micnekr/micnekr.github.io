let canvas
function setup () {
  const dims = getDims()
  console.log(dims)
  canvas = createCanvas(dims, dims)
  canvas.parent("canvasContainer")
}

function windowResized () {
  const dims = getDims()
  console.log(dims)
  resizeCanvas(dims, dims)
}

function getDims () {
  console.log(windowWidth, windowHeight)
  return Math.min(windowWidth, windowHeight)
}
