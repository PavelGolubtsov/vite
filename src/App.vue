<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavComponents from './components/NavComponents.vue';
</script>

<template>
  <header>
    <div>
      Корзина: {{ COUNT }}
    </div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Вы сделали это!!" msg2="НЕТ" />

      <NavComponents />
    </div>
  </header>

  <RouterView />
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:
    mapGetters([
      'COUNT',
    ]),
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
