<template>
  <div class="container">
    <Navigation />
    <div class="content">
      <div class="text">
        <h2>So, you want to travel to Space</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>
      <div class="button">
        <button>Explore</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'HomeView',
  components: {
    Navigation,
  },
}
</script>

<style scoped>
.container {
  background: url('/src/assets/home/background-home-desktop.jpg') no-repeat center center/cover;
  height: 100%;
}
</style>
