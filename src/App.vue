<template>
  <Header />
  <div class="layout flex gap-2 pl-3 pr-8 pb-5">
    <DMSetting />
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
