<template>
    <div class="ContainerCars" @click="ToggleCart">
        <i class="fa-solid fa-cart-shopping" ></i>
        <h2 class="price_cars"> $ {{cars.totalPrice}} </h2>
        <span class="items_Cards">
            <h3>{{cars.itemsCounter}}</h3>
        </span>
    </div>

    <teleport to="body"> 
        <transition  enter-active-class="slide-left" leave-active-class="slide-right">
                <div v-if="activeCartbtn" class="ContainerButtonCart">
                    <CarsMarketBotton/>
                </div>
        </transition>
    </teleport>
</template>

<script setup>
import { onUnmounted } from 'vue';
import CarsMarketBotton from '../CarsMarket/CarsMarketBotton.vue'
import { useCarsStore } from '../../store/CarsStore';
import { useActivebtn } from '../../composables/useActiveCarsBtn';
const cars = useCarsStore();

const { activebtn: activeCartbtn } = useActivebtn();


onUnmounted(() => {
    cars.initAllItems();
})

const ToggleCart = () => {
    activeCartbtn.value = !activeCartbtn.value
    console.log("hola esta hacienod click el carro")

}

</script>

<style>
.ContainerButtonCart{
    position: fixed;
    top: 150px;
    left: 950px;
}
@keyframes slide-right{
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
}
.slide-right {
  animation: slide-right 0.4s ease forwards;
}


@keyframes slide-left {
  0% {
    transform: translateX(100px); /* empieza 20px arriba */
    opacity: 0;                   /* opcional para efecto de aparición */
  }
  100% {
    transform: translateX(0);     /* posición final */
    opacity: 1;
  }
}

.slide-left {
  animation: slide-left 0.4s ease forwards; /*animacion suave */
}


.ContainerCars{
    display: flex;
    flex-direction: column;
    margin: 5px;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 20px;
    top: 10px;
    width: 80px;

    i{
        font-size: 2rem;
        color: #001E60;
        position: relative;
        right: 0px;
    }
   
    .items_Cards{
    width: 1.5rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #FFC220;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 60px;
    left: 23px;


    h3{
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
    }
}

}

.price_cars{
        font-size: 1.2rem;
        font-family: "Roboto", sans-serif;
        color: #001E60;
        position: relative;
        top: 5px;
        max-width: 80px;

    }



</style>