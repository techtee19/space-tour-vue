<template>
  <div class="home-bg min-vh-100 d-flex flex-column">
    <Navigation />
    <main class="container flex-grow-1 d-flex align-items-center">
      <div class="row w-100 align-items-center">
        <!-- Text Content -->
        <div class="col-lg-6 text-lg-start mb-5 mb-lg-0 ps-lg-5">
          <h5 class="home-subtitle text-uppercase">So, you want to travel to</h5>
          <h1 class="home-title text-uppercase">Space</h1>
          <p class="home-description">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </p>
        </div>

        <!-- Explore Button -->
        <div
          class="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center"
        >
          <button
            class="explore-btn rounded-circle bg-white border-0 text-dark text-uppercase d-flex align-items-center justify-content-center"
            @click="navigateToDestination"
            aria-label="Explore destinations"
          >
            Explore
          </button>
        </div>
      </div>
    </main>
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
      this.$router.push('/destination')
    },
  },
}
</script>

<style scoped>
.home-bg {
  background: url('/src/assets/home/background-home-desktop.jpg') no-repeat center center/cover;
  background-color: #0b0d17; /* Fallback color */
  overflow: hidden;
}

.home-subtitle {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  letter-spacing: 4.75px;
  color: #d0d6f9;
  font-weight: 400;
  margin-bottom: 24px;
}

.home-title {
  font-family: 'Bellefair', serif;
  font-size: 150px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 24px;
  color: #ffffff;
}

.home-description {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  max-width: 450px;
  font-weight: 400;
}

.explore-btn {
  width: 274px;
  height: 274px;
  font-family: 'Bellefair', serif;
  font-size: 32px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  color: #0b0d17;
}

.explore-btn:hover::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: -1;
  transition: all 0.3s ease;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    width: 274px;
    height: 274px;
    opacity: 1;
  }
  100% {
    width: 450px;
    height: 450px;
    opacity: 0;
  }
}

/* Tablet styles */
@media (max-width: 992px) {
  .home-bg {
    background-image: url('/src/assets/home/background-home-tablet.jpg');
  }

  .home-subtitle {
    font-size: 20px;
    text-align: center;
  }

  .home-title {
    font-size: 100px;
    text-align: center;
  }

  .home-description {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    margin: 0 auto;
    padding: 0 24px;
  }

  .explore-btn {
    width: 242px;
    height: 242px;
    font-size: 28px;
    margin-top: 80px;
  }
}

/* Mobile styles */
@media (max-width: 576px) {
  .home-bg {
    background-image: url('/src/assets/home/background-home-mobile.jpg');
  }

  .home-subtitle {
    font-size: 16px;
    letter-spacing: 2.7px;
  }

  .home-title {
    font-size: 80px;
  }

  .home-description {
    font-size: 15px;
    line-height: 25px;
  }

  .explore-btn {
    width: 150px;
    height: 150px;
    font-size: 20px;
    margin-top: 40px;
  }

  .explore-btn:hover::after {
    width: 250px;
    height: 250px;
  }

  @keyframes pulse {
    0% {
      width: 150px;
      height: 150px;
      opacity: 1;
    }
    100% {
      width: 250px;
      height: 250px;
      opacity: 0;
    }
  }
}
</style>
