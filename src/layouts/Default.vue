<template>
  <div class="layout">
    <nav class="navbar" role="navigation" aria-label="primary navigation">
      <div class="container">
        <div class="navbar-brand">
          <Logo v-if="showLogo" />
          <a
            role="button"
            class="navbar-burger burger"
            :class="{ 'is-active': showNav }"
            aria-label="menu"
            aria-expanded="false"
            @click="showNav = !showNav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <g-link class="navbar-item" to="/about">
              About
            </g-link>
            <a class="navbar-item" href="https://github.com/mdob2k">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main class="section">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <div class="copyright">
            Copyright © {{ new Date().getFullYear() }}
          </div>
          <div class="social-links">
            <a href="https://github.com/mdob2k">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '@/components/Logo.vue'
export default {
  components: { Logo },
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    showNav: false
  })
}
</script>

<style lang="scss">
.social-links {
  a {
    margin: 0 0.5rem;
  }
}
</style>
