<template>
  <section>
    <div id="card-container" class="tile is-ancestor">
      <div class="tile is-parent" />
      <div class="tile is-4 is-parent notification is-vertical">
        <b-image
          class="tile is-child"
          :src="require('~/assets/person-placeholder.jpg')"
          rounded
        />
        <section class="tile description is-vertical">
          <h2 class="tile is-child has-text-weight-bold">
            Micnekr
          </h2>
          <div class="tile">
            <div class="tile is-child" />
            <a v-for="(icon, index) in icons" :key="index" :href="icon.link" class="link-container">
              <b-icon :icon="icon.iconName" size="is-medium" />
            </a>
            <div class="tile is-child" />
          </div>
        </section>
      </div>
      <div class="tile is-parent" />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        {
          iconName: "github",
          link: "https://github.com/micnekr/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#card-container {
  margin: 15px;
}

.description {
  text-align: center;
}

.link-container{
    padding: 5px;
    margin: 0px 10px;
}
</style>
