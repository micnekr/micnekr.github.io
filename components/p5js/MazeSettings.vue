<template>
  <section>
    <div class="settings-container">
      <b-button id="reset-button" type="is-primary" expanded @click="resetSearch">Reset</b-button>
      <custom-header class="custom-header">
        Dimensions:
      </custom-header>
      <h2 id="message" class="list-element" />
      <b-field :label="`Height: ${dimY}`">
        <b-numberinput v-model="dimY" :min="5" :max="50" rounded />
      </b-field>
      <b-field :label="`Width: ${dimX}`">
        <b-numberinput v-model="dimX" :min="5" :max="50" rounded />
      </b-field>
      <custom-header class="custom-header">
        Wall Settings:
      </custom-header>
      <b-field>
        <b-switch id="useLineWalls" v-model="useLineWalls" @input="onWallTypeChange">
          {{
            useLineWalls
              ? "The walls are on the border between the tiles"
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
      <b-field :label="`Probability of a wall: ${wallProbability}`">
        <b-numberinput
          v-model="wallProbability"
          :min="0"
          :max="1"
          :step="0.1"
          :disabled="useMazeGenerator"
          rounded
        />
      </b-field>
    </div>
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
    resetSearch() {
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

div.settings-container{
  width: 80%;
  margin: auto;
}

.custom-header{
  text-align: center;
}

#message {
  margin-bottom: 20px;
}

.list-element {
  text-align: center;
  margin: 10px;
  font-weight: bold;
}
</style>
