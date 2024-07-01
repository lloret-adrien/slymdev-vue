<template>
  <nav class="text-[#1C192B] flex justify-between p-5">
    <div class="flex gap-4">
      <div class="flex gap-2 items-center">
        <button class="bg-[#1752650D] w-[40px] h-[40px] flex items-center justify-center rounded-xl">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18299 1.1308C7.63536 1.5828 7.63565 2.3159 7.18365 2.7683L2.9964 6.95897L7.18299 11.1422C7.63536 11.5943 7.63565 12.3274 7.18365 12.7798C6.73164 13.2321 5.99851 13.2324 5.54614 12.7804L1.2978 8.5355C0.427102 7.66553 0.426602 6.25447 1.2965 5.38381L5.54548 1.1315C5.99749 0.679098 6.73063 0.678799 7.18299 1.1308Z" fill="#25213E"/>
          </svg>
        </button>
        Messages
      </div>
      <!-- DMSetting -->
      <div @click="navStore.openNav()" class="flex gap-2 items-center cursor-pointer" :class="navStore.opened ? 'hidden' : 'block'">
        <button class="bg-[#1752650D] w-[40px] h-[40px] flex items-center justify-center rounded-xl">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
        </button>
        Settings
      </div>
    </div>
    <img src="/profile.png" alt="Profile Mahdi">
  </nav>
</template>

<style scoped>
nav {
  font-weight: 600;
  height: 80px;
}
</style>
