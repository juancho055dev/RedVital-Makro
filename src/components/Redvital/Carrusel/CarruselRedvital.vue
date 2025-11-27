<template>
  <div class="carousel">
    <!-- Botón izquierdo -->
    <button @click="prevredvital">
      <i class="fa-solid fa-arrow-left prev" :class="{ pulsing: isPulsingPrev }"></i>
    </button>

    <!-- Ventana visible -->
    <div class="carousel-content">
      <!-- Pista que se desplaza -->
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * itemWidth}px)` }"
      >
        <!-- Items -->
        <div
          v-for="(item, i) in extendedItems"
          :key="item.id + '-' + i"
          class="carousel-item"
        >
          <img :src="item.url" :alt="item.title"  class="img_items" />
          <p>{{ item.title }}</p>
          <h3>Bs. {{ item.precio }}.00</h3>

          <span @click="agregarProducto(item)" class="buttonAdd">
            <i class="fa-solid fa-plus"></i>
          </span>

          <div class="delivery">
            <i class="fa-solid fa-truck"></i>
            <h4>35 Mins</h4>
          </div>

          <div class="offsale">
            <img src="../../../assets/azuldescuento.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Botón derecho -->
    <button @click="nextredvital">
      <i class="fa-solid fa-arrow-right next" :class="{ pulsing: isPulsingNext }"></i>
    </button>
  </div>
</template>

<script setup>
import { useCarsStore} from "../../../store/CarsStore";
import { ref, computed } from "vue";
import { useCarruselStoreRedvital } from '../../../store/ItemsRedvital';
import { useToast } from "vue-toastification";

const carruselRedvital = useCarruselStoreRedvital();
const currentIndex = ref(0);

const cars = useCarsStore();

const itemsPerPage = 5;
const itemWidth = 250 + 16; // ancho item + gap

// Duplicamos los primeros items para loop infinito
const extendedItems = computed(() => {
  return [...carruselRedvital.items, ...carruselRedvital.items.slice(0, itemsPerPage)];
});

// Funciones de navegación
function nextredvital() {
  if (currentIndex.value < extendedItems.value.length - itemsPerPage) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }

  pulse(isPulsingNext)
}

function prevredvital() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = extendedItems.value.length - itemsPerPage;
  }

  pulse(isPulsingPrev)
}

// Animaciones de los botones
const isPulsingPrev = ref(false);
const isPulsingNext = ref(false);

function pulse(target) {
  target.value = false;
  setTimeout(() => {
    target.value = true;
  }, 10);
}


const agregarProducto = (product) => {
    cars.addItem({...product, qty: 1})
    toast.success("Producto Agregado al Carrito");

}

const toast = useToast();


</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  position: relative;
  height: 300px;


  button{
    border: none;
    margin-left: 15px;
    background-color: none;
  }
}
.prev, .next{
  font-size: 2rem;
  color: #023E8A;


}

.carousel-content {
  display: flex;
  overflow: hidden;
  width: 1150px;
  gap: 30px;
}
.offsale{
  width: 60px;
  height: 60px;
  position: relative;

  img{
    width: 60px;
    height: 40px;
    animation: pulso-oferta 2s infinite;
    position: absolute;
    z-index: 100;
    bottom: 230px;
    left: 125px;
  }
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 50px;

}
.img_items {
  width: 150px;
  height: 150px;
  margin-top: 10px;
  margin: top 10px;
  object-fit: contain;
  border-radius: 6px;
  transition: all 0.5s ease-in-out;

}
.img_items:hover {
  transform: scale(1.1);
}

.carousel-item {
  min-width: 250px;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 16px 1px rgba(0,0,0,0.10);
  display: flex;
  height: 280px;

  p{
    position: absolute;
    color: #2859C5;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    top: 150px;
    text-align: center;
    font-size: 1.1rem;
    width: 90%;
    margin-top: 20px;
  }

  h3{
    color: #023E8A;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    position: relative;
    top: 65px;
    right: 55px;
  }
}

.buttonAdd{
  background-color: #023E8A;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  right: 6rem;
  bottom: 8.5rem;
  

  i{
    color: white;
  }
}

.delivery{
  position: relative;
  left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i{
    color: #023E8A;
  }
  h4{
    font-family: "Poppins",sans-serif;
    font-size: 0.87rem;
    color: #023E8A;
    font-weight: bold;
  }
}



/* Botones y animaciones */
.pulsing {
  animation: pulse 0.4s ease-in;
}
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
@keyframes pulso-oferta {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


</style>
