<template>
  <span class="text-wrapper">
    <span ref="letters" class="letters">
      <slot />
    </span>
  </span>  
</template>

<script setup>
import { onMounted, ref } from 'vue'
const letters = ref(null)

onMounted(() => {
  // Wrap every letter in a span
  const textWrapper = letters.value
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

  anime.timeline({loop: true})
    .add({
      targets: '.letter',
      translateY: ["1.2em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.text-wrapper',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 5000
    })
})
</script>

<style>
.letter {
  background: linear-gradient(91.74deg, #40BEBE -20.8%, #2361E6 101.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  line-height: 1em;
}

.text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
</style>