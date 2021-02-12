module.exports = function (p) {
  let afinn = {};
  let textbox;
  let output;

  p.preload = function () {
    afinn = p.loadJSON("/js/projects/afinn/AFINN.json");
  };

  p.setup = function () {
    p.noCanvas();

    output = p.select("#output");
    textbox = p.select("#textbox");

    function analyse () {
      const scores = analyseAFINN(textbox.value());
      output.html("The score of this text is " + scores[0] + ", and the comparative score is " + scores[1] + " ");
    }

    textbox.input(analyse);
    analyse();
  };

  function analyseAFINN (text) {
    let score = 0;
    const words = text.split(/\W+/);
    for (let word of words) {
      word = word.toLowerCase();
      if (afinn[word] !== undefined) {
        score += Number(afinn[word]);
        // console.log(word);
      }
    }
    const comparative = score / words.length;
    return [score, comparative];
  }
};
