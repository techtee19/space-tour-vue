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
.destination-container {
  background: url('/src/assets/destination/background-destination-desktop.jpg') no-repeat center
    center/cover;
  height: 100%;
  max-width: 130rem;
  padding: 0 1.2rem;
}

.dest-content {
  max-width: 120rem;
  padding: 0 7.2rem;
  /* margin: 0 15rem; */
  place-content: center;
}

.dest-cont {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  /* justify-items: center; */
  /* width: 80%; */
}

.dest-img img {
  width: 70%;
}

.dest-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin-bottom: 2rem;
}

.dest-link {
  color: #d0d6f9;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 2.7px;
  padding-bottom: 8px;
  transition: color 0.3s ease;
}

.dest-link:hover {
  color: white;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.dest-link--active {
  color: white;
  border-bottom: 3px solid white;
}

.dest-head {
  font-size: 6.4rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1.8rem;
}

.dest-txt-cont {
  align-items: left;
  width: 80%;
}

.dest-txt {
  font-size: 1.2rem;
  margin-bottom: 2.4rem;
  line-height: 2;
}

.dest-line {
  border: 0.1px solid #ffffff6f;
  margin-bottom: 2.4rem;
}

.distance-cont {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 4.6rem;
}

.distance-txt {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 100;
}

.distance-txt span {
  font-size: 2.4rem;
}

@media (max-width: 1050px) {
  .destination-container {
    background: url('/src/assets/destination/background-destination-tablet.jpg') no-repeat center
      center/cover;
    padding: 0 0.5rem;
    min-height: 100vh;
  }
  .dest-content {
    padding: 0 2vw;
    max-width: 100vw;
  }
  .dest-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vw;
  }
  .dest-img img {
    width: 45vw;
    max-width: 300px;
    margin: 0 auto 2vw auto;
    display: block;
  }
  .dest-txt-cont {
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  .dest-list {
    justify-content: center;
    gap: 1.5vw;
    margin-bottom: 2vw;
  }
  .dest-link {
    font-size: 2vw;
    padding-bottom: 0.5vw;
  }
  .dest-head {
    font-size: 6vw;
    margin-bottom: 1vw;
  }
  .dest-txt {
    font-size: 1.5vw;
    margin-bottom: 2vw;
    line-height: 1.7;
  }
  .dest-line {
    margin-bottom: 2vw;
  }
  .distance-cont {
    flex-direction: row;
    justify-content: center;
    gap: 6vw;
  }
  .distance-txt {
    font-size: 1.2vw;
  }
  .distance-txt span {
    font-size: 2.5vw;
  }
}
@media (max-width: 600px) {
  .destination-container {
    background: url('/src/assets/destination/background-destination-mobile.jpg') no-repeat center
      center/cover;
    padding: 0 0.2rem;
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .dest-content {
    padding: 0 1vw;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .dest-cont {
    flex-direction: column;
    align-items: center;
    gap: 4vw;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .dest-txt-cont {
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .dest-img img {
    width: 55vw;
    max-width: 160px;
    margin: 0 auto 4vw auto;
    display: block;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .dest-list {
    justify-content: center;
    gap: 6vw;
    margin-bottom: 4vw;
    font-size: 3.5vw;
    letter-spacing: 2px;
  }
  .dest-link {
    font-size: 4vw;
    padding-bottom: 1vw;
  }
  .dest-head {
    font-size: 9vw;
    margin-bottom: 2vw;
    letter-spacing: 1px;
  }
  .dest-txt {
    font-size: 3vw;
    margin-bottom: 4vw;
    line-height: 1.5;
    color: #d0d6f9;
    padding: 0 2vw;
  }
  .dest-line {
    border: 0.5px solid #ffffff3a;
    margin: 4vw 0;
    width: 100%;
  }
  .distance-cont {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8vw;
    width: 100%;
  }
  .distance-txt {
    font-size: 2.8vw;
    text-align: center;
    color: #d0d6f9;
  }
  .distance-txt span {
    font-size: 5vw;
    color: #fff;
    display: block;
    margin-top: 0.5vw;
  }
}
</style>
