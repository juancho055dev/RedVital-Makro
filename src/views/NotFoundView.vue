<template>
  <div class="not-found">
    <img src="https://illustrations.popsy.co/blue/question-mark.svg" alt="">
    <h2>Página no encontrada</h2> 
    <p>La ruta que intentas acceder no existe.</p>
    <router-link to="/">
      <h3>Volver al inicio</h3>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>

.not-found {
  text-align: center;
  padding: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found img{
  width: 95%;
  height: 40%;
  position: relative;
  bottom: 10%;
}
a{
  text-decoration: none
}
h2{
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  margin-top: 5%;
  color: #222;
}

p{
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #666;
  margin: 5%;
}

h3{
  
  color:var(--primary-colorRed);
  text-transform: none;
}

</style>
