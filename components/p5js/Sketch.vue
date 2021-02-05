<template>
  <section>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ sketchDisplay.title }}</p>
      </header>
      <div class="card-sketch">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Sketch demonstration"
            />
          </figure>
        </div>
      </div>
      <div class="card-content">
        <div class="content">
          {{ sketchDisplay.desc }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["prefix", "postfix", "sketchName", "sketchDisplay"],
};
</script>

<style scoped>
.card{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
