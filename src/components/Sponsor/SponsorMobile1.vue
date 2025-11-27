<template>
    <div class="main_container">
        <div class="Container_sponsor"> 
            <h2>Cientos de Productos en un Mismo lugar </h2>

            <router-link to="/welcome">
                <i class="fa-solid fa-chevron-right"></i>
            </router-link>

            <span>
                <img src="../../../public/images/sponsor/sponsor-user2.png" alt="" class="img_2">
                <img src="../../../public/images/sponsor/sponsor-user1.png" class="img_1">
                
            </span>

        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style  scoped>
.main_container{
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Container_sponsor{
    width: 95%;
    height: 100%;
    border-radius: 25px;
    background-color: var(--Tree-colorRed);
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow:
  0px 4px 6px -1px rgba(0, 0, 0, 0.1);
}


span{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
h2{
    width: 55%;
    text-align: start;
    height: auto;
    font-size: 1.1rem;
    margin: 5%;
    color: white;
    font-family: "Poppins", sans-serif;
}
.img_1{
    width: 80%;
    height: 100%;
    position: relative;
    right: 9.5rem;
    z-index: 9;
    opacity: 0.90;
    color: #333;
    object-fit: cover;
}
.img_2{
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0.95;
    position: relative;
    right: 2rem;
    object-fit: cover;
}
a{
    font-size: 2rem;
    color: white;
    position: relative;
    top: 2.5rem;
    right: 2rem;
}


</style>