<template>
    <div class="ContainerMain">

       <div class="Botton_bar">
             <span>
                <router-link to="/home" > 
                    <i class="fa-solid fa-chevron-left"></i>
                </router-link>
             </span>

            <h2>Cuenta</h2>
       </div>

       <div class="Boddy_user">
            <span class="cart_user1">
                <i class="fa-solid fa-user"></i>
            </span>

            <span class="cart_user2"  v-if="IsloggedIn">
                <h3>{{ UserStore.userData.firstName}}</h3>
                <h4>{{UserStore.userData.email}}</h4>
            </span>
            <span v-else class="cart_user2">
                <h3>Invitado</h3>
                <h4>Inicia Session!!</h4>
            </span>

            <span class="cart_user3">
                <router-link to="/home"> 
                    <i class="fa-solid fa-pen-to-square"></i>
                </router-link>
            </span>
       </div>

       <h1>Setting</h1>

       <div class="setting_cart">
            <router-link>
                <span>
                    <i class="fa-solid fa-circle-user"></i>
                    <h2> Detalles de Cuenta</h2>
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </router-link>
            <router-link>
                <span>
                   <i class="fa fa-bell"></i>
                   <h2>Notificaciones</h2>
                   <i class="fa-solid fa-chevron-right"></i>
                </span>
            </router-link>
            <router-link to="/welcome">
                <span>
                    <i class="fa-solid fa-user-plus"></i>
                    <h2>Iniciar Session</h2>
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </router-link>
            <a  @click="handleLogout">
                <span>
                    <i class="fa-solid fa-right-to-bracket"></i>
                    <h2>Cerrar Session</h2>
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </a>
       </div>
    </div>
    

       <NavbarMobileTop />
</template>

<script setup>

import { RouterLink } from 'vue-router';
import { useUserStore } from '../store/UserStore';
import { computed } from 'vue';
import { useToast,} from 'vue-toastification';
import NavbarMobileTop from '../components/HeaderBar/NavbarApp/NavbarMobileTop.vue';
import { logoutUser } from '../firebase/auth';


const UserStore = useUserStore();
const toast = useToast();


const IsloggedIn = computed(() => {
    return !!UserStore.userData?.email
  });


const handleLogout = async () => {
    try {
        await logoutUser();
        toast.success('Session cerrada correctamente!!')
        console.log("Sesscion cerrada correctamente")
    } catch (error) {
        console.error("Error al cerra session", error)
        
    }
}

</script>


<style scoped>

h1{
    font-size: 1.5rem;
    color: #333;
    position: relative;
    margin: 2%;
    top: 2%;
    position: relative;
    right: 30%;
    font-family: "Poppins", sans-serif;
}


.ContainerMain{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.Botton_bar{
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    gap: 20%;
    justify-content: start;
    align-items: center;
}
.Botton_bar span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px;
    margin-left: 20px;
    background-color: var(--gris-secundary);
}

.Botton_bar span a i{
    color: var(--gris-primary);
}

.Botton_bar h2{
    font-family: "Poppins", sans-serif;
    color: #333;
    font-size: 1.7rem;
}

.Boddy_user{
    background-color: var(--gris-secundary);
    width:90% ;
    height: 13vh;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.cart_user1{
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
}
.cart_user1 i{
    color: #333;
    font-size: 2.5rem;
}
.cart_user2{
    width: 60%;
    height: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
}

.cart_user2 h3{
    font-size: 1.5rem;
    color: #333;
    text-transform: capitalize;
    font-family: "Poppins",sans-serif;
}

.cart_user2 h4{
    color: #666;
    font-size: 0.8rem;
    text-transform: capitalize;
    font-family: "Poppins",sans-serif;
}
.cart_user3 {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart_user3 i{
    color: #333;
    font-size: 1.2rem;
}

.setting_cart{
    width: 100%;
    height:60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none;
    white-space: nowrap;
}
.setting_cart a {
    width: 90%;
    margin: 5%;
    height: 8vh;
    text-decoration: none;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--gris-secundary);
}

.setting_cart span {
    justify-content: space-between;
    display: flex;
    width: 90%;
    align-items: center;
}

.setting_cart span h2{
    font-family: "Poppins", sans-serif;
    color: #666;
    font-size: 1.3rem;
}
.setting_cart span i{
    font-size: 1.5rem;
    color: #666;
}
</style>