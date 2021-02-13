<template>
  <div class="tile is-parent is-4">
    <div class="tile is-child is-vertical notification is-light">
      <section class="progress-card-container tile is-parent box">
        <div class="tile is-centered is-child">
          <header class="card-header">
            <p class="card-header-title">
              {{ progress.title }}
            </p>
          </header>
          <section class="card-main-body">
            <a :class="progress.link? '': 'nostyle'" @click.prevent="redirect(progress.link)">
              <div class="card-image">
                <figure class="image">
                  <img :src="require(`~/assets/img/${progress.img}`)" alt="Progress image or icon">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  {{ progress.desc }}
                </div>
              </div>
            </a>
          </section>
        </div>
      </section>
      <section
        v-if="progress.progressLevels"
        class="progress-stats tile is-parent is-vertical box"
      >
        <div
          v-for="(progressLevel, index) in progress.progressLevels"
          :key="index"
          class="progress-bar-meter tile is-child columns is-centered is-vcentered"
        >
          <div class="progress-entry column">
            <div class="columns is-centered is-vcentered">
              <div class="progress-meter-desc column is-3">
                {{ progressLevel.name }}
              </div>
              <div class="column is-2" />
              <div class="column is-6">
                <b-progress
                  v-if="progressLevel.type === 'percent'"
                  :value="progressLevel.level"
                  :show-value="progressLevel.tag !== undefined"
                  format="percent"
                >
                  {{ progressLevel.tag }}
                </b-progress>
                <div v-else-if="progressLevel.type === 'data'">
                  {{ progressLevel.level }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["progress"],
  methods: {
    redirect (link) {
      if (link) { this.$store.dispatch(link); }
    },
  },
};
</script>

<style scoped>
.card-image {
  margin: 10px;
}

a.nostyle {
    text-decoration: none !important;
    cursor: inherit;
    color: inherit;
}
</style>
