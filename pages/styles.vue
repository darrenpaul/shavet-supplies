<template>
  <main class="main-below-navigation">
    <div class="flex flex-col m-8">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>Paragraph</p>
      <NuxtLink class="link" :to="'#'">Nuxt Link</NuxtLink>
      <a class="link" href="#">Link</a>
      <div class="bg-dark-back py-2">
        <a class="link-light" href="#">Link light</a>
      </div>
    </div>
    <div class="flex flex-col m-8">
      <button>Button Primary</button>
      <button class="btn-secondary">Button Secondary</button>
      <input placeholder="Placeholder" />
    </div>
  </main>
</template>
