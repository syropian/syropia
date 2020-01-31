<template>
  <Layout>
    <div>
      <h1 class="text-3xl font-light text-gray-500">Articles</h1>
      <section class="mt-12">
        <ul v-if="false">
          <li
            v-for="article in $page.articles.edges"
            :key="article.node.id"
          >
            <a
              :href="article.node.path"
              class="text-2xl text-brand hover:text-red-700"
            >
              <h3>{{ article.node.title }} &rarr;</h3>
            </a>
            <small class="block mt-2 text-xs font-bold tracking-widest text-gray-700 uppercase">Posted On {{ article.node.date }} &bull; {{ article.node.timeToRead }} min read</small>
          </li>
        </ul>
        <p
          class="text-gray-700"
          v-else
        >
          One day I'll start writing more :)
        </p>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Articles"
  }
};
</script>

<page-query>
query {
  articles: allArticle {
    edges {
      node {
        id
        title
        timeToRead
        date (format: "MMMM Do, YYYY")
        path
      }
    }

  }
}
</page-query>