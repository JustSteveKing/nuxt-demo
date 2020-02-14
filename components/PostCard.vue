<template>
  <article class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
    <div class="bg-white rounded-lg overflow-hidden shadow relative">
      <img class="h-56 w-full object-cover object-center" :src="post.image" :alt="post.title">
      <header class="p-4 h-auto md:h-40 lg:h-48">
        <nuxt-link
          :to="`/posts/${post.id}`"
        >
          <h3 class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
            {{ post.title }}
          </h3>
        </nuxt-link>
      </header>
      <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
        {{ post.content }}
      </div>
    </div>
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