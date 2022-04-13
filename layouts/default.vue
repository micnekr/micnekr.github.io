<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <b-navbar id="mainNavbar" type="is-primary">
          <template #brand>
            <b-navbar-item
              tag="router-link"
              :to="{ path: '/profile' }"
              class="image"
            >
            </b-navbar-item>
          </template>
          <template #start>
            <b-navbar-item
              v-for="(item, index) in items"
              :key="index"
              tag="nuxt-link"
              :to="{ path: item.to }"
            >
              {{ item.title }}
            </b-navbar-item>
          </template>
        </b-navbar>
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
          title: "Profile",
          to: "/profile",
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
  methods: {
    redirect(link) {
      window.location.href = link;
    },
  },
};
</script>

<style scoped>
#mainNavbar {
  height: 4rem;
}
/*
div.brand-text{
  color: #abea7c;
  font-size: 16px;
} */
</style>
