<template>
    
    <div class="NavbarMobileBottoCont" ref="container">
        <div class="User_header">
          <span>
            <i class="fa fa-user"></i>
          </span>
          
          <span v-if="IsloggedIn">
            <p>
              Hola {{UserStore.userData.firstName}}
            </p>
            <h3>Bienvenido</h3>
          </span>
          <span v-else>
            <p>
              Invitado
            </p>
            <h2>Inicia Session </h2>
          </span>

        </div>
        <div class="ItemsMobileBotton">
            <i class="fa fa-bell" @click="toggleNoticacion" :class="{ 'campana-activa': Notificacion}"
            aria-label="Toggle Notificaciones"></i>
        </div>

        
          
        
    </div>

    
      <input
            v-model="query"
            placeholder="Buscar..."
            class="InputSearch"
            @focus="handleFocus"
            @blur="handleBlur"
          />

        <div v-if="shouldShowResultsPanel" ref="searchArea">
          <div v-if="searchResults.length === 0 && query.length > 0 " class="SearchResult not-results" >No se encontraron para 
            {{query}}
          </div>
          <div v-else class="SearchResult list-container">
            <div v-for="(item,index) in searchResults" :key="item.id + '-' + index">
              <router-link :to="{name: 'ItemDetalle', params: {id: item.id } }"   class="search-item" >
                  <h2>{{ item.title }}</h2>
                  <p>$ {{item.precio}}</p>

              </router-link>
              </div>
          </div>
        </div>

    <transition name="slide">
      <div v-if="ActiveDropdown" class="panel">
        <div class="User_header">
          <span>
            <i class="fa fa-user"></i>
          </span>
          
          <span v-if="IsloggedIn">
            <h2>
              {{ UserStore.userData.firstName}} 
            </h2>
            <p>{{UserStore.userData.email}}</p>
          </span>
          <span v-else>
            <h2>
              Invitado
            </h2>
            <p>Inicia Session </p>
          </span>

        </div>
      </div>
    </transition>

    <transition name="reveal">
        <div class="Notificacion" v-if="Notificacion">
            <span class="notify_cart" >
              <i class="fa-regular fa-bell"></i>
              <h2>Actualmente No posee ninguna notificacion</h2>

            </span>

            <span class="img_notify">
              <img src="https://illustrations.popsy.co/blue/question-mark.svg" alt=""></img>
            </span>
          </div>
      </transition>

    

</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useUserStore } from '../../../store/UserStore';
import { useRouter } from 'vue-router';
import { logoutUser } from '../../../Firebase/auth';
import { useToast } from 'vue-toastification';
import { useDivisas} from '../../../composables/useDivisas';
import 'animate.css';

let blurTimeout = null; // 👈 ¡AGREGA ESTO! (Debe ser `let` y no `const`)


const Notificacion = ref(false);

const toggleNoticacion = () => {
  Notificacion.value = !Notificacion.value;

  console.log("se ha caragdo las notificacion")
}




import { useSearchLogic } from '../../../composables/UseSearchStores';

const searchArea = ref(null)
const ActiveDropdown = ref(false);
const container = ref(null)
const convertTotal = useDivisas();


const UserStore = useUserStore();
const router = useRouter();
const toast = useToast();

const IsloggedIn = computed(() => {
    return !!UserStore.userData?.email
  });
  
const ToggleDropdown = () => {
      ActiveDropdown.value = !ActiveDropdown.value
  }


const { 
    query, 
    searchResults, 
    isSearching, 
    shouldShowResultsPanel,closeSearchPanel } = useSearchLogic();


function handleClickOutside(event) {
  const target = event.target;
    
    // 1. Verificar el área de la barra superior (ref="container")
    const clickedInContainer = container.value && container.value.contains(target);
    
    // 2. Verificar el área de los resultados (ref="searchArea" que debes poner en el div de resultados)
    // NOTA: Tienes que asegurarte de que tu div de resultados tenga ref="searchArea" en el HTML.
    const clickedInResults = searchArea.value && searchArea.value.contains(target);
    
    // 3. Verificar el INPUT de búsqueda
    // La forma más confiable es ver si el target es el input, o si está contenido en él (aunque el input no contiene nada).
    // Usamos classList para mayor robustez si el input no tiene una ref directa.
    const clickedInInput = target.classList.contains('InputSearch') || target.closest('.InputSearch');

    // La búsqueda se cierra SÓLO si el clic no está en NINGUNA de estas tres áreas.
    if (!clickedInContainer && !clickedInResults && !clickedInInput) {
        
        // ⚠️ Importante: Cancelamos cualquier blurTimeout pendiente para evitar conflictos
        clearTimeout(blurTimeout);

        isSearching.value = false; // Cierra el panel
        query.value = '';          // Limpia el input
    }
}

// Nueva función para manejar el evento @blur del input
const handleBlur = () => {
  clearTimeout(blurTimeout); 
  // Retrasa el cierre. Si el usuario hace clic en los resultados en 150ms, 
  // el foco se mueve, pero el panel se mantiene visible.
  blurTimeout = setTimeout(() => {
    isSearching.value = false;
  }, 150); 
};

// Nueva función para manejar el evento @focus del input
const handleFocus = () => {
  // Si vuelve el foco, cancelamos cualquier cierre pendiente
  clearTimeout(blurTimeout); 
  isSearching.value = true;
};


const handleLogout = async () => {
    try {
        await logoutUser();
        router.push("/Login")
        toast.success('Session cerrada correctamente!!')
        console.log("Sesscion cerrada correctamente")
    } catch (error) {
        console.error("Error al cerra session", error)
        
    }
}


onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})


</script>

<style  scoped>
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

*,body,html{
    margin: 0;
    padding: 0;

}
.NavbarMobileBottoCont{
    display: flex;
    flex-direction: row;
    height: 70px;
    z-index: 90;
    position: fixed;
    background-color:white;
    top: 0;
    left: 0;
    right: 0;
    padding-bottom: 120px;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.2s ease-in-out; /* animación suave */

    

}
.ItemsMobileBotton{
  display: flex;
  flex-direction: row;
  margin: 15%;
  position: relative;
  top: 25px;
}
.ItemsMobileBotton i{
  margin-left: 5%;
  background-color: var(--gris-secundary);
  padding: 20%;
  border-radius: 10px;
}
.ItemsMobileBotton .fa-bell {
  color: #333;
  margin: 10%;
  font-size: 1.3rem;
  position: relative;
  left: 25px;
}
.ponte {
  transform: translateY(-20px); /* sube 20px */
  opacity: 0.2;
}
.InputSearch{
  position: absolute;
  top: 9%;
  left: 5%;
  width: 65%;
  height: 5%;
  border: none;
  background-color: #e2e2e2;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 20px;
  z-index: 9999;
  transition: all 0.4s ease;
  outline: none;
}

.InputSearch:focus{
  border: none;
}

.NavbarMobileBottoCont i{
    color: var(--primary-colorRed);
    margin: 5%;
    font-size: 1.2rem;
}
.NavbarMobileBottoCont i:active{
  transform: scale(1.12);
}
.NavbarMobileBottoCont .search{
    margin: 0;
    position: relative;
    left: 5%;
}

.logo_img{
    width: 55vw;
    height: 100%;
    margin-top: 5%;
    transition: all 0.4s ease; /* transición suave */
}    

.logo_img img{
    width: 100%;
}    

.panel {
  width: 68%;
  height: 65vh;
  background: white;
  color: blue;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  position:fixed;
  left: 2%;
  top: 10%;
  border-radius: 5%;
}

/* Transición izquierda → derecha */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
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
  transform: translateX(-100%);
  opacity: 0;
}



.User_header{
  width: 40%;
  height: 70%;
  position: relative;
  top: 30px;
  left: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.User_header span {
  margin: 5%;
  position: relative;
  bottom: 18%;
}

.User_header span i {
  font-size: 1.7rem;
  color: #333;
  z-index: 9999;
  transition: transform 0.2s ease-in-out; /* animación suave */

}

.User_header span h2{
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  color: #222;
  text-transform: capitalize;
}

.User_header span h3{
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #222;
  text-transform: capitalize;
}
.User_header span p {
  font-family: "Poppins", sans-serif;
  color: #999;
  font-size: 0.7rem;

}

.List_Opcion{
  width: 100%;
  height: 70%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  margin-bottom:10%;
  align-items: center;
  -ms-overflow-style: none;  /* IE y Edge */
  scrollbar-width: none;
  z-index: 10;
}
.List_Opcion ul{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100%;
}
.List_Opcion li{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  margin-top: 0;
  margin: 5%;
  margin-left: 25%;
  justify-content: start;
  align-items: center;
}
.List_Opcion a{
  display: flex;
  text-decoration: none;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  transition: all linear 0.5s ease-in;
}

.List_Opcion .Titulos{
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  margin: 4%;
  margin-left: 8%;
  width: 100%;
  color: #222;
}

.List_Opcion .iconos{
  font-size: 150%;
  opacity: 0.7;
  color: var(--primary-colorRed);
}

.List_Opcion a:active{
  scale: 1.05;
}

.Exit{
  position: absolute;
  bottom: 5%;
  left: 82%;
}
.Exit i {
  font-size: 180%;
  color: var(--primary-colorMak);
}


.SearchResult{
 position:absolute;   /* se posiciona respecto al contenedor padre */
  top: 15%;            /* distancia desde arriba */
  left:10%;              /* desde la izquierda */
  width: 75%;
  height: 40vh;         /* ancho fijo */
  max-height: 50vh;    /* altura máxima para scroll */
  overflow-y: auto;     /* scroll vertical si hay muchos resultados */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  z-index: 100000;  
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;  /* IE y Edge */
  scrollbar-width: none;
  justify-content: start;
  align-items: center;
}


.SearchResultsContainer {
    /* Posicionamiento: Fijo para que no se mueva con el scroll */
    position: fixed; 
    
    /* Ajusta top para que empiece justo debajo del navbar */
    top: 60px; 
    left: 0;
    right: 0;
    
    /* Apariencia */
    background-color: #ffffff; 
    border-top: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    
    /* Control de Scroll (para listas largas) */
    max-height: 80vh; 
    overflow-y: auto;
    
    z-index: 1000; 
}

/* ---------------------------------------------------- */
/* 2. Estilos de Ítems Individuales (search-item) */
/* ---------------------------------------------------- */
.search-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    margin: 0.5%;
    margin-top: 2%;
    width: 100%;
    height: 60%;
    max-width: 250px; 
    color: #333;
    border-radius: 25px;
    transition: background-color 0.2s;
    white-space:nowrap;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

}

.search-item:hover {
    background-color: #e2e2e2;
}

.search-item h2 {
    font-size: 1rem;
    overflow-x: auto;
    font-weight: bold;
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin: 5%;
    margin-top: 10%;
    align-items: center;
    width: 12rem;
    scrollbar-width: none;
    max-width: 300px;
}

.search-item p {
    font-size: 0.9rem;
    font-weight: bold;
    color: #007bff; 
    font-family: "Roboto", sans-serif;
    margin-left:5%;
    width: 30%;
}

/* ---------------------------------------------------- */
/* 3. Estilo para Mensajes de Error */
/* ---------------------------------------------------- */
.not-results {
    padding: 20px;
    text-align: center;
    color: #dc3545; /* Rojo para destacar el error */
    font-weight: 500;
    font-size: 1.5rem;
    justify-content: center;
    font-family: "Roboto";
}
.Notificacion {
    /* CRÍTICO: Debe estar fuera del flujo para que translateY funcione */
    position: fixed; 
    top:15%; 
    right: 5%;
    width: 90%; 
    max-width: 350px;
    flex-direction: column;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30%  15%;
    background-color: white;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 8px;
    z-index: 99999;
    padding: 15px;
    transform: translateY(0);
    opacity: 1;
}
.notify_cart{
  background-color: #c4dafa;
  border-radius: 20px;
  width: 80%;
  display: flex;
  flex-direction: row;
  height: 25%;
  padding: 5%;
  align-items: center;
  justify-content: space-between;

}
.notify_cart h2{
  color: var(--primary-colorRed);
  font-size: 0.85rem;
  text-align: start;
  margin: 2%;
  opacity: 0.8;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;

  
}
.notify_cart i {
  color: var(--primary-colorRed);
  font-size: 2rem;
  margin: 3%;
  opacity: 0.7;
}
.img_notify {
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  
}
.img_notify img{
  width: 300px;
  height: 100%;


}

/* ------------------------------------------- */
/* 3. CLASES DE TRANSICIÓN "REVEAL"            */
/* ------------------------------------------- */

/* Define la duración y las propiedades a animar */
.reveal-enter-active,
.reveal-leave-active {
    /* Animamos el movimiento (transform) y la transparencia (opacity) */
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-in-out;
}

/* Estado Inicial de Entrada: Empieza arriba y fuera de la vista */
.reveal-enter-from {
    transform: translateY(-120%); /* Lo desliza hacia abajo */
    opacity: 0;
}

/* Estado Final de Salida: Vuelve a deslizarse hacia arriba */
.reveal-leave-to {
    transform: translateY(-120%); /* Lo desliza hacia arriba */
    opacity: 0;
}







@media (max-width: 500px) and (min-height: 750px) {
  .InputSearch{
    top: 7%;
  }
  .SearchResult{
    top: 13%;
  }



  .User_header {
    width: 40%;
    position: relative;
    top: 25px;
  }

  .User_header span{
    position: relative;
    right: 20%;

  }

  .User_header span i{
    font-size: 2.2rem;
  }


}
</style>