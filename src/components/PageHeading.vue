<template>
  <h2 class="heading text-white">
    <span class="heading-number me-2">{{ number }}</span>{{ title }}
  </h2>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    number: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.heading {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
}

.heading-number {
  font-weight: 700;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .heading {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .heading {
    font-size: 1rem;
    text-align: center;
  }
}
</style>
