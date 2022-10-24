<template>
  <div class="about">
    <h1 @click="show">Это views AboutView</h1>
    <AboutComponents v-bind:peopls="peopls" />
  </div>
</template>

<script>
import AboutComponents from '../components/AboutComponents.vue';
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'AboutView',
  components: {
    AboutComponents,
  },
  data() {
    return {
      peopls: ['Ivan', 'Petr', 'Sergey'],
    }
  },
  computed:
    mapGetters([
      //'allName',

    ]),
  methods: {
    show() {
      console.log(this.peopls)
    }
  }
}
</script>