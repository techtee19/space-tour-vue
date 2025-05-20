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
            <router-link>
              <router-link/>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
