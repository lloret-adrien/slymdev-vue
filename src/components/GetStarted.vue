<template>
  <div>
    <div class="flex flex-wrap gap-16 justify-between items-center get-started">
      <p class="gradient-text flex items-end text-2xl">
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1_176)">
          <path d="M12.3304 6.49778C12.7644 6.40159 13.1034 6.0626 13.1996 5.62857L14.2143 1.06375C14.48 -0.131847 16.184 -0.131847 16.4497 1.06375L17.4644 5.62857C17.5606 6.0626 17.8996 6.40159 18.3336 6.49778L22.8984 7.51244C24.094 7.77813 24.094 9.48221 22.8984 9.74789L18.3336 10.7626C17.8996 10.8588 17.5606 11.1977 17.4644 11.6318L16.4497 16.1966C16.184 17.3922 14.48 17.3922 14.2143 16.1966L13.1996 11.6318C13.1034 11.1977 12.7644 10.8588 12.3304 10.7626L7.7656 9.74789C6.57 9.48221 6.57 7.77813 7.7656 7.51244L12.3304 6.49778Z" fill="url(#paint0_linear_1_176)"/>
          </g>
          <path d="M2.45675 16.0143C3.05805 15.8811 3.52766 15.4114 3.66093 14.8101L4.09088 12.8746C4.24478 12.1797 5.23477 12.1797 5.38867 12.8746L5.81862 14.8101C5.95189 15.4114 6.4215 15.8811 7.0228 16.0143L8.95837 16.4443C9.65328 16.5982 9.65328 17.5882 8.95837 17.7421L7.0228 18.172C6.4215 18.3053 5.95189 18.7749 5.81862 19.3762L5.38867 21.3118C5.23477 22.0067 4.24478 22.0067 4.09088 21.3118L3.66093 19.3762C3.52766 18.7749 3.05805 18.3053 2.45675 18.172L0.521177 17.7421C-0.173726 17.5882 -0.173726 16.5982 0.521177 16.4443L2.45675 16.0143Z" fill="url(#paint1_linear_1_176)"/>
          <defs>
          <filter id="filter0_d_1_176" x="0.522754" y="0.167053" width="29.6186" height="29.6185" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="6.34614"/>
          <feGaussianBlur stdDeviation="3.17307"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_176"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_176" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_1_176" x1="3.38427" y1="-4.54565" x2="24.6323" y2="-3.89949" gradientUnits="userSpaceOnUse">
          <stop stop-color="#40BEBE"/>
          <stop offset="1" stop-color="#2361E6"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1_176" x1="-1.95157" y1="9.71404" x2="9.94841" y2="10.0759" gradientUnits="userSpaceOnUse">
          <stop stop-color="#40BEBE"/>
          <stop offset="1" stop-color="#2361E6"/>
          </linearGradient>
          </defs>
        </svg>
        <AnimatedText>
          Get Started
        </AnimatedText>
      </p>
      <div class="flex items-center gap-4 text-sm text-bold">
        <BlocksEarned />
        <div class="flex flex-col">
          <p class="gradient-text relative w-max">
            <AnimatedText>
              You earned 20 500
            </AnimatedText>
            <svg class="absolute -right-3 -top-1" width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6592 3.27586L9.51397 4.98276M13 7.8908L10.4525 7.25862M8.17318 9.5977L9.51397 12M5.42458 9.5977L4.28492 12M3.81564 7.25862L1 7.8908M4.55307 4.98276L2.34078 3.27586M6.96648 3.71839V1" stroke="url(#paint0_linear_1_278)" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
              <linearGradient id="paint0_linear_1_278" x1="-1.47045" y1="-2.06269" x2="13.5909" y2="-1.56302" gradientUnits="userSpaceOnUse">
              <stop stop-color="#40BEBE"/>
              <stop offset="1" stop-color="#2361E6"/>
              </linearGradient>
              </defs>
            </svg>
          </p>
          <p class="text-[#514F5F]">Total XP to earn : 12 000</p>
        </div>
      </div>
    </div>
    <div class="progress-container">
      <div class="progress-bar" style="width: 70%;"></div>
    </div>
  </div>
</template>

<script setup>
import BlocksEarned from '@/components/BlocksEarned.vue'
import AnimatedText from '@/components/AnimatedText.vue'
</script>

<style scoped>
.progress-container {
  margin-top: 10px;
  background: linear-gradient(-318.22deg, #FFFFFF -4.95%, #FAFAFF 99.74%);
  border-radius: 40px; /* Rayon des coins */
  padding: 4px 10px; /* Espacement intérieur */
}

.progress-bar {
  height: 7px;
  background: linear-gradient(91.74deg, #40BEBE -20.8%, #2361E6 101.14%);
  border-radius: 40px; /* Rayon des coins */
  animation: width 3s ease;
}

@keyframes width {
  from {
    width: 0;
  }
  to {
    width: 70%;
  }
}
</style>
