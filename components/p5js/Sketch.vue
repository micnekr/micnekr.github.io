<template>
  <section>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ sketchData.sketchDisplay.title }}
        </p>
      </header>
      <nuxt-link
        class="card-contents"
        :class="sketchData.noLink ? 'nostyle' : ''"
        :to="{ path: sketchData.link || prefix + sketchData.name + postfix }"
      >
        <div class="card-sketch">
          <div class="card-image">
            <figure class="image">
              <img
                :src="`/img/jsProjectsGifs/${sketchData.img}`"
                alt="Sketch demonstration"
              />
            </figure>
          </div>
        </div>
        <div class="card-content">
          <div class="content">
            {{ sketchData.sketchDisplay.desc }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["prefix", "postfix", "sketchName", "sketchData"],
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  margin-bottom: 10px;
}

a.nostyle {
  text-decoration: none !important;
  cursor: inherit;
}

a {
  color: inherit;
}
</style>
