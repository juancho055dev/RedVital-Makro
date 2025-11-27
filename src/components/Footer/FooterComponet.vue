<template>
    <div class="FooterHome">
        <div class="SponsorFooter">
            <img src="../../assets/protexsponsor.png" alt="">

        </div>

        <div  class="ContainerFooter">  
            <div class="FooterCategoria">
                <img src="../../assets/redvital_makro.png" alt="">

                <h2>Categorias</h2>

                <ul>
                    <li class="link">salud y  Medicamento</li>
                    <li class="link">salud y  Medicamento</li>
                    <li class="link">salud y  Medicamento</li>
                    <li class="link">salud y  Medicamento</li>

                </ul>
                <span>
                    <h2>Nuestras Tiendas</h2>

                    <ul>
                        <li class="link">Ubicar Nuestras tiendas</li>
                    </ul>
                </span>

                

            <span class="recaptcha">
                <img src="../../assets/logos_recaptcha.png" alt="">
            </span>

            </div>
            <div class="FooterFrom ">
                <h3>Unete A nosotros</h3>
                <form class="FromItems" @submit.prevent="submitForm">
                    <div class="fromName">
                       <span  class="nameFooter">
                         <input type="text" id="Name" class="Nameinput" @focus="IsfocusedName = true" @blur="IsfocusedName = inputNamevalue !== ''" v-model="inputNamevalue">
                         <label :class="{'is-focused' : IsfocusedName || inputNamevalue}" for="Name">
                            <h2 class="">nombre</h2>
                         </label>
                       </span>

                       <span class="lastnameFooter">
                         <input type="text" id="Lastname" class="LastNameinput" @focus="IsfocusedlastName  =  true" @blur="IsfocusedlastName = inputlastNamevalue !== ''" v-model="inputlastNamevalue">
                        <label for="Lastname" :class="{'is-focusedlastName' : IsfocusedlastName || inputlastNamevalue}">
                            <h2>apellido</h2>
                        </label>
                       </span>

                       <span class="emailFooter">
                         <input type="email" id="Email" class="Emailinput" @focus="IsfocusedEmail = true" @blur="IsfocusedEmail = inputEmailvalue !== ''"  v-model="inputEmailvalue">
                        <label for="Email" :class="{'is-focusedEmail' : IsfocusedEmail || inputEmailvalue }">
                            <h2>Email </h2>
                        </label>
                       </span>

                       <span class="checkFooter">
                        <input type="checkbox" id="Check" required>
                        <label for="Check" >
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, minus culpa ipsam quam </h2>
                        </label>
                       </span>

                       <span class="btnFooter">
                            <input type="submit" value="Enviar" id="BtnInput" >
                       </span>

                    </div>
                    <div class="FromImg">
                        <img src="../../assets/job.png" alt="">
                    </div>
                </form>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. deserunt at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates iure totam pariatur delectus impedit modi adipisci expedita excepturi dicta, consequuntur consequatur fugiat, nam, inventore nemo quis quo illo. Et?</p>
            </div>

        </div>


    </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref } from 'vue';

const IsfocusedName = ref(false);
const inputNamevalue =  ref('') ;

const IsfocusedlastName = ref(false);
const inputlastNamevalue = ref('');

const IsfocusedEmail = ref(false);
const  inputEmailvalue = ref('');



function handleInput(event){
    inputNamevalue.value = event.target.value
}

function handleInputLastname(event){
    inputlastNamevalue.value = event.target.value
}
function handleInputEmail(event){
    inputEmailvalue.value = event.target.value
}

const  submitForm = (event) => {
    event.preventDefault();
    console.log("Nombre:", inputNamevalue.value)
    console.log("Apellido:", inputlastNamevalue.value)
    console.log("Correo:", inputEmailvalue.value)

    Swal.fire({
    title: "Éxito!",
    text: "Formulario enviado correctamente",
    icon: "success",
    confirmButtonText: "Ok"
    
  });

  inputNamevalue.value =  '';
  inputlastNamevalue.value = '';
  inputEmailvalue.value = '';



};


    
</script>

<style scoped>
.nameFooter {
  position: relative;
  margin: 15px;
  background-color: #C9DCFD;
  border-radius: 20px;

  /* ...otros estilos... */
}
.lastnameFooter {
  position: relative;
  margin: 15px;
  border-radius: 20px;
  background-color: #C9DCFD;

  /* ...otros estilos... */
}
.emailFooter{
    position: relative;
    margin: 15px;
    border-radius: 20px;
    background-color: #C9DCFD;
}

.Nameinput{
    background-color: transparent;
    width: 100%;
    border: none;
    height: 30px;
    padding-left: 10px;
}
.LastNameinput{
    background-color: transparent;
    width: 100%;
    border: none;
    height: 30px;
    padding-left: 10px;
}

.Emailinput{
    background-color: transparent;
    width: 100%;
    border: none;
    height: 30px;
    padding-left: 10px;
}


.nameFooter label {
  position: absolute;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  left: 10px;
  font-size: 12px;
  transition: all 0.3s ease;
  /* ...otros estilos del label... */
}
.lastnameFooter label {
  position: absolute;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  left: 10px;
  font-size: 12px;
  transition: all 0.3s ease;
  /* ...otros estilos del label... */
}
.emailFooter label {
  position: absolute;
  text-transform: capitalize;
  font-family: "Poppins",sans-serif;
  font-size: 12px;
  left: 10px;
  transition: all 0.3s ease;
  /* ...otros estilos del label... */
}

.nameFooter label.is-focused {
  transform: translateY(-23px) scale(0.8);
  color: #03045E;
}

.lastnameFooter label.is-focusedlastName {
  transform: translateY(-23px) scale(0.8);
  color: #03045E;
}
.emailFooter label.is-focusedEmail {
  transform: translateY(-23px) scale(0.8);
  color: #03045E;
}

.fromName{
    display: flex;
    flex-direction: column;
    height: auto;
    
}
.FooterFrom{
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 25px;
    margin: 15px;
    width: 480px;
    height:500px;
    position: relative;
    align-items: center;
    left: 50px;

     h3{
        font-size: 2.5rem;
        font-family: "Poppins",sans-serif;
        color: #D9272E;
        width: 100%;
        position: relative;
        left: 20px;
        display: inline-block;
    }
    p{
        font-size: 0.7rem;
        width: 380px;
        color: #666;
        text-align:start ;
        position: relative;
        top:80px;
    }

}

.FromItems{
    display: flex;
    align-items: center;
   
}


.FooterCategoria{

    h2{
        color: #D9272E;
        font-family: "Poppins", sans-serif;
        position: relative;
        left: 15px;
        margin: 15px;
    }

    .link{
        margin: 5px;
        display: flex;
        font-family: "Poppins", sans-serif;
        font-size: 0.8rem;
        text-transform: capitalize;
        color: #D9272E;
        position: relative;
        left: 20px;
        font-weight: 300;
    }

    img{
        margin: 10px;
    }
}

.FooterHome{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    align-items: center;
}
.recaptcha{
    position: relative;
    right: 30px;
    top: 50px;
}
.SponsorFooter img{
    margin-top: 20px;
    width: 100%;
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
}
.checkFooter {
    display: flex;
    flex-direction: row;
}

.checkFooter input{
    position: relative;
    left: 10px;
}
.checkFooter h2{
    font-size: 0.7rem;
    width: 150px;
    margin: 10px;
    position: relative;
    left: 20px;
}
.btnFooter input{
    border: none;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 15px;
    width: 120px;
    background-color: #03045E;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
    left: 190px;
    top: 30px;
    border-radius: 30px;
}
.ContainerFooter{
    width: 80%;
    background-color: #C9DCFD;
    border-radius: 25px;
    height: 550px;
    display: flex;
    flex-direction: row;
}

</style>