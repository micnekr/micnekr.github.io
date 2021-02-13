<template>
  <section class="columns is-multiline is-centered">
    <sketch
      v-for="(sketch, index) in sketches"
      :key="index"
      :prefix="prefix"
      :postfix="postfix"
      :sketch-name="sketch.name"
      :sketch-data="sketch"
      class="column is-5"
    />
  </section>
</template>

<script>
import Sketch from "~/components/p5js/Sketch.vue";
import { projects } from "~/data/jsProjects.js";

export default {
  components: { Sketch },

  data () {
    return {
      prefix: "/projectPages/",
      postfix: "",
      sketches: projects.projects,
    };
  },
};
</script>
