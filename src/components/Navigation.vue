<template>
  <div>
    <nav class="nav-bar">
      <div class="logo-hamburger">
        <div class="logo">
          <img src="/src/assets/shared/logo.svg" alt="logo" />
        </div>
        <button
          class="hamburger"
          aria-label="Open navigation menu"
          v-if="!isMobileNavOpen"
          @click="toggleMobileNav"
        >
          <img src="/src/assets/shared/icon-hamburger.svg" alt="menu" />
        </button>
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
            <span v-if="currentRoute === link.to" class="active-underline"></span>
          </router-link>
        </li>
      </ul>
      <div class="mobile-nav" :class="{ open: isMobileNavOpen }">
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
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  z-index: 10;
}

.logo-hamburger {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.logo {
  margin-left: 3rem;
  z-index: 2;
}
.logo img {
  width: 48px;
  height: 48px;
}

.line {
  flex: 1;
  height: 1px;
  background: #fff2;
  margin-left: 2.5rem;
  margin-right: -4rem;
  z-index: 1;
}

.nav-list {
  display: flex;
  gap: 3.5rem;
  list-style: none;
  background: rgba(54, 59, 82, 0.1);
  backdrop-filter: blur(24px);
  padding: 2rem 8rem 2rem 12rem;
  position: relative;
  z-index: -50;
}

.nav-links {
  position: relative;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.1rem;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  transition: color 0.2s;
}

.nav-links span:first-child {
  font-weight: bold;
  margin-right: 0.5rem;
  opacity: 0.7;
  letter-spacing: 1px;
}

.nav-links--active,
.nav-links:hover {
  color: #fff;

  border-radius: 2px;
  content: '';
  display: block;
}

.active-underline {
  position: absolute;
  left: 0;
  bottom: -2rem;
  width: 100%;
  height: 4px;
  background: #fff;
  border-radius: 2px;
  content: '';
  display: block;
}

@media (max-width: 1050px) {
  .nav-bar {
    padding-top: 0.8rem;
  }
  .logo-hamburger {
    width: 100%;
    justify-content: space-between;
    padding: 1.2rem 1.2rem 0 1.2rem;
    gap: 1.2rem;
  }
  .logo img {
    width: 40px;
    height: 40px;
  }
}

/* Hamburger and Mobile Nav (Hidden on Desktop) */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1200;
}
.hamburger img {
  width: 32px;
  height: 32px;
}

.mobile-nav {
  display: none;
}

@media (max-width: 600px) {
  .logo-hamburger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
  }
  .hamburger {
    display: block;
    position: static;
    margin: 0;
  }
  .logo {
    margin-left: 0;
  }
  .mobile-nav {
    display: block;
    position: fixed;
    top: 0;
    right: -100vw;
    width: 70vw;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(18, 22, 37, 0.95) 80%, rgba(18, 22, 37, 0.7) 100%);
    backdrop-filter: blur(32px);
    box-shadow: -8px 0 32px 0 rgba(0, 0, 0, 0.4);
    z-index: 1000;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
  }

  .nav-list,
  .line {
    display: none;
  }

  .mobile-nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    margin: 0;
    padding: 0 0 0 2.5rem;
    gap: 2.5rem;
  }
  .mobile-nav-list li {
    margin: 0;
  }
  .mobile-nav-list .nav-links {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 2.7px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.2rem 0;
  }
  .mobile-nav-list .nav-links span {
    font-weight: bold;
    margin-right: 1rem;
    font-size: 1.1rem;
    opacity: 0.7;
  }
  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 2.2rem;
    right: 2.2rem;
    z-index: 1100;
    font-size: 2.2rem;
    color: #fff;
  }
  .close-btn img {
    width: 32px;
    height: 32px;
  }
  .mobile-nav.open {
    right: 0;
  }
}

@media (max-width: 375px) {
  header {
    padding: 16px 24px;
  }

  .nav-bar {
    padding: 0;
  }

  .nav-list {
    display: none;
  }

  .line {
    display: none;
  }

  .logo img {
    margin-left: 0;
    width: 32px;
    height: 32px;
  }

  .line {
    display: none;
  }

  .hamburger {
    display: block;
    margin-right: 0;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 254px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    padding: 32px 28px;
    transition: right 0.3s ease;
    z-index: 1000;
    display: block; /* Ensure it can be toggled */
  }

  .mobile-nav.active {
    right: 0;
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 34px;
    right: 26px;
  }

  .close-btn img {
    width: 20px;
  }

  .mobile-nav-list {
    list-style: none;
    margin-top: 118px;
  }

  .mobile-nav-list li {
    margin-bottom: 32px;
  }

  .mobile-nav-list .nav-links {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    color: #d0d6f9;
    padding: 0;
    margin: 0;
    display: block;
  }

  .mobile-nav-list .nav-links span {
    font-weight: bold;
    margin-right: 11px;
  }

  .mobile-nav-list .nav-links:hover,
  .mobile-nav-list .nav-links--active {
    color: white;
    border-bottom: none;
  }
}
</style>
