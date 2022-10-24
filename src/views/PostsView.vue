<template>
  <div class="home">
    <h1>Посты</h1>
    <p>Количество постов: {{ postsCount }}</p>
    <div class="post" v-for="post in allPosts" :key="post.id">
        <h2>{{post.id}}</h2>
        <p>{{post.title}}</p>
        <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'PostsView',
  components: {
  },
  /*
  data() {
      return {
          posts: [],
      }
  },
  */
  /*
  computed: {
    allPosts() {
      return this.$store.getters.allPosts
    }
  },
  */
  computed:
    mapGetters([
      'allPosts',
      'postsCount',
    ]),

  methods:
    mapActions([
      'fetchPosts'
    ]),
  /*
  async mounted() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const posts = await res.json()
    this.posts = posts
  },
  */
  async mounted() {
    //this.$store.dispatch('fetchPosts')
    this.fetchPosts()
    console.log('Posts загружен')
  },
}
</script>
  