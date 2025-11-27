<template>
    <Swiper
    :slides-per-view="2"
    :space-between="40"
    :loop="true"
    :autoplay="{ delay: 3000 }"
    :pagination="{ clickable: true }"
    :breakpoints="{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }"
    class="mySwiper2"
  >
    <!-- Recorremos productos desde la store -->
    <SwiperSlide v-for="item in cars.redvitalItems" :key="item.id">
      <div class="product-card">
        <img :src="item.url" :alt="item.title" />
        <h3>{{ item.title}}</h3>
        <p>Bs: {{convertTotal(item.precio).toFixed(2)}}</p>

        <span @click="agregarProducto(item)" class="buttonAdd">
             <i class="fa-solid fa-bag-shopping"></i>

        </span>

          <div class="Favoritos" @click="irADetallesProduc(item.id)">
              <i class="fa-solid fa-bars-staggered"></i>
          </div>

          <div class="offsale">
            <h6>
                {{ item.Descuent}}%
            </h6>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import {  onMounted, ref,computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useCarsStore } from '../../../store/CarsStore';
import { POSITION, useToast } from 'vue-toastification';
import { useCarruselStoreRedvital } from '../../../store/ItemsRedvital';
import { useDivisas } from '../../../composables/useDivisas';
import { useUserStore } from '../../../store/UserStore';
import {  useRouter } from 'vue-router';



const toast = useToast();
const carruselRed = useCarruselStoreRedvital();
const currentIndex = ref(0);

const cars = useCarsStore();
const UserStore = useUserStore();
const ItemsStore = useUserStore();
const router = useRouter();
const showLoginMessage = ref(false)

const {convertTotal} = useDivisas();
 
const irADetallesProduc = (itemId) => {
  router.push({
    name: 'ItemDetalle',
    params: {
      id: itemId
    }
  })
}
onMounted(() => {
  cars.initAllItems(); // asegura que allItems esté listo

});

const agregarProducto = (item) => {
  cars.addItem({...item, qty: 1})
  toast.success("Producto Agregado al Carrito", {
    position: POSITION.BOTTOM_CENTER
  })
}


const IsloggedIn = computed(() => {
    return !!userData.value?.email
  });
  

</script>

<style scoped>
.mySwiper2{
    background-color: transparent;
    height: 28vh;
}


.product-card {
  background: #fff;
  border-radius: 8px;
  padding: 15px ;
  height: 85%;
  width: 100%;
  position: relative;
  left: 5%;
  margin-top: 8%;
  text-align: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.product-card img {
  width: 70%;
  height: 70%;
  position: relative;
  bottom: 0%;
  border-radius: 8px;
  object-fit: contain;
}

.product-card h3{
    color: #222;
    font-family: "Poppins",sans-serif;
    font-size: 0.8rem;
    position: absolute;
    bottom: 13%;
    width: 100px;
    text-align: start;
    display: -webkit-box;
  
  /* 3. Limita el número de líneas visibles a 2 */
  -webkit-line-clamp: 2;
  
  /* 4. Establece la orientación de la caja a vertical (necesario para line-clamp) */
  -webkit-box-orient: vertical;
  
  /* 5. Asegura que el texto que se desborda sea ocultado */
  overflow: hidden; 
  
  /* Opcional: Define la altura de línea para que las 2 líneas quepan bien */
  line-height: 1.2; 
  max-height: calc(1.2 * 2); /* line-height * line-clamp */
}

.product-card p {
    font-family: "Roboto", sans-serif;
    font-size:0.9rem;
    color: #666;
    font-weight: bold;
    position: absolute;
    right: 40%;
    width: 70%;
    bottom: 3%;
}

.buttonAdd{
  background-color: var(--secundary-colorRed);
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 999;
  left: 70%;
  bottom: 5%;

  i{
    color: white;
  }
}

.Favoritos{
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 71%;
  align-items: center;
  top: 0;
  width: 30%;
  border-radius: 5px 10px  10px 30px;
  justify-content: center;
  height: 20%;
  background-color: var(--gris-secundary);

  i{
    font-size: 1.5rem;
    color: white;
  }
}
.offsale{
  width: 25%;
  height: 20%;
  position: absolute;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 80%;
  border-radius: 20% 5% 50% 0% ;
  right: 75%;
}

.offsale h6{
    color: black;
    font-family: "Roboto",sans-serif;
    font-size: 0.90rem;
}
</style>