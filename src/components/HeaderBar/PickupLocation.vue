<template>
   
        <div class="ContainerPickup" @click="togglePickup">
            <img src="../../assets/pickup_img.png" alt="">

            <h2 class="Titulo1">Pickup or Delivery?</h2>

            <h3 class="text1">Miranda 1201 - Los Teques Guaicai</h3>

            <i class="fa-solid fa-arrow-down arrow" :class="{open: pickupfilter === true }"></i>
        </div>
        <transition name="slide">
            <teleport to="body">    
                <div v-if="pickupfilter" class="ventana">
                    <h2>Tu Ubicacion!!</h2>
                    <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62798.68024220462!2d-67.08299262969155!3d10.348480468877232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a8cfc2983b6f3%3A0x8aa18fdf683af211!2sLos%20Teques%2C%20Miranda%2C%20Venezuela!5e0!3m2!1ses-419!2sus!4v1759190705598!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </teleport>

        </transition>

</template>

<script setup>
import { ref } from 'vue';

const pickupfilter = ref(null);

const togglePickup  =  () => {
    pickupfilter.value = !pickupfilter.value;

    console.log('listo s eestaejecutando')
}


  
</script>

<style scoped >
.arrow{
  transition: transform 0.4s ease; /*Aqui esta moviendo la flecha para hgacer la transicion */ 
}

.arrow.open{
  transform: rotate(180deg);
}
#maps{
    width: 100%;
    height: 130px;
    border-radius: 5px 25px;

}
.ContainerPickup{
    background-color: #001E60;
    width: 320px;
    z-index: 100;
    border-radius: 50px;
    height: 40px;
    display: inline-block;
    position: relative;
    top: 5px;
    left: 40px;
    margin: 10px;

}
.ContainerPickup i {
    color: white;
        position: relative;
        bottom: 40px;
        font-size: 1.2rem;
        left: 275px;
}

.ContainerPickup img {
     width: 32px;
        height: 32px;
        position: relative;
        left: 5px;
        margin: 5px;
}
.ventana {
  margin-top: 12px;
  padding: 15px;
  position: fixed;
  bottom: 610px;
  left: 480px;
  display: flex;
  flex-direction: column;
  z-index: 999;
  background: #8FBFFA;
  width: 25%;
  border-radius: 10px;
  overflow: visible;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}
.ventana h2{
    font-size: 1.2rem;
    color: #001E60;
    font-family: "Poppins", sans-serif;

}
/* 🔹 Animación slide */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-in-out;
  overflow: hidden;

}


.slide-enter-from,
.slide-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  
}

.slide-enter-to,
.slide-leave-from {
    transform: translateY(0px);
    opacity: 1;;
}
.Titulo1{
    color: white;
    display: inline-block;
    font-size: 0.8rem;
    font-weight: bold;
    position: relative;
    bottom: 25px;
    left: 15px;
    margin: 3px;
}

.text1{
    color: white;
    display: inline-block;
    font-size: 0.7rem;
    position: relative;
    bottom: 10px;
    right: 90px;
    font-weight: 200;

}




</style>