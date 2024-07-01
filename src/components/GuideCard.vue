<template>
  <div class="guide-card flex flex-col bg-white rounded-xl">
    <img class="pl-8 w-[375px]" src="/todo.png" alt="Todo">
    <div class="flex justify-between mt-4">
      <div class="checkbox-container">
        <input type="checkbox" id="custom-checkbox" class="custom-checkbox">
        <label for="custom-checkbox" class="checkbox-label text-[#514F5F]">{{ card.title }}</label>
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
        <p class="gradient-text">{{card.xp}}<span class="text-xs">XP</span></p>
      </div>
    </div>
    <p class="text-[#8C8D90] text-xs pl-8 pr-8 mt-2">{{ card.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true
  },
})
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
}

.checkbox-label {
  user-select: none; /* Empêcher la sélection de texte */
  font-size: 16px;
  font-weight: 700;
}

.custom-checkbox:checked + .checkbox-label {
  text-decoration: line-through; /* Rayer le texte si checkbox cochée */
  color: #ccc; /* Couleur du texte rayer */
}
</style>