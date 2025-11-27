<template>
  <div class="home-wrapper" v-if="!SizeMobile">
    <HeaderComponent    />
    <DescuentGallery  />
    <CarruselMakro  />
    <SponsorComponent />
    <SponsorRedvital    />
    <CarruselRedvital  />
    <FooterComponent />
    <ConversionDivisas  />

    <!-- Mobile Responsive -->


    

  </div>

  <div class="HomeWrapperMobile" v-if="SizeMobile">

      <NavbarMobileBotton class="NavbarMobileBotton" />

      <main class="ContainerHomeMobile">
        <RouterView />

      </main>

      <NavbarMobileTop class="NavbarMobileTop" />
      

  </div>

</template>

<style scoped>
/* Anulación súper específica dentro del componente */
a:focus,
a:active,
i:focus,
i:active {
    outline: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
    border-color: transparent !important;
}
.home-wrapper {
  padding-top: 130px; /* 👈 mismo alto del Header */
}

@media (max-width: 768px) {
  .HomeWrapperMobile{
    width: 100vw;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    z-index: 100;
  }

  .NavbarMobileTop{
    position: fixed;
    z-index: 99999;
    bottom: 0;
  }
  .NavbarMobileBotton{
    position: fixed;
    z-index: 99999;
    top: 0;

  }

  .ContainerHomeMobile{
      flex-grow: 1;
      overflow-x: hidden;
      padding-top: 50px;
      padding-bottom: 65px;
      overflow-y: auto;
  }

}
</style>
<script setup>


import CarruselRedvital from '../components/Redvital/Carrusel/CarruselRedvital.vue'
import CarruselMakro from '../components/FilterBar/Makro/Carrusel/CarruselMakro.vue';
import DescuentGallery from '../components/GalleryDescuent/DescuentGallery.vue';
import HeaderComponent from '../components/HeaderBar/HeaderComponent.vue';
import SponsorComponent from '../components/Sponsor/SponsorComponent.vue';
import SponsorRedvital from '../components/Sponsor/SponsorRedvital.vue';
import FooterComponent from '../components/Footer/FooterComponet.vue';
import ConversionDivisas from '../components/TasadeCambio/ConversionDivisas.vue'
import { UseScreen } from '../composables/useScreen';
import { watchEffect } from 'vue';
import NavbarMobileTop from '../components/HeaderBar/NavbarApp/NavbarMobileTop.vue';
import NavbarMobileBotton from '../components/HeaderBar/NavbarApp/NavbarMobileBotton.vue';
import { RouterView } from 'vue-router';


const {SizeMobile} = UseScreen();

watchEffect(() =>{
  console.log(SizeMobile.value)
})

</script>
