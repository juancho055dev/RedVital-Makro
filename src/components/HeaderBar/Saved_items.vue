<template>
    <div class="ContainerItems">
        <h2>Recorder </h2>
        <h3> My Items</h3>

        <i class="fa-regular fa-heart"></i>
    </div>
</template>

<script setup>
   
</script>

<style>

.ContainerItems{
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    h2{
        font-size: 1rem;
        color: #001E60;
        font-family: "Poppins", sans-serif;
        text-transform:capitalize;
        font-weight: 500;

    }

    h3{
        font-size: 1.2rem;
        color: #001E60;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        position: relative;
        bottom: 5px;
    }

    i{
        position: relative;
        bottom: 40px;
        right: 30px;
        font-size: 1.3rem;
        color: #001E60;
    }


}


</style>