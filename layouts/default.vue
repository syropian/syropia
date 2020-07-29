<template>
  <div class="max-w-2xl px-8 mx-auto mt-12 md:px-0 layout">
    <header class="flex items-center justify-between">
      <nuxt-link class="nav__link" to="/">
        <img alt="Syropia" src="~/assets/images/logo.svg" width="180" />
      </nuxt-link>
      <nav>
        <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
        <nuxt-link to="/uses" class="nav-link">Uses</nuxt-link>
        <a href="mailto:collin@syropia.net" class="nav-link">Contact</a>
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
.nav-link {
  @apply relative ml-8 text-brand font-bold text-sm tracking-widest uppercase;
}

.simple-link {
  @apply text-brand;
}

.simple-link:hover {
  @apply text-red-700;
}

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
