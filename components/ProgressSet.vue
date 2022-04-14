<template>
  <div class="progress-set tile is-ancestor is-vertical">
    <custom-header><slot /></custom-header>
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

<script>
import ProgressCard from "~/components/ProgressCard.vue";

export default {
  components: { ProgressCard },
  props: ["progresses"],
};
</script>

<style scoped>
.progress-set {
  margin-top: 10px;
}
</style>
