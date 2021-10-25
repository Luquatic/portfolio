<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__text-container">
        <h1 class="hero__title">Hallo, ik ben Jessey Fransen</h1>
        <h4 class="hero__subtitle">Front-end Developer</h4>
        <img src="" alt="" class="hero__image" />
      </div>
      <div class="hero__bg-video">
        <video class="hero__video" autoplay muted loop>
          <source src="@/assets/videos/aerial-mountains.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </div>
    <div class="hero__picture-container">
      <img class="hero__picture" src="@/assets/images/jessey.jpg" alt="image__jessey" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/main";

.hero {
  margin-bottom: 20vh;

  &__container {
    z-index: -10;
    height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__text-container {
    position: absolute;
    align-self: center;
    text-align: center;

    & h4 {
      font-family: 'Roboto', sans-serif;
    }
  }

  &__title {
    text-transform: uppercase;
    color: $white;
    font-size: 3.5rem;
    font-weight: 700 !important;
  }

  &__subtitle {
    color: $white;
    font-size: 3rem;
    font-weight: 100;
  }

  &__bg-video {
    position: absolute;
    top: -6rem;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.4;
    overflow: hidden;
  }

  &__video {
    object-fit: cover;
    height: inherit;
    width: inherit;
  }

  &__picture {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    border: solid 0.5rem $white;

    &-container {
      display: flex;
      justify-content: center;
      margin-top: -17rem;
    }
  }
}
</style>
