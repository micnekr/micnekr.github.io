<template>
  <section class="columns is-multiline">
    <sketch
      v-for="(sketch, index) in sketches"
      :key="index"
      :prefix="prefix"
      :postfix="postfix"
      :sketch-name="sketch.name"
      :sketch-display="sketch.sketchDisplay"
      class="column is-3"
    />
  </section>
</template>

<script>
import Sketch from "~/components/p5js/Sketch.vue"
export default {
  name: "JavascriptProjects",

  components: { Sketch, },

  data () {
    return {
      prefix: "/projectPages/",
      postfix: "",
      sketches: [
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
        {
          name: "collatz",
          libraries: ["p5.js", "resize.js", ],
          sketchDisplay: {
            title: "Collatz conjecture visualisation",
            desc: "Test",
          },
        },
      ],
    }
  },
}
</script>
