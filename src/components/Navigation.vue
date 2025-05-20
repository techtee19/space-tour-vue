<template>
  <div>
    <nav class="nav-bar">
      <div class="logo">
        <img src="/src/assets/shared/logo.svg" alt="" />
      </div>
      <div class="line"></div>
      <ul class="nav-list">
        <li v-for="(link, index) in navLinks" :key="index">
          <router-link
            :to="link.to"
            class="nav-links"
            :class="{ 'nav-links--active': currentRoute === link.to }"
          >
            <span>{{ link.number }}</span
            >{{ link.text }}
          </router-link>
        </li>
      </ul>
      <div class="mobile-nav">
        <button class="close-btn" aria-label="Toggle navigation menu" @click="toggleMobileNav">
          <img
            :src="
              isMobileNavOpen
                ? '/src/assets/shared/icon-close.svg'
                : '/src/assets/shared/icon-hamburger.svg'
            "
            alt="menu"
          />
        </button>
        <ul class="mobile-nav-list" v-if="isMobileNavOpen">
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link
              :to="link.to"
              class="nav-links"
              :class="{ 'nav-links--active': currentRoute === link.to }"
            >
              <span>{{ link.number }}</span
              >{{ link.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMobileNavOpen: false,
      navLinks: [
        { number: '00', text: 'Home', to: '/' },
        { number: '01', text: 'Destination', to: '/destination' },
        { number: '02', text: 'Crew', to: '/crew' },
        { number: '03', text: 'Technology', to: '/technology' },
      ],
    }
  },
  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen
    },
  },
  computed: {
    currentRoute() {
      return this.$route.path
    },
  },
}
</script>

<style scoped>
header {
  padding: 20px 40px;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 40px;
  height: 40px;
}

.line {
  position: absolute;
  border: 1px solid #f4f4f43c;
  width: 45rem;
  right: 37rem;
  z-index: 1;
}

.nav-list {
  position: relative;
  display: flex;
  list-style: none;
  gap: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.2rem 2.4rem;
  padding-left: 8.6rem;
}

.nav-links:link,
.nav-links:visited {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  color: #fff8f8;
  font-weight: 100;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
}

.nav-links:hover,
.nav-links:active {
  border-bottom: 2px solid #fff8f8;
  margin-top: 2rem;
}

.nav-links.nav-links--active {
  border-bottom: 2px solid #fff8f8;
  margin-top: 2rem;
}

.nav-links span {
  font-weight: 600;
  letter-spacing: none;
  padding-right: 0.6rem;
}

.nav-links li span {
  color: #888;
  margin-right: 5px;
}

.nav-links li:hover {
  color: #ccc;
}
</style>
