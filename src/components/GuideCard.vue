<template>
  <label :for="`custom-checkbox-${card.index}`" @mousedown="createRipple($event)" class="ripple guide-card flex flex-col bg-white rounded-xl cursor-pointer">
    <img class="pl-8 w-[375px]" src="/todo.png" alt="Todo">
    <div class="flex justify-between mt-4">
      <div class="checkbox-container">
        <input type="checkbox" :id="`custom-checkbox-${card.index}`" class="custom-checkbox">
        <span class="text-[#514F5F] checkbox-label">{{ card.title }}</span>
          <a v-if="card.link" :href="card.link" target="_blank">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6068 9.70454L13.6068 10.7273C13.6068 11.2698 13.3913 11.79 13.0077 12.1736C12.6241 12.5572 12.1038 12.7728 11.5613 12.7728L6.10668 12.7728C5.56418 12.7728 5.04391 12.5572 4.66031 12.1736C4.27671 11.79 4.0612 11.2698 4.0612 10.7273L4.0612 5.27266C4.0612 4.73017 4.2767 4.20989 4.66031 3.82629C5.04391 3.44269 5.56418 3.22719 6.10668 3.22719L7.12942 3.22719C7.31025 3.22719 7.48367 3.29902 7.61154 3.42689C7.73941 3.55475 7.81124 3.72818 7.81124 3.90901C7.81124 4.08984 7.73941 4.26327 7.61154 4.39114C7.48367 4.519 7.31025 4.59084 7.12942 4.59084L6.10668 4.59084C5.92585 4.59084 5.75242 4.66267 5.62455 4.79054C5.49669 4.91841 5.42485 5.09183 5.42485 5.27266L5.42485 10.7273C5.42485 10.9081 5.49669 11.0815 5.62455 11.2094C5.75242 11.3373 5.92585 11.4091 6.10668 11.4091L11.5613 11.4091C11.7421 11.4091 11.9155 11.3373 12.0434 11.2094C12.1713 11.0815 12.2431 10.9081 12.2431 10.7273L12.2431 9.70454C12.2431 9.5237 12.315 9.35028 12.4428 9.22241C12.5707 9.09454 12.7441 9.02271 12.9249 9.02271C13.1058 9.02271 13.2792 9.09454 13.4071 9.22241C13.5349 9.35028 13.6068 9.5237 13.6068 9.70454Z" fill="#181526"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.49964 12.3343C4.07343 11.9081 3.83398 11.33 3.83398 10.7273L3.83398 5.27266C3.83398 4.66991 4.07343 4.09184 4.49964 3.66563C4.92585 3.23941 5.50392 2.99997 6.10668 2.99997L7.12942 2.99997C7.37051 2.99997 7.60173 3.09574 7.77221 3.26622C7.94269 3.4367 8.03846 3.66792 8.03846 3.90901C8.03846 4.1501 7.94269 4.38132 7.77221 4.5518C7.60173 4.72228 7.37051 4.81805 7.12942 4.81805L6.10668 4.81805C5.98611 4.81805 5.87048 4.86595 5.78522 4.95121C5.69996 5.03646 5.65207 5.15209 5.65207 5.27266L5.65207 10.7273C5.65207 10.8478 5.69996 10.9635 5.78522 11.0487C5.87048 11.134 5.98611 11.1819 6.10668 11.1819L11.5613 11.1819C11.6819 11.1819 11.7975 11.134 11.8827 11.0487C11.968 10.9635 12.0159 10.8478 12.0159 10.7273L12.0159 9.70454C12.0159 9.46344 12.1117 9.23222 12.2822 9.06175C12.4526 8.89127 12.6838 8.79549 12.9249 8.79549C13.166 8.79549 13.3973 8.89127 13.5677 9.06175C13.7382 9.23222 13.834 9.46344 13.834 9.70454L13.834 10.7273C13.834 11.33 13.5945 11.9081 13.1683 12.3343C12.7421 12.7605 12.164 13 11.5613 13L6.10668 13C5.50392 13 4.92585 12.7605 4.49964 12.3343ZM4.28842 10.7273C4.28842 11.2095 4.47998 11.672 4.82097 12.013C5.16196 12.354 5.62445 12.5455 6.10668 12.5455L11.5613 12.5455C12.0435 12.5455 12.506 12.354 12.847 12.013C13.188 11.672 13.3796 11.2095 13.3796 10.7273L13.3796 9.70454C13.3796 9.58396 13.3317 9.46833 13.2464 9.38308C13.1611 9.29782 13.0455 9.24992 12.9249 9.24992C12.8044 9.24992 12.6887 9.29782 12.6035 9.38308C12.5182 9.46833 12.4703 9.58396 12.4703 9.70454L12.4703 10.7273C12.4703 10.9684 12.3746 11.1996 12.2041 11.3701C12.0336 11.5405 11.8024 11.6363 11.5613 11.6363L6.10668 11.6363C5.86559 11.6363 5.63437 11.5405 5.46389 11.3701C5.29341 11.1996 5.19764 10.9684 5.19764 10.7273L5.19764 5.27266C5.19764 5.03157 5.29341 4.80035 5.46389 4.62987C5.63437 4.45939 5.86559 4.36362 6.10668 4.36362L7.12942 4.36362C7.24999 4.36362 7.36562 4.31573 7.45088 4.23047C7.53613 4.14521 7.58403 4.02958 7.58403 3.90901C7.58403 3.78844 7.53613 3.67281 7.45088 3.58755C7.36562 3.5023 7.24999 3.4544 7.12942 3.4544L6.10668 3.4544C5.62444 3.4544 5.16196 3.64597 4.82097 3.98696C4.47998 4.32795 4.28841 4.79043 4.28841 5.27266L4.28842 10.7273Z" fill="#181526"/>
              <path d="M9.83402 7.00004L13.834 3M13.834 3V5.72184M13.834 3L11.1122 3" stroke="#181526" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
      </div>
      <div class="flex items-center gap-2">
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.16602 6.35456L4.97854 9.9L11.166 2.1" stroke="url(#paint0_linear_1_335)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_1_335" x1="0.313175" y1="-0.0717255" x2="11.6077" y2="0.324591" gradientUnits="userSpaceOnUse">
          <stop stop-color="#40BEBE"/>
          <stop offset="1" stop-color="#2361E6"/>
          </linearGradient>
          </defs>
        </svg>
        <p class="gradient-text">
          <AnimatedText>
            {{card.xp}}<span class="text-xs">XP</span>
          </AnimatedText>
        </p>
      </div>
    </div>
    <p class="text-[#8C8D90] text-xs pl-8 pr-8 mt-2">{{ card.description }}</p>
  </label>
</template>

<script setup>
import AnimatedText from '@/components/AnimatedText.vue'
import { onMounted, ref } from 'vue'

const ripple = ref(null)

const props = defineProps({
  card: {
    type: Object,
    required: true
  },
})

const createRipple = (event) => {
  console.log('ENTER')
  const parent = event.currentTarget
  console.log(parent)
  const ink = document.createElement('span')
  ink.classList.add('ink')
  parent.prepend(ink)

  const d = Math.max(parent.offsetWidth, parent.offsetHeight)
  ink.style.height = `${d}px`
  ink.style.width = `${d}px`

  const rect = parent.getBoundingClientRect()
  const x = event.pageX - rect.left - d / 2
  const y = event.pageY - rect.top - d / 2

  ink.style.top = `${y}px`
  ink.style.left = `${x}px`;
  ink.classList.add('ink-animate')

  setTimeout(() => {
    ink.remove()
  }, 500)
}
</script>

<style scoped lang="scss">
.guide-card {
  padding: 24px;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.custom-checkbox {
  /* Masquer l'input natif */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px; /* Taille de la checkbox */
  height: 20px; /* Taille de la checkbox */
  border-radius: 50%; /* Cercle */
  border: 1.5px solid transparent; /* Bordure */
  outline: none;
  cursor: pointer;
  position: relative;
  margin-right: 10px; /* Espacement entre la checkbox et le label */
}

.custom-checkbox:checked {
  background: linear-gradient(91.74deg, #40BEBE -20.8%, #2361E6 101.14%);
  border: none; /* Pas de bordure lorsque cochée */
}

.custom-checkbox:not(:checked) {
  border: 1.5px solid #40BEBE;
}

.custom-checkbox:checked::before {
  content: ''; /* Contenu vide nécessaire pour la pseudo-classe */
  position: absolute;
  top: 50%; /* Positionner au centre vertical */
  left: 50%; /* Positionner au centre horizontal */
  transform: translate(-50%, -50%) rotate(45deg); /* Rotation de 45 degrés */
  width: 6px; /* Largeur de la coche */
  height: 12px; /* Hauteur de la coche */
  border-bottom: 2px solid #fff; /* Bordure de la coche */
  border-right: 2px solid #fff; /* Bordure de la coche */
  animation: coche 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes coche {
  from {
    transform: translate(-50%, calc(-50% - 10px)) rotate(45deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(45deg);
  }
}

.checkbox-label {
  user-select: none; /* Empêcher la sélection de texte */
  font-size: 16px;
  font-weight: 700;
  display: block; /* Pour s'assurer que le label couvre toute la carte */
}

.custom-checkbox:checked + .checkbox-label {
  text-decoration: line-through; /* Rayer le texte si checkbox cochée */
  color: #ccc; /* Couleur du texte rayer */
}
</style>
