<template>
  <div class="ContainerFilter">
    <ul class="menu-list">
      <li class="categori_btn" @click="ToggleDropdown('medicamentos')" :class="{activebutton: ActiveDropdown === 'medicamentos'}" >
        
        <h2 class="titulos">Salud y Medicamentos</h2>
        <i class="fa-solid fa-chevron-down arrow" :class="{open: ActiveDropdown === 'medicamentos'}"></i>
        <transition  enter-active-class="slide-down" leave-active-class="slide-up"> <!-- aqui add la clase para hacer la transicion con vue -->
          <div v-if="ActiveDropdown === 'medicamentos'" class="Medicamen_dropdown">
            <span class="salud_respiratoria">
              <h2 >Salud Respiratoria y gripe</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >dolor general</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >salud digestiva</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >Formuala Magistrales</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >nutricion y vida saludable</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >vitamina y productos naturales</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >cuidado de la vista</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >cuidado de los pies</h2>
            </span>
            <span class="salud_respiratoria">
              <h2 >equipo de rehabilitacion</h2>
            </span>
           


          </div>
        </transition>

      </li>
      <li class="categori_btn" @click="ToggleDropdown('alimentos')" :class="{activebutton: ActiveDropdown === 'alimentos'}">
        <h2 class="titulos">Alimentos y Bebidas</h2>
        <i class="fa-solid fa-chevron-down arrow"  :class="{open: ActiveDropdown === 'alimentos'}"></i>
      <transition  enter-active-class="slide-down" leave-active-class="slide-up">
        <div v-if="ActiveDropdown === 'alimentos'" class="Medicamen_dropdown">
              <span class="salud_respiratoria">
                <h2 >Bebidas</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >Viveres</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 > enlatados</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >alimentos pedecederos</h2>
              </span>
          </div>
      </transition>
      </li>
      <li class="categori_btn" @click="ToggleDropdown('cuidado personal')" :class="{activebutton: ActiveDropdown === 'cuidado personal'}">
        <h2 class="titulos">Cuidado Personal </h2>
        <i class="fa-solid fa-chevron-down arrow" :class="{open:ActiveDropdown === 'cuidado personal'}"></i>
        <transition  enter-active-class="slide-down" leave-active-class="slide-up">
        <div v-if="ActiveDropdown === 'cuidado personal'" class="Medicamen_dropdown">
              <span class="salud_respiratoria">
                <h2 >cuidado del cabello</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >higiene personal</h2>
              </span>
              <span class="salud_respiratoria">
                <h2 >afeitado</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >cuidado bucal</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >cuidado de la piel</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >proteccion femenina</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >preservativos</h2>
              </span>


          </div>
      </transition>
        

      </li>
      <li class="categori_btn" @click="ToggleDropdown('belleza')" :class="{activebutton: ActiveDropdown === 'belleza'}">
        <h2 class="titulos">Belleza</h2>
        <i class="fa-solid fa-chevron-down arrow" :class="{open:ActiveDropdown === 'belleza'}"></i>
        <transition  enter-active-class="slide-down" leave-active-class="slide-up">
        <div v-if="ActiveDropdown === 'belleza'" class="Medicamen_dropdown">
              <span class="salud_respiratoria">
                <h2 >cosmeticos</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >artefacto de fragancia</h2>
              </span>
              <span class="salud_respiratoria">
                <h2 >fragancias</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >mercancia general</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >cuidado de la mujer</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >cuidado del hombre</h2>
              </span>
          </div>

          </transition>
      </li>
      <li class="categori_btn" @click="ToggleDropdown('equipos medicos')"   :class="{activebutton: ActiveDropdown === 'equipos medicos'}">
        <h2 class="titulos">Equipos Medicos</h2>
        <i class="fa-solid fa-chevron-down arrow" :class="{open:ActiveDropdown  === 'equipos medicos'}"></i>
        <transition  enter-active-class="slide-down" leave-active-class="slide-up">
        <div  v-if="ActiveDropdown === 'equipos medicos'" class="Medicamen_dropdown">
              <span class="salud_respiratoria">
                <h2 >accesorios </h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >terapia respiratoria</h2>
              </span>
              <span class="salud_respiratoria">
                <h2 >habitacion / beeds</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >movilidad ortopedico</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >cuidado de la piel</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >equipo de medicion</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >servicios</h2>
              </span>


          </div>
        </transition>
      </li>

      <li class="categori_btn" @click="ToggleDropdown('hogar y otros')" :class="{activebutton: ActiveDropdown === 'hogar y otros'}">
        <h2 class="titulos">Hogar y Otros  </h2>
        <i class="fa-solid fa-chevron-down arrow" :class="{open:ActiveDropdown === 'hogar y otros'}"></i>
        <transition  enter-active-class="slide-down" leave-active-class="slide-up">
        <div v-if="ActiveDropdown === 'hogar y otros'" class="Medicamen_dropdown">
              <span class="salud_respiratoria">
                <h2 >decoracion util hogar</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >libreria</h2>
              </span>
              <span class="salud_respiratoria">
                <h2 >higiene del hogar</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >deporte</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >textiles y accesorios</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >entretenimiento</h2>
              </span>

              <span class="salud_respiratoria">
                <h2 >infantil</h2>
              </span>
          </div>
          </transition>
      </li>
      <li class="categori_btn" @click="ToggleDropdown('cupon'),serviceInvalid() " :class="{activebutton:  ActiveDropdown === 'cupon'}">
        <h2 class="titulos">Ingresa tu Cupon</h2>
        <i class="fa-solid fa-chevron-down arrow" :class="{open: ActiveDropdown === 'cupon'}"></i>
        <transition  enter-active-class="slide-down" leave-active-class="slide-up">
        <div  v-if="ActiveDropdown === 'cupon'" class="Medicamen_dropdown">

              <span  class="cupones">
                  
                <h2>ingresa tu cupon</h2>
                <i class="fa-solid fa-ticket" id="tickestIco" ></i>
 
                <div class="inputTickets">
                    <input  type="text" id="ticketsOff" placeholder="ingresa tu cupon aqui">
                    <label  for="ticketsOff"></label>

                    
                </div>
                <button class="btn_tickets">Canjear</button>

              </span>
        </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import "animate.css";
import Swal from "sweetalert2";


const serviceInvalid = () => {
  setTimeout(() => {
    Swal.fire({
    title: "Servicio No Diponible!",
    text: "Actualmenteno se Encuentra  Activo este Servicio",
    icon: "error",
    confirmButtonText: "Close"
    
  });


  },1000);
}


const ActiveDropdown = ref(null)
const  ToggleDropdown = (category)  => {
  //si el dropdown ya esta activo, se cierra y si no se abre 
  ActiveDropdown.value = ActiveDropdown.value === category ? null: category

}



</script>

<style >
@keyframes slide-up {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
.slide-up {
  animation: slide-up 0.4s ease forwards;
}


@keyframes slide-down {
  0% {
    transform: translateY(-20px); /* empieza 20px arriba */
    opacity: 0;                   /* opcional para efecto de aparición */
  }
  100% {
    transform: translateY(0);     /* posición final */
    opacity: 1;
  }
}

.slide-down {
  animation: slide-down 0.4s ease forwards; /*animacion suave */
}

.arrow{
  transition: transform 0.4s ease; /*Aqui esta moviendo la flecha para hgacer la transicion */ 
}

.arrow.open{
  transform: rotate(180deg);
}
.ContainerFilter{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #8FBFFA;
    align-items: center;
    position: absolute;
    top: 15px;
    box-shadow: 0px 5px 15px 0.2px #0000006b;

    z-index: 1;

    
}

.menu-list {
    display: flex; /* ← Flex en el ul, no en los li */
    gap: 40px;
    list-style: none; /* ← Quita los puntos de lista */
    padding: 0;
    margin: 0;
    position: relative;
    left: 20px; 
    z-index: 1;
}

.categori_btn{
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    padding-bottom: 5px;
    padding-top: 5px;
    white-space: nowrap;
    cursor: pointer;
    z-index: 1;
    



    
    i{
        font-size: 1rem;
        padding-left: 7px;
        padding-right: 7px;
        color: #023E8A;
    }

    
}
.titulos{
        padding-left: 7px;
        padding-right: 7px;
        font-size: 0.7rem;
        padding-right: 7px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        width: 100%;
        color: #001E60;
    }
.categori_btn.activebutton, .a{
  background-color: #001E60;
  .titulos{
    color: white;
  }

  i{
  color: white;}
}

.Medicamen_dropdown{
      width: 25%;
      height: 500px;
      background-color: #8FBFFA;
      border-radius: 25px;
      position: absolute;
      top: 38px;
      left: 20px;
      z-index: -10;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 5px 5px 25px 0.5px #00000069;
      
    }
.Medicamen_dropdown  .salud_respiratoria{
  width: 80%;
  height: 35px;
  border-radius: 25px;
  position: relative;
  left:5px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  background-color: white;
  transition: all 0.5s  ease-in-out;
}
.salud_respiratoria:hover{
  background-color: #001E60;
  color: #001E60;
  h2{
    color: white;
    transform: scale(1.1);
  }
}



.salud_respiratoria h2{
  font-size: 0.85rem;
  color: #001E60;
  text-align: center;
  font-family: "Poppins",sans-serif;
  text-transform: capitalize;

}

.salud_respiratoria  ul li{
  display: flex;
  font-size: 0.65rem;
  color: white;
  
  margin: 3px;
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
  

}

.cupones{
  width:80%;
  height: 70%;
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cupones h2{
  font-size: 1.5rem;
  position: relative;
  bottom: 30px;
  color: #001E60;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
}
#tickestIco{
  width: 50px;
  height: 50%;
  color:#023E8A;
  height:80px;
  position: relative;
  bottom: 20px;
  right: 20px;
  transform: rotate(45deg);
  font-size: 4rem;
}
.inputTickets{
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputTickets input{
  background-color: #8FBFFA;
  padding-left: 10px;
  border: none;
  width: 100%;
  height: 35px;
  margin: 10px;
  border-radius: 25px;
  margin-bottom: 25px;
}
.btn_tickets{
  border: none;
  background-color: #001E60;
  padding: 15px;
  border-radius: 25px;
  color: white;
  font-family: "Poppins",sans-serif;
}


</style>