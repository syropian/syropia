<template>
  <div class="prose">
    <h1>{{ page.title }}</h1>
    <small
      class="block mt-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
      >Updated: {{ page.lastUpdated }}</small
    >
    <p>
      This is where I'll try and keep an updated summary of the hardware,
      software, and tooling I use for web development and streaming. Inspired by
      <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer"
        >Uses.tech</a
      >.
    </p>
    <article class="mt-8">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('uses').fetch()

    return {
      page,
    }
  },
}
</script>

<style lang="scss">
// .nuxt-content {
//   @apply text-gray-700;

//   h2 {
//     @apply text-2xl mb-6 font-medium;
//   }

//   ul {
//     @apply mb-12 list-disc ml-8;

//     li {
//       @apply mt-2;

//       a {
//         @apply border-b-2 border-gray-300 text-gray-600;

//         &:hover {
//           @apply border-red-300 text-brand;
//         }
//       }
//     }
//   }
// }
</style>
