export const projects = {
  projects: [
    {
      name: "AFINN",
      libraries: ["p5.js", "p5.dom.js"],
      img: "afinn.gif",
      sketchDisplay: {
        title: "AFINN sentiment analysis",
        desc: "This page runs a sentiment analysis algorithm for finding the mood of the given text named AFINN based on a table of words and their scores. The final score is a sum of all scores of words found in text. Comparative score is a mean score of each word in the text.",
      },
      htmlComponent: "sentiment-analysis-textbox",
    },
    {
      name: "collatz",
      libraries: ["p5.js"],
      img: "collatz.gif",
      sketchDisplay: {
        title: "Collatz conjecture visualisation",
        desc: "Test",
      },
    },
    {
      name: "maze",
      libraries: ["p5.js", "p5.dom.js"],
      img: "collatz.gif",
      sketchDisplay: {
        title: "A* maze solving algorithm and a backtracking maze algorithm",
        desc: "Test",
      },
      htmlComponent: "maze-settings",
    },
  ],
};
