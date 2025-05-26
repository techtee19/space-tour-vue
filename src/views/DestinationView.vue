<template>
  <div class="destination-bg min-vh-100">
    <Navigation />
    <main class="container pt-5">
      <PageHeading number="01" title="Pick your destination" />

      <div class="row align-items-center justify-content-center mt-lg-5" v-if="currentDestination">
        <!-- Planet Image -->
        <div class="col-12 col-lg-6 text-center mb-4 mb-lg-0 pt-4">
          <img
            :src="currentDestination.images.png"
            :alt="currentDestination.name"
            class="destination-image img-fluid"
          />
        </div>

        <!-- Planet Info -->
        <div class="col-12 col-lg-6">
          <!-- Navigation Pills -->
          <ul class="destination-nav list-unstyled d-flex mb-4 mb-md-5">
            <li class="me-4" v-for="dest in destinations" :key="dest.name">
              <a
                class="destination-pill"
                :class="{ active: currentDestination.name === dest.name }"
                href="#"
                @click.prevent="selectDestination(dest.name.toLowerCase())"
              >
                {{ dest.name }}
              </a>
            </li>
          </ul>

          <!-- Destination Content -->
          <h1 class="destination-title mb-3">
            {{ currentDestination.name.toUpperCase() }}
          </h1>
          <p class="destination-description mb-5">
            {{ currentDestination.description }}
          </p>

          <hr class="destination-divider mb-4" />

          <!-- Distance & Travel Time -->
          <div class="d-flex flex-column flex-md-row">
            <div class="me-md-5 mb-4 mb-md-0">
              <p class="distance-label text-uppercase mb-2">Avg. Distance</p>
              <p class="distance-value mb-0">{{ currentDestination.distance }}</p>
            </div>
            <div>
              <p class="distance-label text-uppercase mb-2">Est. travel time</p>
              <p class="distance-value mb-0">{{ currentDestination.travel }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import PageHeading from '@/components/PageHeading.vue'
import destinationData from '@/data/data.json'

export default {
  name: 'DestinationView',
  components: {
    Navigation,
    PageHeading,
  },
  data() {
    return {
      destinations: [],
      currentDestination: null,
    }
  },
  created() {
    this.destinations = destinationData.destinations
    this.selectDestination('moon')
  },
  methods: {
    selectDestination(name) {
      this.currentDestination = this.destinations.find((dest) => dest.name.toLowerCase() === name)
    },
  },
}
</script>

<style scoped>
.destination-bg {
  background: url('/src/assets/destination/background-destination-desktop.jpg') no-repeat center
    center/cover;
  background-color: #0b0d17; /* Fallback color */
  overflow-x: hidden;
}

.destination-image {
  max-width: 445px;
  transition: transform 0.5s ease;
}

.destination-nav {
  margin-top: 10px;
}

.destination-pill {
  color: #d0d6f9;
  text-decoration: none;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-block;
}

.destination-pill:hover {
  border-bottom-color: rgba(255, 255, 255, 0.5);
  color: white;
}

.destination-pill.active {
  border-bottom-color: white;
  color: white;
}

.destination-title {
  font-family: 'Bellefair', serif;
  font-size: 100px;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  line-height: 1;
}

.destination-description {
  color: #d0d6f9;
  line-height: 32px;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  max-width: 445px;
  font-weight: 400;
}

.destination-divider {
  border-color: rgba(255, 255, 255, 0.2);
  margin-top: 0;
}

.distance-label {
  color: #d0d6f9;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.36px;
}

.distance-value {
  font-family: 'Bellefair', serif;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 400;
  color: white;
}

/* Responsive styles */
@media (max-width: 992px) {
  .destination-bg {
    background-image: url('/src/assets/destination/background-destination-tablet.jpg');
  }

  .destination-title {
    font-size: 80px;
    text-align: center;
  }

  .destination-description {
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
    line-height: 28px;
  }

  .destination-nav {
    justify-content: center;
  }

  .destination-divider {
    max-width: 75%;
    margin: 0 auto 28px;
  }

  .distance-label,
  .distance-value {
    text-align: center;
  }

  .d-flex.flex-column.flex-md-row {
    justify-content: center;
    gap: 20px;
  }

  .destination-image {
    max-width: 300px;
  }
}

@media (max-width: 576px) {
  .destination-bg {
    background-image: url('/src/assets/destination/background-destination-mobile.jpg');
  }

  .destination-title {
    font-size: 56px;
  }

  .destination-description {
    font-size: 15px;
    line-height: 25px;
    padding: 0 12px;
  }

  .destination-image {
    max-width: 170px;
  }

  .destination-pill {
    font-size: 14px;
    letter-spacing: 2.36px;
  }

  .destination-nav {
    gap: 10px;
    justify-content: center;
  }

  .me-4 {
    margin-right: 1rem !important;
  }

  .destination-divider {
    max-width: 100%;
  }
}
</style>
