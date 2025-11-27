<template>
  <div class="slider">
    <transition name="slide">
      <img
        v-if="sponsors[activo]"
        :key="activo"
        :src="sponsors[activo]"
        alt="sponsor"
        class="slide-img"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sponsors = [
  "/images/sponsor/mary_arroz.jpg",
  "/images/sponsor/mayonesakraft.jpg",
  "/images/sponsor/doritossponsor1.jpg",
  "/images/sponsor/sponsororeo1.jpg"
]

const activo = ref(0)
let intervalo = null

onMounted(() => {
  intervalo = setInterval(() => {
    activo.value = (activo.value + 1) % sponsors.length
  }, 4000) // 👈 cambia cada 3 segundos
})

onBeforeUnmount(() => clearInterval(intervalo))
</script>

<style scoped>
.slider {
  width: 100%;      /* ajusta al tamaño que quieras */
  height: 30vh;     /* altura de las imágenes */
  margin: auto;
  overflow: hidden;
  position: relative;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
}


/* Transición personalizada */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease, opacity 0.8s ease;
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-enter-from {
  transform: translateX(100%); /* entra desde la derecha */
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%); /* sale hacia la izquierda */
  opacity: 0;
}

@media (max-width: 768px){
  .slider{
   width: 100%;
  height: 100%; 
  margin: auto;
  
  /* CRUCIAL: Recorta la imagen a los límites del slider */
  overflow: hidden; 
  
  /* Aplica las esquinas redondeadas al contenedor */
  border-radius: 12px; 
  
  position: relative;
  
  }
  /* ... */
}

.slide-img {
  width: 100%;
  height: 25vh;
  
  /* 🚨 CRUCIAL: Muestra la imagen completa, añadiendo espacio si es necesario */
  object-fit: fill; 
  
  /* Las esquinas redondeadas deben ir en el contenedor o en la imagen */
  border-radius: 12px; 
  
  position: absolute;
}
</style>
