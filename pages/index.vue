<template>
  <section class="skills">
    <skill-set :skills="skills">
      Skills
    </skill-set>
    <skill-set :skills="skills">
      Skills
    </skill-set>
  </section>
</template>

<script>
import SkillCard from "~/components/SkillCard.vue"
import SkillSet from '~/components/SkillSet.vue'
import { skills } from "~/data/skills.js"

export default {
  name: "HomePage",

  components: { SkillCard, SkillSet, },

  data () {
    return {
      skills,
    }
  },
}
</script>
