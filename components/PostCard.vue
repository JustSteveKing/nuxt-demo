<template>
  <article>
    <header>
      <nuxt-link
        :to="`/posts/${post.id}`"
      >
        <h3>{{ post.title }}</h3>
      </nuxt-link>
    </header>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>