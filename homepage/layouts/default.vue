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
            <b-navbar-item>
              <a href="https://github.com/micnekr" class="image">
                <img
                  src="~static/img/logo.png"
                  alt="Logo"
                  height="28"
                  class="is-rounded"
                />
              </a>
            </b-navbar-item>
            <b-navbar-item
              v-for="(item, index) in items"
              :key="index"
              tag="nuxt-link"
              :to="{ path: item.to }"
            >
              {{ item.title }}
            </b-navbar-item>
            <!-- <b-navbar-item tag="nuxt-link" to="/"> Home </b-navbar-item>
            <b-navbar-item tag="nuxt-link" to="/projects">
              Projects
            </b-navbar-item> -->
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

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Projects",
          to: "/projects",
        },
        {
          title: "Web Projects",
          to: "/jsProjects",
        },
      ],
    };
  },
};
</script>

<style scoped>
#mainNavbar {
  height: 4rem;
}
</style>
