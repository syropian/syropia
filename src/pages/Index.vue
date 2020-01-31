<template>
  <Layout>
    <div>
      <section class="intro">
        <h2 class="text-3xl font-light text-gray-500">
          <span>Hey! I'm Collin Henderson —</span>
          <br />
          <span>I make fun & useful things on the web.</span>
        </h2>
        <p class="mt-10 text-lg font-medium leading-loose text-gray-700">
          I’m passionate about building tools with a delightful user experience, that solve real problems. Currently rocking front-end at <a
            href="https://www.format.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="text-brand hover:text-red-700"
          >Format</a> — a beautiful platform for photographers to showcase their work, and grow their business. I live in the west end of Toronto, Canada with my wife, and our two cats — <a
            href="https://www.instagram.com/p/Bul7hjrHOEV/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="text-brand hover:text-red-700"
          >Zooey & Benny</a>. I probably know more about Harry Potter than you.
        </p>
      </section>
      <section class="mt-16 md:flex md:justify-between">
        <div class="projects">
          <h3 class="text-2xl font-light text-gray-500">Projects</h3>
          <ul class="mt-6">
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                href="https://www.astralapp.com"
              >Astral &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">Organize your GitHub Stars with ease</p>
            </li>
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                href="https://constantune.com/"
              >Constantune &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">A simple, loopable SoundCloud playlist builder</p>
            </li>
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                href="https://github.com/knotworks"
              >Knot &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">A decentralized server for building private social networks</p>
            </li>
          </ul>
        </div>
        <div class="mt-8 md:mt-0 social">
          <h3 class="text-2xl font-light text-gray-500">Social</h3>
          <ul class="mt-6">
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://github.com/syropian"
              >GitHub &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">Open source goodness</p>
            </li>
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://twitter.com/syropian"
              >Twitter &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">Geeky ramblings and such</p>
            </li>
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://twitch.com/syropian"
              >Twitch &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">Watch me code live</p>
            </li>
            <li class="mb-4">
              <a
                class="text-brand hover:text-red-700"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://instagram.com/syropian"
              >Instagram &rarr;</a>
              <p class="mt-2 text-sm text-gray-700">Pictures of sunsets and my cats</p>
            </li>
          </ul>
        </div>
      </section>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
</style>
