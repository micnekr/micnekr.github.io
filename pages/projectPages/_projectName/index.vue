<template>
  <section>
    <div id="script-container">
      <script
        :src="'/js/projects/' + this.$route.params.projectName + '/sketch.js'"
        defer
      />
    </div>
    <!-- Canvas -->
    <div id="canvasContainer" />
    <div id="afterCanvas" class="centered" />
  </section>
</template>

<script>
import { projects } from "~/data/jsProjects.js";

export default {
  data () {
    return {
      libraries: projects.projects.libraries,
    };
  },
  methods: {
    getLibraries () {
      const hits = projects.projects.filter(obj => obj.name.toLowerCase() === this.$route.params.projectName.toLowerCase());
      if (hits.length === 0) { return; }
      return hits[0].libraries;
    },
  },
};
</script>

<style scoped>
#canvasContainer{
  margin:auto;
}

#afterCanvas{
  margin-top: 10px;
}
</style>

<style>

.centered{
  margin: auto;
}

textarea.centered{
  display: block;
}

.text-center{
  text-align: center;
}
</style>
