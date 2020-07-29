<template>
  <div class="prose">
    <h1>Blog</h1>
    <ul>
      <li v-for="page in pages" :key="page.path">
        <a :href="page.path">{{ page.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const pages = await $content('blog', { deep: true }).fetch()
    return {
      pages,
    }
  },
}
</script>
