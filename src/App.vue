<template>
  <Header />
  <div class="layout flex gap-2 pl-3 pr-8 pb-5">
    <DMSetting class="fixed z-50"/>
    <div class="fake-menu hidden lg:block" :class="navStore.state == 'close' ? `close-animation` : navStore.state == 'open' ? `open-animation` : ''"></div>
    <div v-if="navStore.opened" @click="navStore.openNav()" class="absolute z-40 bg-black opacity-60 block lg:hidden left-0 top-0 w-full h-full"></div>
    <TourGuide />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import DMSetting from '@/components/DMSetting.vue'
import TourGuide from '@/views/TourGuide.vue'
</script>

<style scoped lang="scss">
.fake-menu {
  height: calc(100vh - 80px - 1.25rem);
  transition: all 300ms;

  &.open-animation {
    animation: open2 300ms ease-in;
    min-width: 380px;
  }
  &.close-animation {
    animation: close2 300ms ease-in;
    min-width: 0;
  }
}

.layout {
  height: calc(100vh - 80px);
  width: 100vw;
  overflow: hidden;
}

@keyframes open2 {
  from {
    min-width: 0;
  }
  to {
    min-width: 380px;
  }
}
@keyframes close2 {
  from {
    min-width: 380px;
  }
  to {
    min-width: 0;
  }
}
</style>
