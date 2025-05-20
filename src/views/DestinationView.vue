<template>
  <div class="destination-container">
    <Navigation />
    <main>
      <PageHeading number="01" title="Pick your destination" />
      <div class="dest-content" v-if="currentDestination">
        <div class="dest-cont">
          <div class="dest-img">
            <img :src="currentDestination.images.png" :alt="currentDestination.name" />
          </div>
          <div class="dest-txt-cont">
            <ul class="dest-list">
              <li v-for="dest in destinations" :key="dest.name">
                <a
                  class="dest-link"
                  :class="{ 'dest-link--active': currentDestination.name === dest.name }"
                  href="#"
                  @click.prevent="selectDestination(dest.name.toLowerCase())"
                >
                  {{ dest.name.toUpperCase() }}
                </a>
              </li>
            </ul>
            <h1 class="dest-head">{{ currentDestination.name.toUpperCase() }}</h1>
            <p class="dest-txt">
              {{ currentDestination.description }}
            </p>
            <div class="dest-line"></div>
            <div class="distance-cont">
              <p class="distance-txt">
                avg.distance <span>{{ currentDestination.distance }}</span>
              </p>
              <p class="distance-txt">
                est.travel time <span>{{ currentDestination.travel }}</span>
              </p>
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
import destinationData from '@/assets/data.json'

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

<style lang="scss" scoped></style>
