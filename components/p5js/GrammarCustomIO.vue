<template>
  <section>
    <textarea id="textbox" class="centered" rows="20" cols="70" />
    <b-button
      id="reset-button"
      type="is-primary"
      expanded
      @click="resetSearch"
    >
      Reset
    </b-button>
    <p id="output" align="LEFT" />
  </section>
</template>

<script>
import Vue from "vue";
import CustomHeader from "../CustomHeader.vue";
export default Vue.extend({
  components: { CustomHeader },
  data () {
    return {
      useLineWalls: true,
      useMazeGenerator: true,
      dimX: 10,
      dimY: 10,
      wallProbability: 0.2,
    };
  },
  methods: {
    onWallTypeChange () {
      if (!this.useLineWalls) { this.useMazeGenerator = false; }
    },
    resetSearch () {
      console.log(window);
      console.log(window.sketch);

      // Dispatch/Trigger/Fire the event
      document.dispatchEvent(new CustomEvent("resetEvent"));
    },
  },
});
</script>

<style scoped>
#reset-button{
  margin: 10px;
}

textarea.centered{
  display: block;
  margin: auto;
}

.text-center{
  text-align: center;
}
</style>
