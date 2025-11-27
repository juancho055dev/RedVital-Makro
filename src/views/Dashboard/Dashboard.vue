<template>
    <div class="MobileContent">
        <div class="SectTittle">
            <h2>Categorias</h2>

            <h3>Ver Todo</h3>
        </div>

        <div class="categori_btns">
          <div class="categori_list">
            <router-link to="/" class="category-btn"> Todos</router-link>
            <router-link to="/" class="category-btn"> Medicamentos</router-link>
            <router-link to="/" class="category-btn"> Bebidas</router-link>
            <router-link to="/" class="category-btn"> cuidado personal</router-link>
            <router-link to="/" class="category-btn"> Mascotas</router-link>
            <router-link to="/" class="category-btn"> Belleza</router-link>
            <router-link to="/" class="category-btn"> Hogar</router-link>
            <router-link to="/" class="category-btn"> Equipos Medicos</router-link>
            
          </div>

        </div>

        <div class="Sponsors">
          <span>
            <h2>Todo lo que necesites, en un solo Lugar</h2>

            <button class="btn_Sponsor1">Encuentralo Aqui!</button>
          </span>

          <span>
            <img src="../../../public/images/sponsor/repartidor-con-bolsa-de-supermercado-con-espacio-de-copia-Photoroom.png" alt="">
          </span>
        </div>


        <div class="Popular_Title">
          <h2>Productos Redvital</h2>

            <h3>Ver Todo</h3>
        </div>


        <div class="carruselRed">
          <CarruselMobileRed/>

        </div>
        <div class="Sponsor2">
          <SponsorMobile1 />

        </div>

        <div class="Popular_Title">
          <h2>Productos Makro</h2>

            <h3>Ver Todo</h3>
        </div>
        <div class="carruselMak">
          <CarruselMobileMakro />

        </div>
        <div class="Sponsor3">
          <SponsorComponent/>

        </div>

      
           <!-- <SponsorComponent class="Sponsors" />-->




        


  </div>
</template>


<script setup>
import { RouterLink} from 'vue-router';
import CarruselMobileRed from '../../components/Redvital/Carrusel/CarruselMobileRed.vue';
import SponsorMobile1 from '../../components/Sponsor/SponsorMobile1.vue';
import CarruselMobileMakro from '../../components/FilterBar/Makro/Carrusel/CarruselMobileMakro.vue';
import SponsorMobile2 from '../../components/Sponsor/SponsorMobile2.vue';
import SponsorComponent from '../../components/Sponsor/SponsorComponent.vue';

</script>

<style scoped>

.MobileContent{
    padding-top:50px;
    padding-left: 5px;
    padding-right: 5px;
}

.SectTittle,.Popular_Title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5% 5%;
  align-items: center;
}

.SectTittle h2{
  font-size: 1.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #222;
}

.Popular_Title h2{
  font-size: 1.19rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #222;

}
.SectTittle h3, .Popular_Title h3{
  font-size: 1rem;
  color: var(--gris-primary);
  font-family: "Poppins", sans-serif;
}

.categori_btns{
  width: 100%;
  height: 40%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}

.categori_btns .categori_list{
  display: flex;
  width: max-content;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  bottom: 1rem;
}

.category-btn{
  width: auto;
  white-space: nowrap;
  background-color: var(--gris-secundary);
  padding: 8px 15px;
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: 2% 2% ;
  color:#666;


}


.Sponsors {
 display: flex;
 flex-direction: row;
 width: 95%;
 height: 20vh;
 border-radius: 20px;
 background-color: var(--Tree-colorRed);
 justify-content: space-between;
 align-items: center;
 position: relative;
 left: 2%;
 bottom: 10px;
 box-shadow:
  0px 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.Sponsors span {
  width: 50%;
  height: 100%;
}

.Sponsors span h2{
  font-size: 1.1rem;
  width: 90%;
  margin: 5%;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  color: white;
}

.Sponsors .btn_Sponsor1{
  background-color: white;
  border: none;
  padding: 7%;
  color: #222;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin: 5% 10%;
  border-radius: 20px;
}
.Sponsors span img{
  width: 350px;
  height: 100%;
  position: relative;
  right: 20%;
  bottom: 12%;

  object-fit: contain;
  margin: 10% 5%;
}

.carruselMak{
  width: 100%;
  height: 100%;
  margin-top: 5%;
}
.Sponsor2{
  margin-top:5% ;
}

.Sponsor3{
  width: 90%;
  height: 25vh;
  margin: 5% 5%;
  border-radius: 25px;
  background-color: #222;
}
</style>