<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <b-navbar id="mainNavbar" type="is-primary">
          <template #start>
            <b-navbar-item tag="nuxt-link" to="/">
              <img
                src="~assets/person-placeholder.jpg"
                alt="Buefy"
                height="28"
              />
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" to="/"> Home </b-navbar-item>
            <b-navbar-item tag="nuxt-link" to="/projects">
              Projects
            </b-navbar-item>
          </template>
        </b-navbar>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside> -->

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<style scoped>
#mainNavbar {
  height: 4rem;
}
</style>

<script>
export default {
  // data() {
  //   return {
  //     items: [
  //       {
  //         title: "Home",
  //         icon: "home",
  //         to: { name: "index" },
  //       },
  //       {
  //         title: "Projects",
  //         icon: "lightbulb",
  //         to: { name: "projects" },
  //       },
  //     ],
  //   };
  // },
};
</script>
