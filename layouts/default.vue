<template>
    <div class="page-wrapper">
      <Navigation/>
      <slot/>
      <Footer/>
    </div>
  </template>

  <style lang="scss">
  .page-wrapper {
    @apply min-h-[calc(100vh-5rem)];
  }
  </style>
