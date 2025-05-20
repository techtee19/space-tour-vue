<template>
  <h2 class="headings">
    <span>{{ number }}</span
    >{{ title }}
  </h2>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
    required: true,
  },
}
</script>

<style scoped>
.headings {
  margin-bottom: 5.6rem;
  font-size: 1.2rem;
  padding: 0 9.6rem;
  text-transform: uppercase;
}

.headings span {
  font-weight: 100;
  margin-right: 1rem;
  color: #cccccc59;
}
</style>
