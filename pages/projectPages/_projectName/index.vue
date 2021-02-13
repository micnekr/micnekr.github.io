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
    <component :is="projectData.htmlComponent" v-if="projectData.htmlComponent" ref="additionalSketchComponent" />
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
  mounted () {
    const sketchName = window.$nuxt.$route.params.projectName.toLowerCase();
    console.log("Requiring sketch ", sketchName);

    window.additionalSketchComponent = this.$refs.additionalSketchComponent; // make the html component accessible

    const sketchFunction = require(`~/assets/js/projects/${sketchName}/sketch.js`);
    if (window.sketch !== undefined) { delete window.sketch; }
    window.sketch = new p5(sketchFunction); // make it global
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
