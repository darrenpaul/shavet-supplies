<template>
  <footer class="bg-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-item">
          <h3 class="text-white pb-3">Branding</h3>
        </div>

        <!-- TRADING HOURS -->
        <div class="footer-item">
          <h3 class="text-white pb-3">
            {{ COMMON_COPY.tradingHours }}
          </h3>
          <p
            v-for="(line, index) in FOOTER_COPY.tradingHours"
            :key="index"
            class="text-white pb-3"
          >
            {{ line }}
          </p>
        </div>

        <div class="footer-item">
          <h3 class="text-white pb-3">
            {{ FOOTER_COPY.findUsOn }}
          </h3>
          <div class="flex">
            <div class="mr-3">
              <a href="#">
                <div class="icon-badge-white">
                  <Icon
                    icon="akar-icons:linkedin-fill"
                    width="22"
                    height="22"
                  />
                </div>
              </a>
            </div>
            <div class="mr-3">
              <a href="#">
                <div class="icon-badge-white">
                  <Icon icon="akar-icons:google-fill" width="22" height="22" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        flex
        items-center
        justify-center
        p-4
        border-t border-dashed border-nav-link
      "
    >
      <small class="text-center text-white">
        {{ FOOTER_COPY.copyright }}
      </small>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { COMMON_COPY, FOOTER_COPY } from "~~/constants/copy";
import { Icon } from "@iconify/vue";
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
