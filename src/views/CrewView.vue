<template>
  <div class="crew-bg min-vh-100">
    <Navigation />
    <main class="container pt-5">
      <PageHeading number="02" title="Meet your crew" />

      <div class="row mt-lg-5" v-if="currentCrew">
        <!-- Crew Info -->
        <div class="col-lg-6 pe-lg-0 order-2 order-lg-1 crew-content">
          <h2 class="crew-role text-uppercase mb-2">{{ currentCrew.role }}</h2>
          <h1 class="crew-name text-uppercase mb-3">{{ currentCrew.name }}</h1>
          <p class="crew-bio mb-5 pe-lg-5">
            {{ currentCrew.bio }}
          </p>

          <!-- Dot Navigation -->
          <div class="crew-dots mb-5 mb-lg-0">
            <button
              v-for="member in crew"
              :key="member.role"
              class="crew-dot me-3"
              :class="{ active: currentCrew.role === member.role }"
              @click="selectCrew(member.role.toLowerCase())"
              aria-label="Select crew member"
            ></button>
          </div>
        </div>

        <!-- Crew Image -->
        <div class="col-lg-6 text-end crew-image-container order-1 order-lg-2">
          <img :src="currentCrew.images.png" :alt="currentCrew.name" class="crew-image img-fluid" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import PageHeading from '@/components/PageHeading.vue'
import CrewData from '@/data/data.json'

export default {
  name: 'CrewView',
  components: {
    Navigation,
    PageHeading,
  },
  data() {
    return {
      crew: [],
      currentCrew: null,
    }
  },
  created() {
    this.crew = CrewData.crew
    this.selectCrew('commander')
  },
  methods: {
    selectCrew(role) {
      this.currentCrew = this.crew.find((member) => member.role.toLowerCase() === role)
    },
  },
}
</script>

<style scoped>
.crew-bg {
  background: url('/src/assets/crew/background-crew-desktop.jpg') no-repeat center center/cover;
  background-color: #0b0d17;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

.crew-content {
  padding-top: 8.5rem;
}

.crew-role {
  font-family: 'Bellefair', serif;
  font-size: 32px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.crew-name {
  font-family: 'Bellefair', serif;
  font-size: 56px;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
}

.crew-bio {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  max-width: 444px;
  font-weight: 400;
}

.crew-dots {
  display: flex;
}

.crew-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.17);
  border: none;
  padding: 0;
  transition: background-color 0.3s ease;
}

.crew-dot:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.crew-dot.active {
  background-color: white;
}

.crew-image-container {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.crew-image {
  max-height: 70vh;
  position: relative;
  margin-right: 5%;
}

/* Tablet styles */
@media (max-width: 991px) {
  .crew-bg {
    background-image: url('/src/assets/crew/background-crew-tablet.jpg');
  }

  .crew-content {
    padding-top: 0;
    text-align: center;
    order: 2;
  }

  .crew-role {
    font-size: 24px;
  }

  .crew-name {
    font-size: 40px;
  }

  .crew-bio {
    font-size: 16px;
    line-height: 28px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .crew-dots {
    justify-content: center;
    margin-top: 2rem;
  }

  .crew-image-container {
    justify-content: center;
    height: auto;
    overflow: hidden;
  }

  .crew-image {
    max-height: 50vh;
    position: relative;
    margin: 0 auto;
  }
}

/* Mobile styles */
@media (max-width: 576px) {
  .crew-bg {
    background-image: url('/src/assets/crew/background-crew-mobile.jpg');
  }

  .crew-role {
    font-size: 16px;
  }

  .crew-name {
    font-size: 24px;
  }

  .crew-bio {
    font-size: 15px;
    line-height: 25px;
  }

  .crew-image-container {
    padding: 0 24px;
    width: 100%;
  }

  .crew-image {
    max-height: 40vh;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .crew-dots {
    order: 2;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .crew-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
