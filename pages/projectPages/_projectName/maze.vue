<template>
  <section>
    <!-- Canvas -->
    <div id="canvasContainer" />
    <maze-settings />
  </section>
</template>

<script>
import MazeSettings from "~/components/p5js/MazeSettings.vue";
import { projects } from "~/data/jsProjects.js";

const projectName = "maze";

export default {
  name: projectName,
  components: { MazeSettings },
  data () {
    return {
      projectData: this.getProjectData(),
    };
  },
  methods: {
    getProjectData () {
      const hits = projects.projects.filter(
        obj => obj.name.toLowerCase() === projectName
      );
      if (hits.length === 0) {
        return;
      }
      return hits[0];
    },
  },
};
</script>

<style scoped>
#canvasContainer {
  margin: auto;
  margin-top: 10px;
  text-align: center;
}

#afterCanvas {
  margin-top: 10px;
}
</style>

<style>
.p5Canvas {
  outline: 1px solid black;
}
</style>
