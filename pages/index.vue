<template>
  <div>
    <section class="intro">
      <h2 class="text-3xl leading-normal text-gray-500">
        <span class="block font-bold text-brand">Hi there!</span>
        <span class="font-light">I'm Collin Henderson</span>
      </h2>
      <div class="mt-8 space-y-6 sm:space-y-8">
        <div>
          <h3
            class="inline-block px-2 py-1 text-sm font-semibold tracking-wide bg-red-100 rounded-sm text-brand"
          >
            About Me
          </h3>
          <p class="mt-2 text-lg font-medium leading-loose text-gray-700">
            A digital explorer, builder, and educator living in lovely
            Collingwood, Ontario 🇨🇦&nbsp;with my
            <a
              href="https://www.glovelylocks.ca"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-brand hover:text-red-700"
              >wife</a
            >,
            <a
              href="https://www.instagram.com/p/CaavyNLvcZR/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-brand hover:text-red-700"
              >daughter</a
            >, and
            <a
              href="https://www.instagram.com/p/Bul7hjrHOEV/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-brand hover:text-red-700"
              >two cats</a
            >. Passionate about open source, good design, and breakfast foods.
          </p>
        </div>
        <div>
          <h3
            class="inline-block px-2 py-1 text-sm font-semibold tracking-wide bg-red-100 rounded-sm text-brand"
          >
            Professionally
          </h3>
          <p class="mt-2 text-lg font-medium leading-loose text-gray-700">
            I'm a Sr. Front-end Developer at
            <a
              href="https://www.format.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-brand hover:text-red-700"
              >Format</a
            >
            — a beautiful platform for photographers to showcase their work, and
            grow their business.
          </p>
        </div>
        <div>
          <h3
            class="inline-block px-2 py-1 text-sm font-semibold tracking-wide bg-red-100 rounded-sm text-brand"
          >
            Hobbies
          </h3>
          <p class="mt-2 text-lg font-medium leading-loose text-gray-700">
            Whiffing open nets in Rocket League, playing the guitar (poorly),
            and watching documentaries about sharks, tornadoes, or food.
          </p>
        </div>
      </div>
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
            <p class="mt-2 text-base text-gray-700 sm:text-sm">
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
            <p class="mt-2 text-base text-gray-700 sm:text-sm">
              A self-hosted social network for families and other small groups
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
            <p class="mt-2 text-base text-gray-700 sm:text-sm">
              Open source goodness
            </p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitter.com/syropian"
              >Twitter &rarr;</a
            >
            <p class="mt-2 text-base text-gray-700 sm:text-sm">
              Geeky ramblings and such
            </p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitch.com/syropian"
              >Twitch &rarr;</a
            >
            <p class="mt-2 text-base text-gray-700 sm:text-sm">
              Watch me code live
            </p>
          </li>
          <li>
            <a
              class="text-brand hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://instagram.com/syropian"
              >Instagram &rarr;</a
            >
            <p class="mt-2 text-base text-gray-700 sm:text-sm">
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
  head() {
    return {
      title: 'Home | Syropia',
      meta: [
        {
          name: 'description',
          content: 'The personal website of Collin Henderson',
        },
        { name: 'og:title', content: 'Syropia' },
        {
          name: 'og:description',
          content: 'The personal website of Collin Henderson',
        },
        { name: 'twitter:site', content: '@syropian' },
        { name: 'twitter:title', content: 'Syropia' },
        {
          name: 'twitter:description',
          content: 'The personal website of Collin Henderson',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://syropia.net' }],
    }
  },
}
</script>
