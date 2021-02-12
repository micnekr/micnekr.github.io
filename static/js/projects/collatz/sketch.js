if (window.sketch !== undefined) { delete window.sketch; }
window.sketch = new p5(function (p) {
  let canvas;
  const max = 100000;
  let current = 1;
  const speed = 200;
  let nums = {};

  p.setup = function () {
    // smallest of windowWidth and windowHeight
    const smallestDimension = p.min(p.windowWidth - 100, p.windowHeight - 100);
    canvas = p.createCanvas(smallestDimension + 1, smallestDimension + 1);
    canvas.parent("canvasContainer");
  }

  p.draw = function () {
    for (let i = 0; i < speed; i++) {
      if (max < current) {
        current = 1;
        nums = {};
        p.background(255);
        return;
      }
      const iterations = addNumber(current, nums);
      p.point(p.map(current, 0, max, 0, p.width), p.map(iterations, 0, 400, p.height, 0));
      current++;
    }
  }

  function addNumber(num, previous) {
    previous = previous || {};
    if (previous[num]) {
      return previous[num];
    }
    if (num === 1) {
      return 0;
    }

    let iterations = 0;
    if (num % 2 === 0) {
      iterations = addNumber(num / 2, previous) + 1;
    } else {
      iterations = addNumber((3 * num + 1) / 2, previous) + 2;
    }
    previous[num] = iterations;
    return iterations;
  }

})