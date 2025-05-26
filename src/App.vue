<template>
  <router-view />
</template>

<script>
export default {}
</script>

<style>
@import './assets/main.css';
/* You can add Bootstrap customizations here */
:root {
  /* Space tourism colors */
  --primary-dark: #0B0D17;
  --primary-accent: #D0D6F9;
  --primary-light: #FFFFFF;
}

body {
  font-family: 'Barlow Condensed', sans-serif;
  overflow-x: hidden;
  background-color: var(--primary-dark);
  color: var(--primary-light);
}
</style>
