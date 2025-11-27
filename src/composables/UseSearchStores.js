
import { ref, watch, computed, onMounted} from 'vue';
import Fuse from 'fuse.js';
import { useCarruselStoreMakro } from '../store/ItemsMakro';
import { useCarruselStoreRedvital } from '../store/ItemsRedvital';
// 💡 Asume que tus stores son 'useCarruselStoreMakro' y 'useCarruselStoreRedvital'


export function useSearchLogic() {
    
    // 1. OBTENER INSTANCIAS Y DATOS
    const makroStore = useCarruselStoreMakro();
    const redvitalStore = useCarruselStoreRedvital(); 
    
    // 2. ESTADO REACTIVO A DEVOLVER
    const query = ref(''); 
    const searchResults = ref([]);
    const isSearching = ref(false); // Para controlar el foco del input

    // 3. INICIALIZACIÓN DE FUSE (Se inicializa una vez con los datos del Store)
    const fuseMakro = computed(() => {
        // Asumiendo que 'allItems' es tu Getter que expone el array
        return new Fuse(makroStore.allItems, { keys: ['title', 'categoria', 'precio'], threshold: 0.4 });
    });
    
    const fuseRedvital = computed(() => {
        return new Fuse(redvitalStore.allItems, { keys: ['title', 'categoria', 'precio'], threshold: 0.4 });
    });

    // 4. VIGILANTE (WATCH): Ejecuta tu lógica de búsqueda CADA VEZ que 'query' cambia
    watch(query, (newQuery) => {
        let results = [];
        
        if (newQuery) {
            // Lógica de Búsqueda Cruzada (tu función anterior)
            const resMakro = fuseMakro.value.search(newQuery).map(r => r.item);
            const resRedvital = fuseRedvital.value.search(newQuery).map(r => r.item);
            results = [...resMakro, ...resRedvital];
        } else {
            // Lógica de No-Query
            results = [...makroStore.allItems, ...redvitalStore.allItems];
        }
        
        searchResults.value = results; // Actualiza el resultado reactivo
    }, { immediate: true }); // 💡 immediate: true para que se ejecute al inicio y cargue todos los ítems.

    // 5. LÓGICA DE VISIBILIDAD
    const shouldShowResultsPanel = computed(() => {
        return isSearching.value || query.value.length > 0;
    });

    return {
        query,
        searchResults,
        isSearching,
        shouldShowResultsPanel,
    };
}