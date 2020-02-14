<template>
  <div>

    <post-card
      v-for="(post, index) in posts"
      :key="post.id"
      :post="post"
      :data-index="index"
    />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/PostCard'

export default {
  head() {
    return {
      title: 'Post Listing'
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/fetchPosts')
    } catch(e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at thie time, please try again.'
      })
    }
  },
  components: {
    PostCard
  },
  computed: mapState({
    posts: state => state.posts.posts
  })
}
</script>
