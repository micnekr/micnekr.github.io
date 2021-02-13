<template>
  <div class="progress-set tile is-ancestor is-vertical">
    <custom-header><slot></slot></custom-header>
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
import CustomHeader from "~/components/CustomHeader.vue";

export default {
  components: { ProgressCard },
  props: ["progresses"],
}
</script>
