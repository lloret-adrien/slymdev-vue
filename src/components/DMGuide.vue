<template>
  <button class="dm-button">
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
    <p class="gradient-text">
      <AnimatedText>
        DM Tour Guide
      </AnimatedText>
    </p>
    <CircularChart :somme="4" class="ml-auto" />
  </button>
</template>

<script setup>
import CircularChart from '@/components/CircularChart.vue'
import AnimatedText from '@/components/AnimatedText.vue'
</script>

<style scoped lang="scss">
.dm-button {
  margin-top: 20px;
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  background: rgba(23, 82, 101, 0.05);

  p {
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
