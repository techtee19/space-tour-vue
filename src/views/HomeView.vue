<template>
  <div class="container">
    <Navigation />
    <div class="content">
      <div class="text">
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a
          truly out of this world experience!
        </p>
      </div>
      <div class="button">
        <button @click="navigateToDestination">Explore</button>
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
  methods: {
    navigateToDestination() {
      this.$$router.push('/destination')
    },
  },
}
</script>

<style scoped>
.container {
  background: url('/src/assets/home/background-home-desktop.jpg') no-repeat center center/cover;
  height: auto;
  min-height: 100vh;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.4rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 96px); /* Adjust for header height */
}

.text {
  max-width: 50%;
}

.text h5 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #d0d6f9c4;
  margin-bottom: 10px;
}

.text h1 {
  font-size: 120px;
  font-family: 'Bellefair', serif;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.text p {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #d0d6f9;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button button {
  background: white;
  color: black;
  border: none;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  font-family: 'Bellefair', serif;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.button button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

/* Tablet (768px to 1050px) */
@media (max-width: 1050px) {
  .container {
    background: url('/src/assets/home/background-home-tablet.jpg') no-repeat center center/cover;
    min-height: 100vh;
    width: 100vw;
  }
  .content {
    flex-direction: column;
    text-align: center;
    padding: 4vw 2vw;
    width: 100vw;
    height: auto;
    margin-top: 60px;
  }
  .text {
    max-width: 90vw;
    margin-bottom: 4vw;
  }
  .text h5 {
    font-size: 3vw;
    letter-spacing: 0.4vw;
  }
  .text h1 {
    font-size: 10vw;
    margin-bottom: 2vw;
  }
  .text p {
    font-size: 2vw;
    line-height: 1.5;
  }
  .button button {
    width: 20vw;
    height: 20vw;
    font-size: 2vw;
    min-width: 90px;
    min-height: 90px;
  }
}

/* Mobile (375px and below) */
@media (max-width: 600px) {
  .container {
    background: url('/src/assets/home/background-home-mobile.jpg') no-repeat center center/cover;
    min-height: 100vh;
    width: 100vw;
  }
  .content {
    flex-direction: column;
    text-align: center;
    padding: 6vw 2vw;
    margin-top: 40px;
    width: 100vw;
  }

  .text {
    max-width: 100vw;
    margin-bottom: 6vw;
  }
  .text h5 {
    font-size: 4vw;
    letter-spacing: 0.5vw;
  }
  .text h1 {
    font-size: 12vw;
    margin-bottom: 3vw;
  }
  .text p {
    font-size: 3vw;
    line-height: 1.4;
  }
  .button button {
    width: 24vw;
    height: 24vw;
    font-size: 3vw;
    min-width: 60px;
    min-height: 60px;
  }
}

@media (max-width: 375px) {
  .container {
    background: url('/src/assets/home/background-home-mobile.jpg') no-repeat center center/cover;
    min-height: 100vh;
    width: 100vw;
  }
  .content {
    padding: 8vw 2vw;
    margin-top: 24px;
  }
  .text h5 {
    font-size: 5vw;
  }
  .text h1 {
    font-size: 14vw;
  }
  .button button {
    width: 28vw;
    height: 28vw;
    font-size: 4vw;
    min-width: 40px;
    min-height: 40px;
  }
}
</style>
