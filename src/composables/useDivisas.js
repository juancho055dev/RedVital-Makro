// src/composables/useDivisas.js

import { ref } from 'vue';

// 1. Declara las referencias reactivas
const divisaUSD = ref(240.39);

const divisaEUR = ref(111111);

export function useDivisas() {


    function convertTotal(priceUSD){

        const rate = divisaUSD.value;


        const base = Number(priceUSD) || 0;


        return base * rate;
    }

    function updateUSD(newRate){
        divisaUSD.value = Number(newRate);
    }


    return {
        divisaUSD, 
        divisaEUR, 
        updateUSD,
        convertTotal
    }
}