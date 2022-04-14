module.exports = function (p) {
  let rules = {
    start: ">Hello, #human#.\n>My id number is #id#.\n>I was programmed to tell you a story.\n>System:alert(generating_story).line_138\n>#hero=characters##story#",
    human: ["human", "human being"],
    id: ["W2.1.3-alfa", "R.O.B.O.T-914", "Num_4246", "r_1.4.0"],

    toldStory: "'So, have you heard of this peculiar story?' - asked the robot, looking at one of his old friends. 'It all started a long time ago...'\n#story#",
    story: "Once upon a time, there was a #hero#. This #hero# was very #heroadj#. #second=secondCh##name=names##plot#",
    plot: "His #second# was lost, so #name# wanted to save him.\n By the way, the #hero#`s name was #name#.\n  So he went to #place# and #endings#",

    robot: "saw a robot there.\n As #hero# was good at programming, he changed the robot`s program to find #name#`s #second#.\n The robot completed the task in less than #time#. The #hero# was so #happy#, so he made the robot tell others his story. His memory wasn't great, so he misremembered some parts of the adventure.\n\n#toldStory#",
    found: "found his #second# there.",
    endings: ["#robot#", "#found#"],
    characters: ["knight", "dragon", "sailor", "prince"],
    secondCh: ["friend", "father", "brother", "son"],
    names: ["John", "Peter", "Bob", "Josh", "Chris"],
    place: ["his house", "bar", "his #second#`s house"],
    time: ["a few minutes", "an hour", "a day"],
    heroadj: ["kind", "funny", "noble", "strange"],
    happy: ["happy", "cheerful", "glad", "joyful"],
  };
  let grammar;
  let output;

  p.setup = function () {
    p.noCanvas();
    output = p.select("#output");
    const textbox = p.select("#textbox");
    textbox.value(JSON.stringify(rules, null, 4));

    function updateResult () {
      output.html("");
      rules = JSON.parse(textbox.value());
      grammar = new Grammar(rules);
      const result = grammar.expand();
      console.log(result);
      output.html(result.replace(/\n/g, "<br/>"));
    }
    p.select("#reset-button").mouseClicked(updateResult);
    updateResult();
  };

  const variableDeclaring = "=";
  const separationSymbols = "#";

  class Grammar {
    constructor (rules) {
      this.rules = rules;
      this.variables = {};
    }

    choose (rule) {
      let chosen = "";
      if (Array.isArray(rule)) {
        chosen = p.random(rule);
      } else {
        chosen = rule;
      }
      return chosen;
    }

    expand (start = "start") {
      if (this.rules.start === undefined) { throw new Error("The start property must be defined"); }
      const output = this.execRule(start);
      return output;
    }

    execRule (rule) {
      // get rule or variable content
      const content = this.choose(this.rules[rule]) || this.variables[rule];
      // if is not a rule, return the input
      if (content === undefined) {
        return rule;
      }

      const result = this.parse(content);
      // push the content to the array.
      // arr.push(divided.join(" "));
      return result.join("");
    }

    parse (content) {
      // find # symbols
      const divided = content.split(separationSymbols);
      // if wrong number of tokens
      if (divided.length % 2 === 0) {
        throw new Error("Number of '#'s should be even");
      }
      // result variable
      const result = [];
      // loop through all tokens
      for (const partIndex in divided) {
        const part = divided[partIndex];
        // ever second token is special
        if (partIndex % 2 === 1) {
          // if special
          result[partIndex] = this.interpret(part);
        } else {
          // if is just text, add it
          result[partIndex] = divided[partIndex];
        }
      }
      return result;
    }

    interpret (part) {
      switch (true) {
        // a rule
        case !part.includes(variableDeclaring) && (this.rules[part] !== undefined || this.variables[part] !== undefined):
          // is a rule
          return this.execRule(part);
        // new variable
        case part.includes(variableDeclaring):
          // declaring a variable
          const variable = part.substring(0, part.indexOf(variableDeclaring));
          let value = part.substring(part.indexOf(variableDeclaring) + 1, part.length);
          value = this.execRule(value);
          this.variables[variable] = value;
          break;

        default:
          throw new Error("'" + part + "'" + " is not declared or is not a rule");
      }
    }
  }
};
