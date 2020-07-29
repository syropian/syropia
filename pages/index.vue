<template>
  <div>
    <section class="intro">
      <h2 class="text-3xl font-light text-gray-500">
        <span>Hey! I'm Collin Henderson —</span>
        <br />
        <span>I make fun & useful things on the web.</span>
      </h2>
      <p class="mt-10 text-lg font-medium leading-loose text-gray-700">
        I’m a senior front-end developer with a passion for building products
        and tools that solve real problems. I’m a firm believer in great UX,
        accessibility, and the open web. Currently pushing code at
        <a
          href="https://www.format.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="text-brand hover:text-red-700"
          >Format</a
        >
        — a beautiful platform for photographers to showcase their work, and
        grow their business. I live in lovely Collingwood, Ontario 🇨🇦 with my
        <a
          href="https://www.glovelylocks.ca"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="text-brand hover:text-red-700"
          >wife</a
        >
        and
        <a
          href="https://www.instagram.com/p/Bul7hjrHOEV/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="text-brand hover:text-red-700"
          >two cats</a
        >.
      </p>
    </section>
    <section class="mt-16 md:flex md:justify-between">
      <div class="projects">
        <h3 class="text-2xl font-light text-gray-500">Projects</h3>
        <ul class="mt-6 space-y-4">
          <li>
            <a
              class="text-brand hover:text-red-700"
              href="https://www.astralapp.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              >Astral &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">
              Organize your GitHub Stars with ease
            </p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              href="https://github.com/knotworks"
              target="_blank"
              rel="noopener noreferrer nofollow"
              >Knot &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">
              A decentralized server for building private social networks
            </p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              href="https://constantune.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              >Constantune &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">
              A simple, loopable SoundCloud playlist builder
            </p>
          </li>
        </ul>
      </div>
      <div class="mt-8 md:mt-0 social">
        <h3 class="text-2xl font-light text-gray-500">Social</h3>
        <ul class="mt-6 space-y-4">
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://github.com/syropian"
              >GitHub &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">Open source goodness</p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitter.com/syropian"
              >Twitter &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">Geeky ramblings and such</p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitch.com/syropian"
              >Twitch &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">Watch me code live</p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://instagram.com/syropian"
              >Instagram &rarr;</a
            >
            <p class="mt-2 text-sm text-gray-700">
              Pictures of sunsets and my cats
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
}
</script>
