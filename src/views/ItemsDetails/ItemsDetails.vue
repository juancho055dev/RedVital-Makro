<template>
    <div v-if="product" class="Idcontainer">
        <div class="Header_Check">
          <router-link to="/home">
              <i class="fa-solid fa-chevron-left"></i>
          </router-link>
            <h2 class="Titulo_Check">{{product.title}}</h2>

        </div>
        <div>

        </div>
        <NavbarMobileTop class="NavbarMobileTop" />



    </div>
</template>

<script setup>
import NavbarMobileTop from '../../components/HeaderBar/NavbarApp/NavbarMobileTop.vue';
import { computed, ref, watch } from 'vue';
import { useRoute} from 'vue-router';
import { useCarruselStoreRedvital } from '../../store/ItemsRedvital';
import { useCarruselStoreMakro } from '../../store/ItemsMakro';

const props = defineProps(['id'])
const route = useRoute();
const product = ref(null)

const ItemsRedvital = useCarruselStoreRedvital();
const ItemsMakro = useCarruselStoreMakro();

const BuscarProduct = () => {
    product.value = null
    if (!props.id) return;

    const idUrl = props.id;

    const esRedvital = idUrl.includes('redvital-');
    const esMakro = idUrl.includes('makro-')

    const idLimpio = idUrl.replace('redvital-', '').replace('makro-', '');

    console.log(`buscando el ID`)

    let encontrado = null;

    if (esRedvital) {
        encontrado = ItemsRedvital.items.find(i => String(i.id) === String(idLimpio));
    } else if (esMakro) {
        encontrado = ItemsMakro.items.find(i => String(i.id) === String(idLimpio));
    }

    if (encontrado) {
        product.value = { ...encontrado };
    } else {
        console.warn("No se encontró el producto en la tienda especificada");
    }
};
    

watch(
  [() => ItemsMakro.items, () => ItemsRedvital.items], 
  () => {
    BuscarProduct();
  }, 
  { deep: true, immediate: true } 
);


</script>

<style scoped>
    .Idcontainer{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

.Header_Check {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5% 7% 0% 7% ;

  }
  .Header_Check i{  
    font-size: 1.2rem;
    position: relative;
    color: var(--gris-primary);
    right: 30px;
  }
  .Titulo_Check{
    color: #333;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

</style>