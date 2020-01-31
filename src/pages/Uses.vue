<template>
  <Layout>
    <div>
      <h1 class="text-3xl text-gray-600">What I Use</h1>
      <small
        class="block mt-2 text-xs font-bold tracking-widest text-gray-700 uppercase"
        >Updated: January 24th, 2020</small
      >
      <p class="mt-8 leading-loose text-gray-700">
        This is where I'll try and keep an updated summary of the hardware,
        software, and tooling I use for web development and streaming.
      </p>
      <article class="mt-8">
        <h2 class="text-2xl text-gray-600">Dev Tools</h2>
        <ul class="my-4 text-gray-700 list-disc list-inside">
          <li>Editor: Visual Studio Code</li>
          <li>Theme: Moonlight II</li>
          <li>Typeface: JetBrains Mono</li>
          <li>Terminal: iTerm 2</li>
          <li>Shell: Fish</li>
        </ul>
      </article>
      <article class="mt-8">
        <h2 class="text-2xl text-gray-600">Software</h2>
        <ul class="my-4 text-gray-700 list-disc list-inside">
          <li>
            macOS High Sierra - I use a Hackintosh with an NVIDIA graphics card,
            so this is the latest version I can use.
          </li>
          <li>Google Chrome - For browsing and development.</li>
          <li>OBS Studio - For livestreaming on Twitch</li>
          <li>Loopback - Easy per-source audio routing.</li>
          <li>1Password - for storing passwords, duh.</li>
          <li>Alfred - Like Spotlight, but way better.</li>
          <li>Slack, Discord - Chat</li>
          <li>Bear - For note taking</li>
          <li>Spotify - Tunes</li>
          <li>Fantastical - A really elegant calendar application</li>
          <li>
            IconJar - To keep my growing collection of icons neatly organized
          </li>
          <li>Droplr - For quick file sharing</li>
          <li>Sip - Really nice colour grabbing tool</li>
          <li>Sketch - For designing and such</li>
          <li>Magnet - Awesome window management tool</li>
          <li>PixelSnap - For measuring spacing and sizes on screen</li>
          <li>Übersicht - Little desktop widgets you can write in React</li>
        </ul>
      </article>
      <article class="mt-8">
        <h2 class="text-2xl text-gray-600">Hardware</h2>
        <ul class="my-4 text-gray-700 list-disc list-inside">
          <li>ASUS ROG Strix Z370-E</li>
          <li>Intel Core i7-8700K</li>
          <li>Gigabyte GeForce GTX 1080 Windforce OC</li>
          <li>Corsair Vengeance RGB 16GB (2x8GB) DDR4 2666MHz</li>
          <li>Corsair Hydro Series H115i Pro RGB</li>
          <li>WD Black 512GB Performance SSD (for Windows)</li>
          <li>Samsung 970 PRO M.2 SSD (for macOS)</li>
          <li>EVGA SuperNOVA 650 G3, 80 Plus Gold 650W</li>
          <li>NZXT S340 Elite (White)</li>
          <li>Logitech C920 Webcam HD Pro</li>
          <li>Massdrop ALT Mechanical Keyboard</li>
          <li>Glorious Model D White Matte Mouse</li>
          <li>Blue Microphones Yeti USB Microphone - Silver Edition</li>
          <li>
            NEEWER Adjustable Microphone Suspension Boom Scissor Arm Stand
          </li>
          <li>Blue Microphones 243 Radius III Custom Shockmount</li>
          <li>Elgato Stream Deck</li>
          <li>Xbox One Elite / Astro C40 Controller</li>
          <li>Massdrop x Sennheiser HD 58X Jubilee Headphones</li>
          <li>ASUS ROG PG248Q (Primary monitor)</li>
          <li>Samsung S24D590 (Secondary monitor)</li>
        </ul>
      </article>
    </div>
  </Layout>
</template>
<style>
article li {
  @apply leading-loose;
}
</style>
