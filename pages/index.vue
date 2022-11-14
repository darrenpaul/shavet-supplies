<template>
  <main class="main-under-navigation">
    <div class="home-header">
      <div class="home-heading-text-wrapper">
        <h1>{{ HOME_COPY.heading }}</h1>
      </div>
      <FarmScene />
    </div>

    <!-- SERVICES -->
    <section>
      <div class="container">
        <h2 class="text-center">
          {{ HOME_COPY.servicesOffered }}
        </h2>

        <div class="column">
          <!-- VACCINES -->
          <div class="service item-container">
            <VaccinesIcon />
            <h3>{{ HOME_COPY.vaccinesTitle }}</h3>
            <p>
              {{ HOME_COPY.vaccinesDescription }}
            </p>
          </div>

          <!-- DEIONISED WATER -->
          <div class="service item-container">
            <WaterIcon />
            <h3>{{ HOME_COPY.waterTitle }}</h3>
            <p>
              {{ HOME_COPY.waterDescription }}
            </p>
          </div>

          <!-- PROTECTIVE CLOTHING -->
          <div class="service item-container">
            <ProtectiveClothingIcon />
            <h3>{{ HOME_COPY.protectiveClothingTitle }}</h3>
            <p>
              {{ HOME_COPY.protectiveClothingDescription }}
            </p>
          </div>

          <!-- CLEANING PRODUCTS -->
          <div class="service item-container">
            <CleaningProductIcon />
            <h3>{{ HOME_COPY.cleaningProductTitle }}</h3>
            <p>
              {{ HOME_COPY.cleaningProductDescription }}
            </p>
          </div>

          <!-- FARM MAINTENANCE -->
          <div class="service item-container">
            <Icon class="icon" icon="akar-icons:gear" width="64" height="64" />
            <h3>{{ HOME_COPY.maintenanceTitle }}</h3>
            <p>
              {{ HOME_COPY.maintenanceDescription }}
            </p>
          </div>
          <!-- POULTRY FEED -->
          <div class="service item-container">
            <PoultryFeedIcon />
            <h3>{{ HOME_COPY.feedTitle }}</h3>
            <p>
              {{ HOME_COPY.feedDescription }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT US -->
    <section class="bg-feature">
      <div class="container">
        <div class="column">
          <div class="column-item">
            <div class="item-container">
              <h2>{{ HOME_COPY.moreAboutUs }}</h2>
            </div>

            <div class="flex flex-wrap">
              <div class="column-item item-container">
                <Icon
                  class="icon"
                  icon="akar-icons:gear"
                  width="64"
                  height="64"
                />
                <h4>{{ HOME_COPY.chickenTitle }}</h4>
                <p>
                  {{ HOME_COPY.chickenDescription }}
                </p>
              </div>
              <div class="column-item item-container">
                <Icon
                  class="icon"
                  icon="akar-icons:gear"
                  width="64"
                  height="64"
                />
                <h4>{{ HOME_COPY.chickenTitle }}</h4>
                <p>
                  {{ HOME_COPY.chickenDescription }}
                </p>
              </div>
              <div class="column-item item-container">
                <Icon
                  class="icon"
                  icon="akar-icons:gear"
                  width="64"
                  height="64"
                />
                <h4>{{ HOME_COPY.chickenTitle }}</h4>
                <p>
                  {{ HOME_COPY.chickenDescription }}
                </p>
              </div>
              <div class="column-item item-container">
                <Icon
                  class="icon"
                  icon="akar-icons:gear"
                  width="64"
                  height="64"
                />
                <h4>{{ HOME_COPY.chickenTitle }}</h4>
                <p>
                  {{ HOME_COPY.chickenDescription }}
                </p>
              </div>
            </div>
          </div>
          <div class="column-item">
            <div class="item-container">
              <IconsWorkingCharacter />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section>
      <div class="container">
        <div class="item-container">
          <h2 class="text-center">
            {{ HOME_COPY.contact }}
          </h2>
        </div>
        <div class="column">
          <!-- CONTACT FORM -->
          <div class="column-item mb-4 md:mb-0">
            <div class="mx-3">
              <h3>{{ HOME_COPY.contactForm }}</h3>
            </div>
            <div class="flex">
              <div class="column-item mx-3">
                <input placeholder="name" />
              </div>
              <div class="column-item mx-3">
                <input placeholder="email" />
              </div>
            </div>
            <div class="mx-3">
              <input placeholder="subject" />
              <textarea placeholder="message" />
              <button>{{ HOME_COPY.sendMessage }}</button>
            </div>
          </div>

          <!-- CONTACT DETAILS -->
          <div class="column-item mt-4 md:mt-0">
            <div class="ml-4">
              <div class="mx-3">
                <h3>{{ HOME_COPY.getInTouch }}</h3>
              </div>
              <div class="mx-3">
                <!-- BUSINESS ADDRESS -->
                <div class="column mb-4">
                  <div class="icon-badge">
                    <Icon
                      class="text-white"
                      icon="fa-solid:map-marker-alt"
                      width="22"
                      height="22"
                    />
                  </div>
                  <div class="mx-3 my-auto">
                    <a
                      target="_blank"
                      :href="HOME_COPY.businessAddressLink"
                      class="link"
                      >{{ HOME_COPY.businessAddress }}</a
                    >
                  </div>
                </div>

                <!-- EMAIL ADDRESS -->
                <div class="column mb-4">
                  <div class="icon-badge">
                    <Icon
                      class="text-white"
                      icon="fa-solid:envelope"
                      width="22"
                      height="22"
                    />
                  </div>
                  <div class="mx-3 my-auto">
                    <a
                      target="_blank"
                      :href="`mailto:${HOME_COPY.emailAddress}`"
                      class="link"
                      >{{ HOME_COPY.emailAddress }}</a
                    >
                  </div>
                </div>

                <!-- PHONE NUMBER -->
                <div class="column">
                  <div class="icon-badge">
                    <Icon
                      class="text-white"
                      icon="fa-solid:phone-alt"
                      width="22"
                      height="22"
                    />
                  </div>
                  <div class="mx-3 my-auto">
                    <a
                      target="_blank"
                      :href="`tel:${HOME_COPY.phoneNumber}`"
                      class="link"
                      >{{ HOME_COPY.phoneNumber }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { HOME_COPY } from "~~/constants/copy";
import { Icon } from "@iconify/vue";
import FarmScene from "~~/components/backgrounds/FarmScene.vue";
import VaccinesIcon from "~~/components/icons/VaccinesIcon.vue";
import WaterIcon from "~~/components/icons/WaterIcon.vue";
import ProtectiveClothingIcon from "~~/components/icons/ProtectiveClothingIcon.vue";
import CleaningProductIcon from "~~/components/icons/CleaningProductIcon.vue";
import PoultryFeedIcon from "~~/components/icons/PoultryFeedIcon.vue";
</script>

<style lang="scss">
.home-header {
  @apply w-full h-screen overflow-hidden bg-feature;
  .home-heading-text-wrapper {
    @apply absolute w-1/2 flex m-12 mt-36;
  }
  .header-image {
    @apply object-cover w-full h-screen;
  }
}

.service {
  @apply w-full md:w-1/2 lg:w-1/3;
}
</style>
