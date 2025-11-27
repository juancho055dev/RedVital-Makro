<template>
    <div class="ContainerHeader">
        <span class="img_logo">
            <img src="../../assets/logo_makro+redvital.png" alt="">
        </span>

        <PickupLocation />
        
        <div class="mainContainerHeader">

            <Saved_items  />

            <Sing_in  />
                
            <CardShop  />

        </div>
        <div class="ContainerFilter_header">
            <FilterBar />
        </div>
    </div>
</template>

<script setup>
    import PickupLocation from "./PickupLocation.vue"
    import CardShop from "./CarShop.vue"
    import Sing_in from "./Sing_in.vue";
    import Saved_items from "./Saved_items.vue";
    import FilterBar from '../FilterBar/FilterBar.vue';
import { UseScreen } from "../../composables/useScreen";

    const { SizeMobile } = UseScreen();
</script>

<style scoped>



.ContainerHeader{
    display: flex;
    flex-direction: row;
    height: 70px;
    z-index: 90;
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    right: 0;
     box-shadow: 0 2px 8px rgba(0,0,0,0.1);
     overflow: hidden;
    
}

.mainContainerHeader{
        display: flex;
        width: 30%;
        justify-content: space-between;
        position: relative;
        left: 90px;
        top: 5px;
}
.ContainerFilter_header {
  position: fixed;
  top: 70px;   /* 👈 justo debajo del header */
  left: 0;
  right: 0;
  background-color: white;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  padding-top:40px ;
  
  
}

.img_logo{
    position: relative;
    left: 10px;
    bottom: 20px;;
}

</style>