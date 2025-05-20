<template>
  <div class="tech-container">
    <Navigation />
    <main>
      <PageHeading :number="'03'" title="Space launch 101" />
      <div class="tech-content" v-if="currentTech">
        <div class="tech-tabs">
          <a
            v-for="(tech, index) in technology"
            :key="tech.name"
            class="tech-tab"
            :class="{ 'tech-tab--active': currentTech.name === tech.name }"
            @click="selectTech(tech.name.toLowerCase())"
            >{{ index + 1 }}</a
          >
        </div>
        <div class="tech-text-cont">
          <h3 class="tech-subheading">The Terminology...</h3>
          <h1 class="tech-title">{{ currentTech.name }}</h1>
          <p class="tech-description">{{ currentTech.description }}</p>
        </div>
        <div class="tech-img">
          <img :src="currentTech.images[imageType]" :alt="currentTech.name" />
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
      return this.windowWidth >= 768 ? 'portrait' : 'landscape'
    },
  },
  created() {
    this.technology = techData.technology
    this.selectTech('launch Vehicle')
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>
/* Base Styles (Desktop) */
.tech-container {
  background: url('/src/assets/technology/background-technology-desktop.jpg') no-repeat center
    center/cover;
  height: auto;
  min-height: 100vh;

  max-width: 130rem;
  padding: 0 1.2rem;
}

.headings {
  font-weight: 200;
}

.tech-content {
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 100rem;
}

.tech-tabs {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-left: 5.6rem;
}

.tech-tab {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.tech-tab:hover {
  border-color: white;
}

.tech-tab--active {
  background-color: white;
  color: #0b0d17;
  border-color: white;
}

.tech-text-cont {
  flex: 1;
}

.tech-subheading {
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  font-weight: 200;
  color: #d0d6f9;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.tech-title {
  font-size: 3.6rem;
  color: white;
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
}

.tech-description {
  font-size: 1.3rem;
  line-height: 1.5;
  color: #d0d6f9;
  max-width: 35rem;
}

.tech-img img {
  width: 32rem;
  height: auto;
}

@media (max-width: 1050px) {
  body {
    font-size: 55%;
  }
  .line {
    width: 19rem;
    right: 37rem;
  }

  .tech-subheading {
    font-size: 1.4rem;
  }
  /*  */

  .tech-title {
    font-size: 2.4rem;
  }

  .tech-description {
    font-size: 1.2rem;
  }
  .tech-tab--active {
    background-color: white;
    color: #0b0d17;
    border-color: white;
  }
  .tech-tab {
    width: 4rem;
    height: 4rem;
  }

  .tech-tab--active {
    background-color: white;
    color: #0b0d17;
    border-color: white;
  }

  .tech-img img {
    width: 25rem;
    height: auto;
  }

  .tech-container {
    background: url('/src/assets/technology/background-technology-desktop.jpg') no-repeat center
      center/cover;
    height: auto;
    /* padding: 0 165px; Matches your previous design */
  }
}

@media (max-width: 965px) {
  .line {
    position: absolute;
    border: 1px solid #f4f4f43c;
    width: 15rem;
    right: 37rem;
    z-index: 1;
  }

  .tech-container {
    background: url('/src/assets/technology/background-technology-tablet.jpg') no-repeat center
      center/cover;
    height: auto;
    /* padding: 0 40px; */
  }

  .tech-content {
    flex-direction: column;
    text-align: center;
    gap: 4rem;
    padding: 60px 0;
  }

  .tech-tabs {
    flex-direction: row;
    justify-content: center;
    margin-left: 0;
    gap: 2rem;
  }

  .tech-tab {
    width: 4rem;
    height: 4rem;
    font-size: 1.6rem;
  }

  .tech-subheading {
    font-size: 1.4rem;
    letter-spacing: 0.15rem;
  }

  .tech-title {
    font-size: 2.8rem;
  }

  .tech-description {
    font-size: 1.2rem;
    line-height: 1.4;
    max-width: 45rem;
    margin: 0 auto;
  }

  .tech-img img {
    width: 100%;
    max-width: 45rem;
    order: -1; /* Move image above tabs and text */
  }
}

/* Tablet (768px and below) */
@media (max-width: 768px) {
  body {
    font-size: 50%;
  }

  .tech-container {
    background: url('/src/assets/technology/background-technology-tablet.jpg') no-repeat center
      center/cover;
    height: auto; /* Allow content to dictate height */
    padding: 0 40px;
  }

  .tech-content {
    flex-direction: column;
    text-align: center;
    gap: 4rem;
    padding: 60px 0;
  }

  .tech-tabs {
    flex-direction: row;
    justify-content: center;
    margin-left: 0;
    gap: 2rem;
  }

  .tech-tab {
    width: 4rem;
    height: 4rem;
    font-size: 1.6rem;
  }

  .tech-subheading {
    font-size: 1.4rem;
    letter-spacing: 0.15rem;
  }

  .tech-title {
    font-size: 2.8rem;
  }

  .tech-description {
    font-size: 1.2rem;
    line-height: 1.4;
    max-width: 45rem;
    margin: 0 auto;
  }

  .tech-img img {
    width: 100%;
    max-width: 45rem;
    order: -1; /* Move image above tabs and text */
  }
}

/* Mobile (375px and below) */
@media (max-width: 375px) {
  .tech-container {
    background: url('/src/assets/technology/background-technology-mobile.jpg') no-repeat center
      center/cover;
    padding: 0 24px;
  }

  .tech-content {
    gap: 2.6rem;
    padding: 32px 0;
  }

  .tech-tabs {
    gap: 1.6rem;
  }

  .tech-tab {
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
  }

  .tech-subheading {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .tech-title {
    font-size: 2rem;
  }

  .tech-description {
    font-size: 1rem;
    line-height: 1.3;
    max-width: 32rem;
  }

  .tech-img img {
    max-width: 100%;
    /* Use landscape image for mobile */
    content: url('/assets/technology/image-launch-vehicle-portrait.jpg');
  }

  /* Adjust landscape image for other tabs */
  .tech-img img[src$='image-spaceport-portrait.jpg'] {
    content: url('/assets/technology/image-spaceport-portrait.jpg');
  }

  .tech-img img[src$='image-space-capsule-portrait.jpg'] {
    content: url('/assets/technology/image-space-capsule-landscape.jpg');
  }
}
</style>
