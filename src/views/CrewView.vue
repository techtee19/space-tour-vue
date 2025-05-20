<template>
  <div class="crew-container">
    <Navigation />
    <main>
      <PageHeading :number="'02'" :title="'Meet our crew'" />
      <div class="crew-content" v-if="currentCrew">
        <div class="crew-cont">
          <div class="crew-text-cont">
            <h2 class="crew-role">{{ currentCrew.role }}</h2>
            <h1 class="crew-name">{{ currentCrew.name }}</h1>
            <p class="crew-text">
              {{ currentCrew.bio }}
            </p>
            <div class="dots">
              <a
                v-for="member in crew"
                :key="member.role"
                class="dots-dot"
                :class="{ 'dots__dot--active': currentCrew.role === member.role }"
                @click="selectCrew(member.role.toLowerCase())"
              ></a>
            </div>
          </div>
          <div class="crew-img">
            <img :src="currentCrew.images.png" :alt="currentCrew.name" />
          </div>
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
.crew-container {
  background: url('/src/assets/crew/background-crew-desktop.jpg') no-repeat center center/cover;
  height: 100%;
  max-width: 130rem;
  padding: 0 1.2rem;
}

.dots {
  display: flex;
  gap: 0.4rem;
}

.dots-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dots-dot.dots__dot--active {
  background-color: white;
}

.dots-dot:active {
  background-color: #fff;
}

.crew-content {
  max-width: 120rem;
  padding: 0 7.2rem;
  /* margin: 0 15rem; */
  place-content: center;
}

.crew-cont {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
}

.crew-img img {
  width: 60%;
}

.crew-role {
  font-size: 1.4rem;
  color: #edeaea53;
  margin-bottom: 1.8rem;
  font-weight: 100;
}

.crew-name {
  font-size: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 2.2rem;
  font-weight: 200;
  color: #fff;
}

.crew-text {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 10.2rem;
  color: #ffffff9e;
}

@media (max-width: 1050px) {
  .destination-container {
    height: auto;
    max-width: 130rem;
    padding: 0;
  }
  .line {
    width: 19rem;
    right: 37rem;
  }
}

@media (max-width: 768px) {
  .crew-container {
    background: url('/assets/crew/background-crew-tablet.jpg') no-repeat center center/cover;
    height: auto;
    /* padding: 0 40px; */
  }

  .crew-content {
    padding: 0 4rem;
  }

  .crew-cont {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
    padding-top: 60px;
  }

  .crew-text-cont {
    order: 1;
  }

  .crew-img {
    order: 0;
  }

  .crew-img img {
    width: 80%;
    max-width: 40rem;
  }

  .crew-role {
    font-size: 1.2rem;
  }

  .crew-name {
    font-size: 2rem;
  }

  .crew-text {
    font-size: 1.2rem;
    line-height: 1.4;
    margin-bottom: 4rem;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }

  .dots {
    justify-content: center;
    margin-bottom: 4rem;
  }

  .dots-dot {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
}

@media (max-width: 375px) {
  .crew-container {
    background: url('/assets/crew/background-crew-mobile.jpg') no-repeat center center/cover;
    padding: 0 24px;
  }

  .crew-content {
    padding: 0 2rem;
  }

  .crew-cont {
    gap: 2.6rem;
    padding-top: 32px;
  }

  .crew-img img {
    width: 100%;
    max-width: 30rem;
  }

  .crew-role {
    font-size: 1rem;
  }

  .crew-name {
    font-size: 1.6rem;
  }

  .crew-text {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 2rem;
    max-width: 32rem;
  }

  .dots {
    margin-bottom: 2rem;
  }

  .dots-dot {
    width: 6px;
    height: 6px;
    margin: 0 3px;
  }
}
</style>
