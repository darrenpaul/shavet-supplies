<template>
  <footer class="bg-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-item">
          <div class="flex flex-col items-center">
            <div class="w-28 mb-4">
              <ShavetIcon :line-color="'white'" />
            </div>
            <h3 class="text-white">{{ CLIENT_COPY.companyName }}</h3>
          </div>
        </div>

        <!-- TRADING HOURS -->
        <div class="footer-item">
          <h3 class="text-white pb-3">
            {{ COMMON_COPY.tradingHours }}
          </h3>
          <p v-for="(line, index) in FOOTER_COPY.tradingHours" :key="index" class="text-white pb-3">
            {{ line }}
          </p>
        </div>

        <div class="footer-item">
          <h3 class="text-white pb-3">
            {{ FOOTER_COPY.findUsOn }}
          </h3>
          <div class="flex">
            <div class="mr-3">
              <a :href="FOOTER_COPY.linkedinUrl" target="_blank">
                <div class="icon-badge-white">
                  <a>
                    <Icon icon="akar-icons:linkedin-fill" width="22" height="22" />
                  </a>
                </div>
              </a>
            </div>
            <div class="mr-3">
              <a :href="FOOTER_COPY.facebookUrl" target="_blank">
                <div class="icon-badge-white">
                  <Icon icon="akar-icons:facebook-fill" width="22" height="22" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center p-4 border-t border-dashed border-nav-link">
      <small class="text-center text-white">
        {{ FOOTER_COPY.copyright }}
      </small>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CLIENT_COPY, COMMON_COPY, FOOTER_COPY } from '~~/constants/copy'
import ShavetIcon from '~~/components/icons/ShavetIcon.vue'
</script>

<style lang="scss">
footer {
  @apply w-full;
  .footer-content {
    @apply py-16 p-4 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-0;

    .footer-item {
      @apply flex flex-col justify-start items-start md:items-start h-full;
    }
  }
}
</style>
