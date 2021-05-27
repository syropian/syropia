<template>
  <div>
    <h1 class="text-3xl font-bold leading-normal text-brand">Blog</h1>
    <h2 class="text-3xl font-light leading-normal text-gray-500">
      Technical tidbits for everyday coders
    </h2>
    <ul class="pb-6 mt-10 border-b border-gray-200">
      <li v-for="article in blog" :key="article.path">
        <a :href="article.path" class="group">
          <small
            class="block mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase"
            >{{ formatDate(article.createdAt) }}</small
          >
          <h3 class="text-2xl font-bold group-hover:text-brand">
            {{ article.title }}
          </h3>
          <p class="mt-4 leading-normal text-gray-600">
            {{ article.description }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const blog = await $content('blog', { deep: true }).fetch()
    return {
      blog,
    }
  },
  head() {
    return {
      title: 'Blog | Syropia',
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
