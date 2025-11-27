<template>
    <div class="ConvertDivisa">
        <div class="Divisaconvert">
            <i class="fa-solid fa-money-bill-1"></i>

            <h2>Usd/Bs = {{divisaUSD}}</h2>
            <h2>Eur/Bs = {{divisaEUR}}</h2>


        </div>

    </div>
</template>

<script setup>
import { useDivisas } from '../../composables/useDivisas.js';

const {divisaEUR, divisaUSD} = useDivisas();

</script>

<style >

.ConvertDivisa{
    position: absolute;
    display: flex;
    flex: 20px;
}

.Divisaconvert{
    position: fixed;
    left: 85%;
    border-radius: 30px 10px;
    bottom: 40px;
    z-index: 100;
    flex-direction: column;
    background-color: #99d98c;
    width: 140px;
    height: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.Divisaconvert i{
    font-size: 2.5rem;
    color: white;
    position: relative;
    bottom: 5px;
    
}
.Divisaconvert h2{
    font-size: 1rem;
    color: white;
    font-family: "Roboto";
    margin: 1px;
}


</style>