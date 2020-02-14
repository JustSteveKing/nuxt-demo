<template>
  <article class="w-full mb-4 md:mb-0">
    <div class="bg-white rounded-lg overflow-hidden shadow relative">
      <img class="h-56 w-full object-cover object-center" :src="post.image" :alt="post.title">
      <div class="p-4 h-auto">
        <nuxt-link
          :to="`/posts/${post.id}`"
        >
          <h3 class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
            {{ post.title }}
          </h3>
        </nuxt-link>
        <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
          {{ post.content }}
        </div>
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