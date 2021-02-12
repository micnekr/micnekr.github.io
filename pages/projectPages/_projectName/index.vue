<template>
  <section>
    <div id="script-container">
      <!-- <script
        :src="'/js/projects/' + this.$route.params.projectName + '/sketch.js'"
        defer
      /> -->
    </div>
    <!-- Canvas -->
    <div id="canvasContainer" />
    <component :is="projectData.htmlComponent" v-if="projectData.htmlComponent" />
  </section>
</template>

<script>
import MazeSettings from "~/components/p5js/MazeSettings.vue";
import SentimentAnalysisTextbox from "~/components/p5js/SentimentAnalysisTextbox.vue";
import { projects } from "~/data/jsProjects.js";

export default {
  name: "Sketch",
  components: { MazeSettings, SentimentAnalysisTextbox },
  data () {
    return {
      projectData: this.getProjectData(),
    };
  },
  mounted (params) {
    const sketchName = window.$nuxt.$route.params.projectName.toLowerCase();
    console.log("Requiring sketch ", sketchName);
    const sketch = require(`~/static/js/projects/${sketchName}/sketch.js`);
    // const synth = new Tone.Synth().toMaster();
    // synth.triggerAttackRelease("C4", "8n");
  },
  methods: {
    getProjectData () {
      const hits = projects.projects.filter(obj => obj.name.toLowerCase() === this.$route.params.projectName.toLowerCase());
      if (hits.length === 0) { return; }
      return hits[0];
    },
  },
};
</script>

<style scoped>
#canvasContainer{
  margin:auto;
  margin-top: 10px;
  text-align:center;
}

#afterCanvas{
  margin-top: 10px;
}
</style>

<style>
.p5Canvas{
  outline: 1px solid black;
}
</style>
