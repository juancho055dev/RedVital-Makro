<template>
  <section class="ContainerMaps">
    <h2 class="textMaps">Mapa en Vue 3 (2025)</h2>

    <GMapMap
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 500px; border-radius: 12px;"
    >
      <GMapMarker
        :position="center"
        :clickable="true"
        :draggable="true"
        @click="handleMarketClicks"
      />
    </GMapMap>
  </section>
</template>

<script setup>
import { ref } from 'vue';

//variables del Maps como Ubicacion y le Zoom 
const center = ref({lat:90.5 , lng: 821.2})  //caracas ubicacion
const zoom = ref(12)

//Eventos 

const handleMarketClicks = () => {
    alert(`Marcador en:${center.value.lat}, ${center.value.lng}`)
} 

</script>

<style>
.ContainerMaps{
    background-color: #8FBFFA;
    width: 250px;
    height: 150px;
}
.textMaps{
    font-size: 1.5rem;
    color: black;
}


</style>
  
