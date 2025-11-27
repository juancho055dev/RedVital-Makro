<template>
    <div class="ContainerSign_In">
        <div class="Sign_In">
            
            <div class="Sign_InHead">
                <router-link to="/">
                    <i class="fa-solid fa-chevron-left"></i>
                </router-link>
                 <img src="../../assets/logo_makro+redvital.png" alt="">
            </div>
            <div class="Sign_InBody"> 
                <h2>Iniciar Session</h2>
                <form class="FormSign_In" @submit.prevent="LoginAuth">

                        <input type="email" v-model="email" autocomplete="off" id="email"/>
                        <label for="email" class="email"><h3>email</h3></label>
                        <input type="password" v-model="password"  autocomplete="off" id="password">
                        <label for="password" class="password"> <h3>Password</h3></label>

                       <span class="check">
                         <span>
                            <input type="checkbox" id="Check"/>
                        <label for="Check">Remenber me</label>
                         </span>
                        <span>
                            <a>Olvido su contrasena?</a>
                        </span>
                       </span>

                        <button type="submit" class="btn_login">Continuar</button>

                        <div class="Sign_inFooter">
                            <h3>O Inicia con </h3>

                            <span class="btn_socials">
                                <i class="fa-brands fa-google"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-apple"></i>
                            </span>

                            <p>Aun no tienes cuenta? <router-link to="/SignIn">Registrate</router-link></p>
                        </div>
                </form>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { loginUser } from '../../Firebase/auth';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../store/UserStore';

//Variables Reactivas
const email = ref('')
const password = ref('')
const message = ref('')
const toast = useToast();
const typemessage = ref('');
const router = useRouter();
const UserStore = useUserStore();




const LoginAuth = async () => {
    try{
        ValidLogin()

        const {user, userData} = await loginUser(email.value, password.value)
        UserStore.setUser(user, userData);


        toast.success(`Bienvenido ${userData?.FirstName || ''}!`);
        console.log('usuario logueado efectivamente ', user)

        //limpia los input

        email.value = ''
        password.value = ''

         // Redirigir a la página principal o dashboard
         router.push("/")
    }
    
    catch (error){
        toast.error(`Password on Emails Invalid`) // Notificacion Error del formulario
        console.error('Error en Regista:', error);
        
    }

    setTimeout(() => {
        message.value = ''
    },1000)
    
}

const ValidLogin = () => {
    if(!email.value.trim() || !password.value.trim()){
        throw new Error ('Por Favor Completar los Campos ')
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
            throw new Error('El correo no es válido')
    }
    return true
}
    
</script>

<style scoped>

.ContainerSign_In{
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

}
.Sign_In{
    width: 100%;
    height: 85%;
    border-radius: 30px 150px;
    background-color: #84b6f4;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.Sign_InBody h2{
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: white;
    text-align: center;
    margin: 10px;
}
.Sign_InHead i{
    font-size: 1.8rem;
    position: relative;
    color:white;

    bottom: 82%;

}
.Sign_InHead img{
    width: 90%;
    height: 80%;
    object-fit: contain;
}
.Sign_InBody{
    width: 90%;
    height: 75%;
    border-radius: 150px 5px 5px 5px;
}
.FormSign_In{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
#email{
    width: 70%;
    height: 2rem;
    position: relative;
    color:#666;
    top: 45px;
    margin-left: 10px;
    background-color: transparent;
    border: none;

    input{
        border: none;
        outline: none;
    }
}
input[type="email"]:focus{
    border: none;
    outline: none;
}
input[type="password"]:focus{
    border: none;
    outline: none;
}

#password{
    width: 70%;
    height: 2rem;
    position: relative;
    top: 45px;
    color:#666;
    margin-left: 10px;
    background-color: transparent;
    border: none;
}
.email,.password{
    width: 70%;
    border-radius: 25px; 
    height: 3rem;
    background-color: white;
}

.email h3,.password h3{
    font-family: "Roboto";
    font-size: 0.8rem;
    margin: 5px;
    margin-left: 15px;
    text-transform: capitalize;
    color: #333;
}
.check{
    position: relative;
    top: 10px;
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
}

.check span label{
    color: white;
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    margin: 5px;
}
.check span a{
    color: #333;
    font-family: "Poppins",sans-serif;
    font-weight: bold;
    font-size: 0.80rem;
    margin: 5px;

}
.btn_login{
    width: 65%;
    height: 3rem;
    border: none;
    margin: 20px;
    border-radius: 25px;
    background-color: #0635a1;
    font-family: "Roboto",sans-serif;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
}
.btn_socials i{
    color: white;
    font-size: 2rem;
    align-items: center;
    margin: 7px;
}
.Sign_inFooter h3{
    font-family: "Poppins",sans-serif;
    font-size: 1rem;
    color: white;
    margin: 10px
}
.Sign_inFooter{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.Sign_inFooter p{
    font-size: 0.8rem;
    color: #222;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    align-items: center;
    margin: 10px;

    a{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: #0635a1;
    }

}



@media (max-width: 768px){

    .Sign_In{
        width: 85%;
        height: 80%;
    }

}




</style>