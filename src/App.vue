<template>
  <Header />
  <div class="layout flex gap-2 pl-3 pr-8 pb-5">
    <DMSetting class="fixed z-50 lg:static"/>
    <div v-if="navStore.opened" class="absolute z-40 bg-black opacity-60 block lg:hidden left-0 top-0 w-full h-full"></div>
    <TourGuide />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import DMSetting from '@/components/DMSetting.vue'
import TourGuide from '@/views/TourGuide.vue'
</script>

<style scoped>
.layout {
  height: calc(100vh - 80px);
  width: 100vw;
  overflow: hidden;
}
</style>
