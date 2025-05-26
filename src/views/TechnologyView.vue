<template>
  <div class="technology-bg min-vh-100">
    <Navigation />
    <main class="container-fluid pt-4 pt-md-5">
      <div class="container-lg">
        <PageHeading number="03" title="Space launch 101" />
      </div>

      <div class="mt-4 mt-md-5" v-if="currentTech">
        <div class="row g-0">
          <!-- Number Navigation (on left for desktop) -->
          <div class="col-12 col-lg-1 text-center text-lg-start mb-4 mb-lg-0 order-1">
            <div class="d-flex flex-row flex-lg-column justify-content-center mb-4 mb-lg-0">
              <button
                v-for="(tech, index) in technology"
                :key="tech.name"
                class="btn tech-number mb-0 mb-lg-4 me-3 me-lg-0"
                :class="{ active: currentTech.name === tech.name }"
                @click="selectTech(tech.name.toLowerCase())"
              >
                {{ index + 1 }}
              </button>
            </div>
          </div>

          <!-- Technology Info -->
          <div class="col-12 col-lg-6 px-4 order-3 order-lg-2">
            <h3 class="tech-subtitle text-uppercase mb-2">The terminology...</h3>
            <h1 class="tech-title text-uppercase mb-3">{{ currentTech.name }}</h1>
            <p class="tech-description mb-4">
              {{ currentTech.description }}
            </p>
          </div>

          <!-- Technology Image (on right for desktop, top for mobile) -->
          <div class="col-12 col-lg-5 order-2 order-lg-3 mb-4 mb-lg-0">
            <img
              :src="currentTech.images[imageType]"
              :alt="currentTech.name"
              class="tech-image img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import PageHeading from '@/components/PageHeading.vue'
import techData from '@/data/data.json'

export default {
  name: 'TechnologyView',
  components: {
    Navigation,
    PageHeading,
  },
  data() {
    return {
      technology: [],
      currentTech: null,
      windowWidth: window.innerWidth,
    }
  },
  methods: {
    selectTech(name) {
      this.currentTech = this.technology.find((tech) => tech.name.toLowerCase() === name)
    },
    handleResize() {
      this.windowWidth = window.innerWidth
    },
  },
  computed: {
    imageType() {
      return this.windowWidth >= 992 ? 'portrait' : 'landscape'
    },
  },
  created() {
    this.technology = techData.technology
    this.selectTech('launch vehicle')
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>
.technology-bg {
  background: url('/src/assets/technology/background-technology-desktop.jpg') no-repeat center
    center/cover;
  overflow-x: hidden;
}

.tech-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
}

.tech-number:hover {
  border-color: white;
}

.tech-number.active {
  background-color: white;
  color: #0b0d17;
  border-color: white;
}

.tech-subtitle {
  color: #d0d6f9;
  font-size: 1rem;
  letter-spacing: 2px;
}

.tech-title {
  font-size: 3.5rem;
  font-weight: 300;
  color: white;
}

.tech-description {
  color: #d0d6f9;
  line-height: 1.7;
  max-width: 450px;
}

/* Responsive styles */
@media (max-width: 992px) {
  .technology-bg {
    background-image: url('/src/assets/technology/background-technology-tablet.jpg');
  }

  .tech-title {
    font-size: 2.5rem;
  }

  .tech-number {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .technology-bg {
    background-image: url('/src/assets/technology/background-technology-mobile.jpg');
  }

  .tech-title {
    font-size: 2rem;
  }

  .tech-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>
