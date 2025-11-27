import { useRouter } from "vue-router";
import { computed } from "vue";
import { useCarruselStoreMakro } from "../store/ItemsMakro";
import { useCarruselStoreRedvital } from "../store/ItemsRedvital";

export function useItemsFinder (){

    const route = useRouter();
     

    const ItemsMakro = useCarruselStoreMakro();
    const ItemsRedvital = useCarruselStoreRedvital();


    const itemsid = computed(() => route.params.id);


    const itemsdetalle = computed(() => {
        const idToFind = itemsid.value.toString();


        //Buscamos en el Store Makro 

        const MakroFind = ItemsMakro.allItems.find(
            (item) => item.id.toString() === idToFind
        );

        if(MakroFind){
            return MakroFind
        }
        const RedvitalFind = ItemsRedvital.allItems.find(
            (item) => item.id.toString() === idToFind
        );
        
        return MakroFind
    })

    return{
        itemsdetalle
    };

}

