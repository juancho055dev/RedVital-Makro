<template>
    <div class="account-container">

        <!--SINO ESTA LOGUEADO-->
        <div v-if="!UserStore.user">
            <router-link to="/Login" style="text-decoration: none;">
                <div class="ContainerSing ">
                    <i class="fa-regular fa-user"></i>
                    <h2>Sign In <br> Account </h2>

                </div>
            </router-link>  
        </div>
        <div v-else class="user-logueade">
            <div class="user-info">
                <i class="fa-regular fa-user"></i>
                <h2>Hola, {{ UserStore.userData.firstName  }} </h2>
             </div>

             <div>
                <i class="fa-solid fa-right-from-bracket" @click="handleLogout"></i>
             </div>
        </div>

    </div>
</template>

<script setup>

import { computed } from 'vue';
import { auth } from '../../Firebase/config';
import { useUserStore } from '../../store/UserStore';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { logoutUser } from '../../Firebase/auth';

const toast = useToast();
const UserStore = useUserStore();
const router = useRouter();


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



</script>

<style>

    .ContainerSing,.user-logueade{
        display: flex;
        margin-top: 15px;

        h2{
            font-family: "Poppins", sans-serif;
            color: #001E60;
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: capitalize;
            line-height: 1.1;

        }

        i{
            position: relative;
            right: 10px;
            font-size: 1.8rem;
            top: 5px;
            color: #001E60;
        }
    }
    .slide-enter-active, .slide-leave-active {
    transition: transform 0.8s ease, opacity 0.5s ease;
    position: absolute;
    width: 100%;
    }

    .slide-enter-from {
    transform: translateX(100%); /* entra desde la derecha */
    opacity: 0;
    }

    .slide-leave-to {
    transform: translateX(-100%); /* sale hacia la izquierda */
    opacity: 0;
    }

    .slide-enter-to, .slide-leave-from {
    transform: translateX(0);
    opacity: 1;
    }

</style>