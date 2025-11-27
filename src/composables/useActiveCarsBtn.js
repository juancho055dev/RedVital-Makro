// composables/useDivisa.js
import { ref } from 'vue';

const activebtn = ref(false);
 // valor inicial 0

 export function useActivebtn() {   
        return {
            activebtn
        }
 }
