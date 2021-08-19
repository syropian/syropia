<template>
  <div>
    <h1 class="text-3xl font-bold leading-normal text-brand">Blog</h1>
    <h2 class="text-3xl font-light leading-normal text-gray-500">
      Technical tidbits for everyday coders
    </h2>
    <ul class="mt-10 border-b border-gray-200 divide-y divide-gray-200">
      <li v-for="article in blog" :key="article.path" class="py-6">
        <a :href="articlePath(article)" class="group">
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
  async asyncData({ $content }) {
    const blog = await $content('blog', { deep: true })
      .where({ dir: { $containsNone: '/drafts' } })
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      blog,
    }
  },
  head() {
    return {
      title: 'Blog | Syropia',
      meta: [
        {
          name: 'description',
          content: 'Technical tidbits for everyday coders',
        },
        { name: 'og:title', content: 'Blog' },
        {
          name: 'og:description',
          content: 'Technical tidbits for everyday coders',
        },
        { name: 'twitter:site', content: '@syropian' },
        { name: 'twitter:title', content: 'Blog' },
        {
          name: 'twitter:description',
          content: 'Technical tidbits for everyday coders',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://syropia.net/blog' }],
    }
  },
  methods: {
    articlePath(article) {
      return article.path.replace('/index', '')
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
