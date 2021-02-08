if (window.sketch !== undefined) { delete window.sketch; }
window.sketch = new p5(function (p) {
  let afinn = {};
  let textbox;
  let output;

  const html = `<section class="added-html-container centered">
<textarea class="centered" id="textbox" rows="20" cols="70">I was so far in my reflections when, as I have said, a side light began
to shine upon the subject from the laboratory table. I began to
perceive more deeply than it has ever yet been stated, the trembling
immateriality, the mistlike transience, of this seemingly so solid body
in which we walk attired. Certain agents I found to have the power to
shake and pluck back that fleshly vestment, even as a wind might toss
the curtains of a pavilion. For two good reasons, I will not enter
deeply into this scientific branch of my confession. First, because I
have been made to learn that the doom and burthen of our life is bound
for ever on man’s shoulders, and when the attempt is made to cast it
off, it but returns upon us with more unfamiliar and more awful
pressure. Second, because, as my narrative will make, alas! too
evident, my discoveries were incomplete. Enough then, that I not only
recognised my natural body from the mere aura and effulgence of certain
of the powers that made up my spirit, but managed to compound a drug by
which these powers should be dethroned from their supremacy, and a
second form and countenance substituted, none the less natural to me
because they were the expression, and bore the stamp of lower elements
in my soul.</textarea>
<p id="output" class="centered text-center" />
</section>
`;

  p.preload = function () {
    afinn = p.loadJSON("/js/projects/afinn/AFINN.json");
  };

  p.setup = function () {
    p.noCanvas();

    const afterCanvasEl = document.getElementById("afterCanvas");
    afterCanvasEl.innerHTML = html;

    output = p.select("#output");
    textbox = p.select("#textbox");

    function analyse () {
      const scores = analyseAFINN(textbox.value());
      output.html("The score of this text is " + scores[0] + ", and the comparative score is " + scores[1] + " ");
    }

    textbox.input(analyse);
    analyse();
  };

  function analyseAFINN(text) {
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
});
