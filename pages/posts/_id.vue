<template>
  <article>
    <header>
      <h2>{{ post.title }}</h2>
    </header>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Read more on: ${this.post.title}`
        }
      ]
    }
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('posts/fetchPost', params.id)
    } catch(e) {
      error({
        statusCode: 503,
        message: `Unable to fetch post with an ID of #${params.id}`
      })
    }
  },
  computed: mapState({
    post: state => state.posts.post
  })
}
</script>