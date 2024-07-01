<template>
  <section class="bg-blue-50 w-full h-full flex flex-col items-center overflow-scroll">
    <GetStarted class="fixed bg-blue-50 pt-4 z-10" />
    <div class="flex flex-col gap-6 mt-32">
      <GuideCard v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </section>
</template>

<script setup>
import GetStarted from '@/components/GetStarted.vue'
import GuideCard from '@/components/GuideCard.vue'

const cards = [
  {
    title: 'Create more inbox',
    description: 'Create more inbox, welcome your new contact by a message',
    xp: 500,
  },
  {
    title: 'Create more inbox',
    description: 'Create more inbox, welcome your new contact by a message',
    xp: 500,
  },
  {
    title: 'Create more inbox',
    description: 'Create more inbox, welcome your new contact by a message',
    xp: 500,
  },
]
</script>

<style scoped lang="scss">
section {
  // padding: 24px 0px;
  padding-top: 0;
  border-radius: 8px 20px 20px 8px;
  box-shadow: 0px 0px 16px 0px #00000008;
}
</style>
