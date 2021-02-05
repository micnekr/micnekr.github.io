<template>
  <section class="skills">
    <progress-set :progresses="skills.skills">
      Skills
    </progress-set>
    <progress-set :progresses="skills.languages">
      Languages
    </progress-set>
    <progress-set :progresses="skills.libraries">
      Libraries and frameworks
    </progress-set>
  </section>
</template>

<script>
import ProgressSet from "~/components/ProgressSet.vue";
import { skills } from "~/data/skills.js";

export default {
  name: "HomePage",

  components: { ProgressSet },

  data () {
    return {
      skills,
      title: "micnekr homepage",
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>
