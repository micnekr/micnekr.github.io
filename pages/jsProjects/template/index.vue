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

function getProjectbyName (p, name){
    return p.projects.filter(obj => obj.name === name)[0]
}

let projectsInFolder = getProjectbyName(projects, "maze").projects;

for (const project of projectsInFolder) {
  project.img = "/img/jsProjectsGifs/" + project.img;
}

export default {
  components: { Sketch },

  data () {
    return {
      prefix: "/projectPages/",
      postfix: "",
      sketches: projectsInFolder,
    };
  },
};
</script>
