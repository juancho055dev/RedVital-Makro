<template>
    <div class="NavbarContainer">
        <span>
            <router-link to="/"  routerLinkActive="active-link" class="Items_Link">
                <i class="fa-solid fa-house"></i>
                <span class="TitleIcons">Home</span>
            </router-link>
        </span>
        <span>
            <router-link to="/checkout"  class="Items_Link">
                <span class="svg_icono"> <img src="../../../assets/shopping-bag.svg" alt=""></span>
                <span class="TitleIcons">Compras</span>
            </router-link>
        </span>
        <span>
            <router-link to="/Ofertas"  class="Items_Link">
                <i class="fa-solid fa-tags"></i>
                <span class="TitleIcons">Ofertas</span>
           </router-link>
        </span>
        <span >
            <router-link to="/Accounts" class="Items_Link">
                <i class="fa-regular fa-user" > </i>

                <span class="TitleIcons">Cuenta</span>
            </router-link>
        </span>

        <div class="ItemCounter">
            <h5>
        {{cars.itemsCounter}}</h5>
    </div>
    </div>

    
</template>

<script setup>
import { useCarsStore } from '../../../store/CarsStore';

const cars = useCarsStore();



</script>

<style  scoped>


.NavbarContainer{
    display: flex;
    flex-direction: row;
    height: 65px;
    z-index: 9999;
    position: fixed;
    background-color: white;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    justify-content: space-evenly;
}

.NavbarContainer span {
    margin: 5%;
}
.NavbarContainer span i{
    font-size: 1.5rem;
    z-index: 999;
    color: black;
    transition: transform 0.2s ease-in-out; /* animación suave */

}

.NavbarContainer span i:active{
    transform: scale(1.2);
}
.ItemCounter{
    position: absolute;
    width: 6%;
    height: 35%;
    display: flex;
    background-color: #84b6f4;
    border-radius: 50%;
    right: 55%;
    bottom: 55%;
    z-index: 10;
    justify-content: center;
    align-items: center;
}
.ItemCounter h5{
    font-family: "Roboto", sans-serif;
    color:white;
}
.Items_Link{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    color: #333;
    padding: 2%;
}
.svg_icono img{
    object-fit: contain;
    width: 35px;
    

}

.svg_icono {
    position: relative;
    bottom: 10px;
    width: auto;
    height: 18px;
}


.TitleIcons{
    margin-top: 0px;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
}

</style>