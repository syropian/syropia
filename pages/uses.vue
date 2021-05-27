<template>
  <div>
    <h1 class="text-3xl font-bold leading-normal text-brand">
      {{ page.title }}
    </h1>
    <h2 class="text-3xl font-light leading-normal text-gray-500">
      Gear &amp; Software
    </h2>
    <small
      class="block mt-4 text-xs font-bold tracking-widest text-gray-500 uppercase"
      >Updated: {{ page.lastUpdated }}</small
    >
    <div class="mt-6 prose">
      <p>
        This is where I'll try and keep an updated summary of the hardware,
        software, and tooling I use for web development and streaming. Inspired
        by
        <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer"
          >Uses.tech</a
        >.
      </p>
      <article class="mt-8">
        <nuxt-content :document="page" />
      </article>
    </div>
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
  head() {
    return {
      title: 'Uses | Syropia',
    }
  },
}
</script>
