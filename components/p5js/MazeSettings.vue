<template>
  <section>
    <h2 id="message" class="list-element" />
    <b-field>
      <b-switch id="useLineWalls" v-model="useLineWalls">
        {{
          useLineWalls
            ? "The walls are on the side of the tiles"
            : "The wall is an entire tile"
        }}
      </b-switch>
    </b-field>
    <b-field>
      <b-switch
        id="useMazeGenerator"
        v-model="useMazeGenerator"
        :disabled="!useLineWalls"
      >
        {{
          useMazeGenerator
            ? "Using a backtracking maze generator"
            : "Use a random maze generator"
        }}
      </b-switch>
    </b-field>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      useLineWalls: true,
      useMazeGenerator: true,
    };
  },
});
</script>

<style scoped>
#message {
  margin-bottom: 20px;
}

.list-element {
  text-align: center;
  margin: 10px;
  font-weight: bold;
}
</style>
