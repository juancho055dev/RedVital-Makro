<template>
  <div class="welcome-container">
    
    <!-- ESTRUCTURA MODIFICADA PARA EL DIFUMINADO -->
    <div class="imagen-difuminada-wrapper">
        <span class="img_header">
            <!-- La imagen -->
            <img src="../../../public/images/logoredvital_navidad.jpg" alt="Logo Red Vital Navidad">
        </span>
        <!-- EL DIV DE GRADIENTE: Debe estar aquí para superponerse -->
        <div class="gradiente-overlay"></div> 
    </div>
    <!-- ----------------------------------------------- -->

    <h1>¡Bienvenido!</h1>
    <p>Por favor, inicia sesión o Registrate para continuar.</p>

    <span class="btns">

        <router-link to="/login">
            <button class="btn1" >
                Iniciar Seccion
            </button>
        </router-link>

        <!-- Corrección: Eliminado el doble '>' -->
        <router-link to="/signin">
            <button class="btn2">
                Registrate
            </button>
        </router-link>

    </span>
    <span class="footer_cart">
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
    </span>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
    
</script>

<style scoped>
*,body{
    background-color: #0635a1;
}
/* Estilos específicos para Welcome.vue */
.welcome-container {
  /* Asegúrate de que este contenedor sea transparente si quieres que se vea un fondo global */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* ---------------------------------------------- */
/* NUEVOS ESTILOS PARA EL DIFUMINADO              */
/* ---------------------------------------------- */

/* 1. Wrapper: El contenedor principal del difuminado (sustituye a .contenedor-imagen) */
.imagen-difuminada-wrapper {
    position: relative; /* Clave para posicionar el overlay */
    width: 100%;
    /* Define el alto deseado para la sección de la imagen */
    height: 250px;
    bottom: 23vh; 
    overflow: hidden;
}

/* 2. img_header y la imagen deben ocupar el 100% del wrapper */
.img_header,
.imagen-difuminada-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* 3. Estilos del Gradiente (Copiados y ajustados de imagen_difuminada.css) */
.gradiente-overlay {
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 50%; /* Altura del difuminado: 50% de los 250px del wrapper */
    pointer-events: none;

    /* Gradiente de transparente a negro (0, 0, 0, 0.9) */
    background: linear-gradient(
      to bottom,              
      transparent,            
      #0635a1      
    );
}

h1{
    font-family: "Poppins", sans-serif;
    color: white;
    font-size: 2.5rem;
    bottom: 22vh;
    position: relative;
}

p{
    font-family: "Poppins", sans-serif;
    color: white;
    font-size:1rem;
    font-weight: 500;
    margin: 5%;
    text-align: center;
    bottom: 22vh;
    position: relative;
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 5%;
    bottom: 25% ;
    width: 100%;
}

.btn1{
    background-color: transparent;
    padding: 7%;
    width: 250px;
    border-radius: 50px;
    border: 2px solid white; 
    color:white;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1.15rem;
    margin: 10px;
    margin-bottom: 20px;
}

.btn2{
    background-color: white;
    color: #0635a1;
    width: 250px;
    padding: 7%;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    font-size: 1.15rem;
    margin: 10;
}
.footer_cart{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5%;
}
.footer_cart i {
    color: white;
    font-size: 1.5rem;
    margin: 5%;
}
</style>