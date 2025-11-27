import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const user = ref(null); //datos de firebase
    const userData = ref(null) ; //datos de firestore (nombre),(apellido)

    const IsloggedIn = computed(() => {
            return !!userData.value?.email
        });
    const userId = computed(() => {
        // Usa encadenamiento opcional para proteger contra user.value siendo null
        return user.value?.uid;
    });
    const setUser = (authUser, firestoreData) => {
        user.value = authUser;
        userData.value = firestoreData;
    };

    const cleaUser = () => {
        user.value = null;
        userData.value = null
        favorito.value = []; // ⬅️ ¡NO USAR 'null' AQUÍ!
    }

    
    return {user,userData, setUser, cleaUser,IsloggedIn,}
})