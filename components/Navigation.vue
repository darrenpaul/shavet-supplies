<template>
  <header>
    <div
      :class="[
        'desktop-navigation',
        solidNavigation && 'desktop-navigation-solid',
      ]"
    >
      <div>Branding</div>
      <div class="links">
        <NuxtLink
          v-for="(link, index) in ROUTES"
          :key="index"
          :class="[
            'nav-link',
            link.path === HOME_ROUTE.path && 'nav-link-active',
          ]"
          :to="link.path"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div></div>
    </div>
    <div class="mobile-navigation">
      <div class="flex items-center justify-between w-full">
        <div><p>Branding</p></div>
        <button
          class="mobile-toggle-button"
          @click="showMobileMenu = !showMobileMenu"
        >
          <Icon
            v-if="!showMobileMenu"
            class="text-nav-link"
            icon="gg:menu"
            width="32"
            height="32"
          />
          <Icon
            v-else
            class="text-nav-link"
            icon="gg:menu-motion"
            width="32"
            height="32"
          />
        </button>
      </div>
      <div v-if="showMobileMenu" class="mobile-menu">
        <div class="links-mobile">
          <NuxtLink
            v-for="(link, index) in ROUTES"
            :key="index"
            :class="[
              'nav-link-mobile',
              link.path === HOME_ROUTE.path && 'nav-link-active',
            ]"
            :to="link.path"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ROUTES, HOME_ROUTE } from "~~/constants/routes";
const solidNavigation = ref(false);
const showMobileMenu = ref(false);

const handleScroll = () => {
  const currentScrollValue = window.scrollY;
  if (currentScrollValue >= 50) {
    solidNavigation.value = true;
  } else {
    solidNavigation.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
header {
  @apply w-full;
  .desktop-navigation {
    @apply hidden md:grid fixed grid-cols-3 items-center justify-center w-full h-16 px-16 z-50 duration-1000 ease-in-out;
    &.desktop-navigation-solid {
      @apply shadow bg-white duration-700 ease-in-out;
    }

    .links {
      @apply flex items-center justify-center gap-8;
    }
  }

  .mobile-navigation {
    @apply flex md:hidden w-full p-2 bg-white fixed z-50 h-16 shadow;

    .mobile-toggle-button {
      @apply bg-transparent p-0 m-0;
    }
    .mobile-menu {
      @apply fixed w-full top-16 left-0 bg-white shadow p-4;
      .links-mobile {
        @apply flex flex-col items-center justify-center gap-8;
      }
    }
  }
}
</style>
