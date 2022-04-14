export const projects = {
  projects: [
    {
      name: "afinn",
      libraries: ["p5.js"],
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
      libraries: ["p5.js"],
      img: "collatz.gif",
      sketchDisplay: {
        title: "Labyrinth building and solving",
        desc: "A* maze solving algorithm and a backtracking maze algorithm",
      },
      htmlComponent: "maze-settings",
    },
    {
      name: "grammarCustom",
      libraries: ["p5.js"],
      img: "collatz.gif",
      sketchDisplay: {
        title: "A context-free text generator",
        desc: "A grammar library written by used to geneate random stories",
      },
      htmlComponent: "grammar-custom-i-o",
    },
    {
      name: "games",
      libraries: ["p5.js"],
      img: "collatz.gif",
      sketchDisplay: {
        title: "Games",
        desc: "TEST",
      },
      projects: {
        name: "grammarCustom",
        libraries: ["p5.js"],
        img: "collatz.gif",
        sketchDisplay: {
          title: "A context-free text generator",
          desc: "A grammar library written by used to geneate random stories",
        },
        htmlComponent: "grammar-custom-i-o",
      },
    },
  ],
};
