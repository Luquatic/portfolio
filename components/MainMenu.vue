<template>
  <header class="main-menu-header" role="banner">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="col-6 main-menu">

<!--        <nuxt-link to="/" class="main-menu__logo main-menu__item">-->
<!--          <img src="@/assets/images/logo.png" alt="Logo" class="main-menu__logo-img"/>-->
<!--          <p class="main-menu__text nav-link">Jessey Fransen</p>-->
<!--        </nuxt-link>-->

<!--        <ul class="navbar-nav main-menu__list">-->
<!--          <li v-for="item in mainMenuItems" class="main-menu__text nav-link">-->
<!--            <nuxt-link :to="`/${item.toLowerCase()}`">{{ item }}</nuxt-link>-->
<!--          </li>-->
<!--        </ul>-->

      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const mainMenuItems = ['Ik', 'CV', 'Certificaten', 'Vaardigheden', 'Projecten'] as String[];
</script>

<style lang="scss">
@import "assets/scss/main";

.main-menu.header {
  text-transform: uppercase;
  position: fixed;
  width: 100%;
}

.main-menu {
  display: flex;
  justify-content: space-between;

  &__logo {
    display: flex;
    text-decoration: none;

    &-img {
      width: 5rem;
      height: auto;
      padding-right: 1rem;
    }
  }

  &__text {
    text-decoration: none;
    & a {
      text-decoration: none;
      color: $white !important;

      &:hover {
        color: $primary !important;
      }
    }
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &__list {
    align-items: center;
  }
}

.navbar {
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;

  &-nav {
    text-decoration: none;
    font-size: $default-font-size;
  }
}

.nav-link {
  color: $white;
}
</style>
