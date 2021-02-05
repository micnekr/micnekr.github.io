<template>
  <section>
    <div id="script-container">
      <script
        v-for="(library, index) in libraries[this.$route.params.projectName]"
        :key="index"
        :src="'/js/libraries/' + library"
      />
      <script
        :src="'/js/projects/' + this.$route.params.projectName + '/sketch.js'"
      />
    </div>
    <!-- Canvas -->
    <div id="canvasContainer" />
  </section>
</template>

<style scoped>
#canvasContainer{
  margin:auto;
}
</style>

<script>
export default {
  layout: "empty",
  data() {
    return {
      libraries: {
        collatz: ["p5.js"],
      },
    }
  },
};
</script>
