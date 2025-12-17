<template>
    <div class="OfertWrapper">
        <div class="HeaderTitle">
                <router-link to="/home">
                    <i class="fa-solid fa-chevron-left"></i>
                </router-link>
            
                <h1  class="Ofert_Title">Ofertas</h1> 
        </div>

        <div class="Body_container">
            <h2>Disculpa Aun Estamos en Mantenimiento Pronto podras disfrutar de las Ofertas</h2>

            <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-mantenimiento_114360-381.jpg" alt="">

        </div>

    </div>
    

     <NavbarMobileTop class="NavbarMobileTop" />


</template>

<script setup>
import NavbarMobileTop from '../../components/HeaderBar/NavbarApp/NavbarMobileTop.vue';


</script>

<style  scoped>
    .OfertWrapper{
        width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    }

.HeaderTitle{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5% 7% 0% 7% ;
}
.HeaderTitle i{
    font-size: 1.2rem;
    position: relative;
    color: var(--gris-primary);
    right: 100px;
    

}
.Ofert_Title{
    color: #333;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

.Body_container{
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
    margin: 0 5%;

}

.Body_container h2{
    font-size: 1.5rem;
    color: var(--primary-colorRed);
    font-family: Poppins, sans-serif;
    text-align: center;
    text-transform: capitalize;
}

.Body_container img{
    width: 80%;
    height: 50%;
}





    @media (max-width: 768px) {

  .NavbarMobileTop{
    position: fixed;
    z-index: 99999;
    bottom: 0;
  }
}

</style>