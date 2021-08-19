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
    const [article] = await $content('blog', { deep: true })
      .where({ dir: `/blog/${params.slug}` })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found', err })
      })
    return { article }
  },
  head() {
    return {
      title: `${this.article.title} | Syropia`,
      meta: [
        { name: 'description', content: this.article.description },
        { name: 'author', content: 'Collin Henderson' },
        { name: 'og:title', content: this.article.title },
        { name: 'og:description', content: this.article.description },
        { name: 'twitter:site', content: '@syropian' },
        { name: 'twitter:title', content: this.article.title },
        { name: 'twitter:description', content: this.article.description },
        {
          name: 'article:published_time',
          content: new Date(this.article.createdAt).toISOString(),
        },
      ],
      link: [
        { rel: 'canonical', href: `https://syropia.net${this.article.dir}` },
      ],
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
