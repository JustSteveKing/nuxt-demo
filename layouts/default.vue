<template>
  <div>
    <main class="w-full max-w-screen-xl mx-auto px-6">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "text-gray-900 leading-normal"
      }
    }
  }
}
</script>