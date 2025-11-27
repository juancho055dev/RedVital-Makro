<template>
  <div class="carousel">

  
    <button @click="prev" ><i class="fa-solid fa-arrow-left prev" :class="{ pulsing: isPulsingPrev }"></i></button>

    <div class="carousel-content">
      <div
        v-for="item in carrusel.visibleImages"
        :key="item.id"
        class="carousel-item"
      >
        <img :src="item.url" :alt="item.title" />
        <p>{{ item.title }}</p>

        <h3>Bs. {{item.precio}}.00 </h3>
        <span @click="AddtoCardButton(item)" class="buttonAdd">
            <i class="fa-solid fa-plus"></i>
        </span>

        

        <div class="delivery">
          <i class="fa-solid fa-truck"></i>
          <h4>35 Mins</h4>
        </div>

          <div class="offsale">
          <img src="../../../../assets/descuento.png" alt=""></img>
        </div>
      </div>

      
      
    </div>

    <button @click="next"><i class="fa-solid fa-arrow-right next" :class="{ pulsing: isPulsingNext }" ></i></button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // 👈 Agrega esta línea
import { useCarruselStoreMakro } from "../../../../store/ItemsMakro"
const carrusel = useCarruselStoreMakro();
const { allItems } = storeToRefs(carrusel); 
import { ref} from "vue"

const next = () => {
  carousel.next(),
  pulse(isPulsingNext)
}
const prev = () => {
  carousel.prev(),
  pulse(isPulsingPrev)
}


const AddtoCardButton =  (item) => {
  carrito.value.push(item);
  console.log(carrito.value)

  
}


const isPulsingPrev = ref(false)
const isPulsingNext = ref(false)


function pulse(target) {
  target.value = false
  requestAnimationFrame(() => {
    target.value = true
  })
}



</script>

<style scoped>
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


.offsale{
  width: 60px;
  height: 60px;
  position: relative;
  left: 8rem;
  bottom: 18rem;

  img{
    width: 100%;
    height: 100%;
    animation: pulso-oferta 2s infinite;
  }
}
.carousel {
  display: flex;
  align-items: center;
  gap: 1rem;

  button{
    background-color: transparent;
    border: none;
    width: 10px;
    position: relative;

    

    .prev{
      font-size: 1.8rem;
      color: #D9272E;
      position: relative;
      left: 15px ;

    }

    .next{
      font-size: 1.8rem;
      color: #D9272E;
      position: relative;
      left: 30px;

    }


  }



}
.buttonAdd{
  background-color: #D9272E;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  right: 6.5rem;
  bottom: 11rem;
  

  i{
    color: white;
  }
}

.delivery{
  display: flex;
  flex-direction: column;
  position: relative;
  left: 5rem;
  align-items: center;
  bottom: 2.5rem;

  i{
    font-size: 1rem;
    color: #B50027;
  }

  h4{
    font-size: 0.7rem;
    font-family: "Poppins", sans-serif;
    color: #B50027;

  }
}

.carousel-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 👈 4 columnas visibles */
  gap: 2rem;
  height: 35vh;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 30px;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-color: white;
  box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.20);
  border-radius: 20px;

  p{
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #D9272E;
    position: relative;
    top: 0.5rem;
    
  }

  h3{
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    position: relative;
    color: #B50027;
    top: 0.8rem;
    right:3.6rem;
  }
  
}

img {
  width: 25vw;
  max-width: 150px;
  position: relative;
  top: 10px;
  height: 150px;
  object-fit: contain;
  border-radius: 6px;
  
  transition: all 0.5s ease-in-out;
}
img:hover{
  transform: scale(1.1);
}

p {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(0.8); }
  100% { transform: scale(1); }
}

.pulsing {
  animation: pulse 0.4s ease-in;
}


@media (max-width: 768px){
  .carousel{
    width: 20vw;
    height: 100%;
    background-color: #D9272E;;
  }

  .carousel-content{
    width: 20vw;
    height: 20%;
    position: relative;
    bottom: 100%
  }
  .carousel-item{
    width: 100%;
    height: 20%;
  }
}



</style>
