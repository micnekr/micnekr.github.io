<template>
  <div class="skill-set tile is-ancestor is-vertical">
    <section class="tile container section is-parent is-10">
      <div class="tile notification is-primary-light is-child">
        <h3 class="is-light-blue-invert is-centered title"><slot></slot></h3>
      </div>
    </section>
    <section class="tile is-flex-wrap-wrap">
      <skill-card
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
      />
    </section>
  </div>
</template>

<style scoped>
.skill-set {
  margin-top: 10px;
}
</style>

<script>
import SkillCard from "~/components/SkillCard.vue";

export default {
  components: { SkillCard },
  props: ["skills"],
};
</script>
