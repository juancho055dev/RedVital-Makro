<template>
    <div class="ContainerSignIn">
        <div class="SignIn">
            <div class="SignInHead">
                <router-link to="/Login">
                    <i class="fa-solid fa-chevron-left"></i>
                </router-link>
                 <img src="../../assets/logo_makro+redvital.png" alt="">
            </div>
            <div class="SignInBody"> 
                <h2>Registrate</h2>
                <form class="FormSignIn" @submit.prevent="handleRegister">

                        <input type="text" v-model="FirstName" autocomplete="off" id="First_Name"/>
                        <label for="First_Name" class="firstname"><h3>Primer Nombre</h3></label>

                        <input type="text" v-model="LastName" autocomplete="off" id="Last_Name">
                        <label for="Last_Name" class="lastname"> <h3>Apellido</h3></label>

                        <input type="email" v-model="email" autocomplete="off" id="email">
                        <label for="email" class="email"> <h3>Email</h3></label>

                        <input type="password" v-model="password" autocomplete="off"  id="password">
                        <label for="password" class="password"> <h3>Contrasena</h3></label>

                        <input type="password" v-model="passwordConfirm" autocomplete="off" id="password2">
                        <label for="password2" class="confirmpassword"> <h3>Confirmar contrasena?</h3></label>


                        <button type="submit" class="btn_login">Continuar</button>

                        <div class="SigninFooter">
                            
                            <p>Ya te haz registardo antes? <router-link to="/Login">Log In</router-link></p>
                        </div>
                </form>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { registerUser } from '@/firebase/auth'  
import {db} from  '@/firebase/config';// ✅ Importa solo la funciónimport {db} from '@/firebase/config';
import {doc, setDoc} from 'firebase/firestore'
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const FirstName =ref('');
const LastName = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm =ref('')
const toast = useToast();
const message = ref('');
const router = useRouter();

const validPassword = ()  => {
    if(!email.value || !password.value || !passwordConfirm.value){
        throw new Error ('Por Favor Completar los Campos ')
    }
    
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        throw new Error('El correo no es válido')
    }
    if (password.value.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres')
    }
    if(password.value !== passwordConfirm.value) {
        throw new Error('The passwords do not match')
    }
    return true

}


//funcion que guarda los Dastos en Firestore
const saveSavetoFirestore = async(user) => {
    await setDoc(doc(db, 'users', user.uid),{
        firstName: FirstName.value,
        lastName: LastName.value, 
        email: email.value,
        createdAt: new Date()
    })
}

const handleRegister = async () =>{
    try {
        validPassword()


        //crea el usuario con los parametros pedidos Siepre con Email y Password
        const user = await registerUser(email.value, password.value,FirstName.value,LastName.value,)
         
        //guarda la minima info en firestore
        await saveSavetoFirestore(user)

        toast.success('Usuario Registrado Exitosamente')
        console.log('usuario registrado y creado exitosamente en forestore', user)

        //limpia los input
        FirstName.value = ''
        LastName.value = ''
        email.value = ''
        password.value = ''
        passwordConfirm.value = ''

        router.push("/Login")
    }
    
    catch (error){
        toast.error(`❌ ${error.message}`) // Notificacion Error del formulario
        console.error('Error en Registar:', error);
        
    }

    setTimeout(() => {
        message.value = ''
    },1000)
    
}

</script>

<style scoped>

.ContainerSignIn{
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.SignIn{
    width: 37%;
    height: 50%;
    border-radius: 180px 35px;
    background-color: #84b6f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.SignInBody h2{
    font-family: "Poppins", sans-serif;
    font-size: 2.1rem;
    color: white;
    text-align: center;
    margin: 10px;
}
.SignInHead {
    position: relative;
    bottom: 0%;
}
.SignInHead i {
    position: relative;
    bottom: 20px;
    right: 25px;
    font-size: 1.8rem;
    color: #0635a1;
}

.SignInHead img{
    width: 90%;
    height: 80%;
    object-fit: contain;
    position: relative;
    left: 25px;
}
.SignInBody{
    width: 90%;
    height:80%;
}
.FormSignIn{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    align-items: center;
}
#First_Name{
     width: 70%;
    height: 1rem;
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

#Last_Name{
     width: 70%;
    height: 1rem;
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



#email{
    width: 70%;
    height: 1rem;
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
input[type="text"]:focus{
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

#password2{
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
.email,.password,.firstname,.lastname,.confirmpassword{
    width: 70%;
    border-radius: 10px; 
    height: 3rem;
    background-color: white;
}

.email h3,.password h3, .confirmpassword h3, .firstname h3, .lastname h3{
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
    font-size: 0.80rem;
    margin: 5px;
}
.check span a{
    color: #666;
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
    border-radius: 10px;
    background-color:#0635a1;
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
.SigninFooter h3{
    font-family: "Poppins",sans-serif;
    font-size: 1rem;
    color: white;
    margin: 10px
}
.SigninFooter{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.SigninFooter p{
    font-size: 0.8rem;
    color: #222;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    align-items: center;
    margin: 10px;
    text-transform: capitalize;

    a{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        color: #0635a1;
        text-decoration: none;
    }

}



@media (max-width: 768px){
    .SignIn{
        width: 85%;
        height: 80%;
    }
    .SignInHead i{
        right: 15px;
    }
    .SignInBody{
        height: 85%;
    }

}
    

</style>