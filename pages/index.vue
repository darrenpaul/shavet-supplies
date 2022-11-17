<template>
  <main id="#" class="main-under-navigation">
    <div class="home-header">
      <div class="home-heading-text-wrapper">
        <h1 class="break-normal">{{ HOME_COPY.heading }}</h1>
      </div>
      <FarmScene />
    </div>

    <!-- SERVICES -->
    <section id="services">
      <div class="container">
        <h2 class="text-center">
          {{ HOME_COPY.servicesOffered }}
        </h2>

        <div class="column">
          <!-- VACCINES -->
          <div class="service item-container">
            <div class="service-icon-wrapper">
              <VaccineIcon />
            </div>
            <h3>{{ HOME_COPY.vaccineTitle }}</h3>
            <p>
              {{ HOME_COPY.vaccineDescription }}
            </p>
          </div>

          <!-- DEIONISED WATER -->
          <div class="service item-container">
            <div class="service-icon-wrapper">
              <WaterIcon />
            </div>
            <h3>{{ HOME_COPY.waterTitle }}</h3>
            <p>
              {{ HOME_COPY.waterDescription }}
            </p>
          </div>

          <!-- PROTECTIVE CLOTHING -->
          <div class="service item-container">
            <div class="service-icon-wrapper">
              <ClothingIcon />
            </div>
            <h3>{{ HOME_COPY.clothingTitle }}</h3>
            <p>
              {{ HOME_COPY.clothingDescription }}
            </p>
          </div>

          <!-- CLEANING PRODUCTS -->
          <div class="service item-container">
            <div class="service-icon-wrapper">
              <CleaningIcon />
            </div>
            <h3>{{ HOME_COPY.cleaningTitle }}</h3>
            <p>
              {{ HOME_COPY.cleaningDescription }}
            </p>
          </div>

          <!-- FARM MAINTENANCE -->
          <div class="service item-container">
            <div class="service-icon-wrapper">
              <MaintenanceIcon />
            </div>
            <h3>{{ HOME_COPY.maintenanceTitle }}</h3>
            <p>
              {{ HOME_COPY.maintenanceDescription }}
            </p>
          </div>

          <!-- POULTRY FEED -->
          <div class="service item-container">
            <div class="service-icon-wrapper">
              <EquipmentIcon />
            </div>
            <h3>{{ HOME_COPY.equipmentTitle }}</h3>
            <p>
              {{ HOME_COPY.equipmentDescription }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT US -->
    <section id="about" class="bg-feature">
      <div class="container">
        <div class="column">
          <div class="column-item">
            <div class="item-container">
              <h2>{{ HOME_COPY.moreAboutUs }}</h2>
            </div>

            <div class="flex flex-wrap">
              <!-- EXPERIENCE -->
              <div class="column-item item-container">
                <div class="service-icon-wrapper">
                  <ExperienceIcon />
                </div>
                <h4 class="mt-2">{{ HOME_COPY.experienceTitle }}</h4>
                <p>
                  {{ HOME_COPY.experienceDescription }}
                </p>
              </div>

              <!-- DELIVERY -->
              <div class="column-item item-container">
                <div class="service-icon-wrapper">
                  <DeliveryIcon />
                </div>
                <h4 class="mt-2">{{ HOME_COPY.deliveryTitle }}</h4>
                <p>
                  {{ HOME_COPY.deliveryDescription }}
                </p>
              </div>

              <!-- SOURCING -->
              <div class="column-item item-container">
                <div class="service-icon-wrapper">
                  <SourcingIcon />
                </div>
                <h4 class="mt-2">{{ HOME_COPY.sourcingTitle }}</h4>
                <p>
                  {{ HOME_COPY.sourcingDescription }}
                </p>
              </div>

              <!-- CUSTOMER -->
              <div class="column-item item-container">
                <div class="service-icon-wrapper">
                  <CustomerIcon />
                </div>
                <h4 class="mt-2">{{ HOME_COPY.customerTitle }}</h4>
                <p>
                  {{ HOME_COPY.customerDescription }}
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
    <section id="contact">
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
                    <Icon class="text-white" icon="fa-solid:map-marker-alt" width="22" height="22" />
                  </div>
                  <div class="mx-3 my-auto">
                    <a target="_blank" :href="HOME_COPY.businessAddressLink" class="link">{{
                      HOME_COPY.businessAddress
                    }}</a>
                  </div>
                </div>

                <!-- EMAIL ADDRESS -->
                <div class="column mb-4">
                  <div class="icon-badge">
                    <Icon class="text-white" icon="fa-solid:envelope" width="22" height="22" />
                  </div>
                  <div class="mx-3 my-auto">
                    <a target="_blank" :href="`mailto:${HOME_COPY.emailAddress}`" class="link">{{
                      HOME_COPY.emailAddress
                    }}</a>
                  </div>
                </div>

                <!-- PHONE NUMBER -->
                <div class="column">
                  <div class="icon-badge">
                    <Icon class="text-white" icon="fa-solid:phone-alt" width="22" height="22" />
                  </div>
                  <div class="mx-3 my-auto">
                    <a target="_blank" :href="`tel:${HOME_COPY.phoneNumber}`" class="link">{{
                      HOME_COPY.phoneNumber
                    }}</a>
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
import { HOME_COPY } from '~~/constants/copy'
import { Icon } from '@iconify/vue'
import FarmScene from '~~/components/backgrounds/FarmScene.vue'
import VaccineIcon from '~~/components/icons/VaccineIcon.vue'
import WaterIcon from '~~/components/icons/WaterIcon.vue'
import ClothingIcon from '~~/components/icons/ClothingIcon.vue'
import CleaningIcon from '~~/components/icons/CleaningIcon.vue'
import EquipmentIcon from '~~/components/icons/EquipmentIcon.vue'
import MaintenanceIcon from '~~/components/icons/MaintenanceIcon.vue'
import ExperienceIcon from '~~/components/icons/ExperienceIcon.vue'
import DeliveryIcon from '~~/components/icons/DeliveryIcon.vue'
import SourcingIcon from '~~/components/icons/SourcingIcon.vue'
import CustomerIcon from '~~/components/icons/CustomerIcon.vue'
</script>

<style lang="scss">
.home-header {
  @apply w-full h-screen overflow-hidden bg-feature;
  .home-heading-text-wrapper {
    @apply absolute w-fit md:w-1/2 flex m-2 mt-28 md:m-12 md:mt-36;
  }
  .header-image {
    @apply object-cover w-full h-screen;
  }
}

.service {
  @apply w-full md:w-1/2 lg:w-1/3;
  .service-icon-wrapper {
    @apply w-12 mb-4;
  }
}
</style>
