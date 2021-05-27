<template>
  <div class="max-w-2xl px-8 mx-auto mt-12 md:px-0 layout">
    <header class="flex flex-col items-center sm:justify-between sm:flex-row">
      <nuxt-link to="/">
        <img alt="Syropia" src="~/assets/img/logo.svg" width="180" />
      </nuxt-link>
      <nav class="mt-8 space-x-8 sm:mt-0">
        <nuxt-link
          to="/blog"
          class="relative text-sm font-bold tracking-widest uppercase nav-link text-brand"
          >Blog</nuxt-link
        >
        <nuxt-link
          to="/uses"
          class="relative text-sm font-bold tracking-widest uppercase nav-link text-brand"
          >Uses</nuxt-link
        >
        <a
          href="mailto:collin@syropia.net"
          class="relative text-sm font-bold tracking-widest uppercase nav-link text-brand"
          >Contact</a
        >
      </nav>
    </header>
    <main class="mt-16 sm:mt-32">
      <Nuxt />
    </main>

    <footer class="my-10">
      <p class="text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} Collin Henderson. Don't steal my
        stuff pls.
      </p>
    </footer>
  </div>
</template>

<style>
.nav-link:after {
  @apply bg-brand;

  transition: transform 150ms ease;
  transform: scaleX(0);
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
}
.nav-link:hover:after {
  transform: scaleX(1);
}
</style>
