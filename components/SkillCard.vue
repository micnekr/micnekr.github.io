<template>
  <div class="tile is-parent is-4">
    <div class="tile is-child is-vertical notification is-light">
      <section class="skill-card-container tile is-parent box">
        <div class="tile is-centered is-child">
          <header class="card-header">
            <p class="card-header-title"> {{ skill.title }} </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              {{ skill.desc }}
            </div>
          </div>
        </div>
      </section>
      <section class="skill-stats tile is-parent is-vertical box"
      v-if="skill.skillLevels"
      >
        <div
          v-for="(skillLevel, index) in skill.skillLevels"
          :key="index"
          class="skill-bar-meter tile is-child columns is-centered is-vcentered"
        >
          <div class="skill-entry column">
            <div class="columns is-centered is-vcentered">
              <div class="skill-meter-desc column is-3">
                {{ skillLevel.name }}
              </div>
              <div class="column is-2"></div>
              <div class="column is-6">
                <b-progress
                  v-if="skillLevel.type === 'percent'"
                  :value="skillLevel.level"
                  format="percent"
                />
                <div v-else-if="skillLevel.type === 'data'">
                  {{ skillLevel.level }}
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
  props: ["skill"],
};
</script>
