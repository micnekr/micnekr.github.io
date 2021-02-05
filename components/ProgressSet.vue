<template>
  <div class="progress-set tile is-ancestor is-vertical">
    <section class="tile container section is-parent is-10">
      <div class="tile notification is-primary-light is-child">
        <h3 class="is-light-blue-invert is-centered title"><slot></slot></h3>
      </div>
    </section>
    <section class="columns is-multiline is-centered is-flex-wrap-wrap">
      <progress-card
        v-for="(progress, index) in progresses"
        :key="index"
        :progress="progress"
        class="column"
      />
    </section>
  </div>
</template>

<style scoped>
.progress-set {
  margin-top: 10px;
}
</style>

<script>
import ProgressCard from "~/components/ProgressCard.vue";

export default {
  components: { ProgressCard },
  props: ["progresses"],
}
</script>
