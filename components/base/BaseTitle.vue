<template>
  <div class="base-title__container center-text">
    <h1 class="base-title__title heading-tertiary uppercase">{{ title }}</h1>
    <span class="base-title__subtitle">{{ subtitle }}</span>
    <hr class="base-title__divider">
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  subtitle: String,
})
</script>

<style lang="scss" scoped>
@import "assets/scss/main";

.base-title {
  &__container {
    margin-bottom: 10rem;
  }
  &__subtitle {
    font-family: 'Roboto', sans-serif;
    color: $silver;
    font-size: 1.6rem;
    font-weight: 300;
  }
  &__divider {
    border: 0;
    border-top: 3px solid $primary;
    width: 10rem;
    margin: 3rem auto auto;
  }
}
</style>
