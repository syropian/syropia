<template>
  <article class="mt-8 prose">
    <small
      class="block mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase"
      >{{ articleDate }}</small
    >
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const article = await $content('blog', params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found', err })
      })
    return { article }
  },
  head() {
    return {
      title: `${this.article.title} | Syropia`,
    }
  },
  computed: {
    articleDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.article.createdAt).toLocaleDateString('en', options)
    },
  },
}
</script>
