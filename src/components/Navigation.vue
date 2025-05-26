<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand" href="/">
          <img src="/src/assets/shared/logo.svg" alt="logo" width="48" height="48" />
        </a>

        <!-- Line (custom element) -->
        <div class="navigation-line d-none d-lg-block"></div>

        <!-- Mobile toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation links -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
              <router-link
                class="nav-link px-3 py-2"
                :class="{ active: currentRoute === link.to }"
                :to="link.to"
              >
                <span class="nav-number me-2">{{ link.number }}</span
                >{{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      navLinks: [
        { number: '00', text: 'Home', to: '/' },
        { number: '01', text: 'Destination', to: '/destination' },
        { number: '02', text: 'Crew', to: '/crew' },
        { number: '03', text: 'Technology', to: '/technology' },
      ],
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path
    },
  },
}
</script>

<style scoped>
.navbar {
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40px);
}

.navigation-line {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.25);
  flex-grow: 1;
  margin: 0 2rem 0 4rem;
  position: relative;
  z-index: 3;
}

.nav-number {
  font-weight: 700;
}

/* Custom active state */
.nav-link.active {
  position: relative;
}

.nav-link.active:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: white;
}

/* Add responsive styles as needed */
@media (max-width: 992px) {
  .navbar-collapse {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    padding: 1rem;
  }
}
</style>
