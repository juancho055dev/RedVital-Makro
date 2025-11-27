<template>
    <div class="ContainerSearch">

        <h3>Que estas Buscando!!</h3>
        <span class="Search" >
            <input type="text" placeholder="Search..." id="SearchHome">
            <label for="SearchHome"></label>

            <button type="submit" v>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </span>

    </div>
</template>

<script setup>

</script>

<style scoped>

.ContainerSearch{
    display: flex;
    width: 400px;
    height: 50px;
    background-color: #C9DCFD;
    position: relative;
    top: 100px;
    right: 30px;
    align-items: center;
    border-radius: 35px;
    transition: all 1s ease-in-out;
    
    h3{
        position: absolute;
        bottom: 60px;
        font-family: "Poppins", sans-serif;
        font-size: 1.8rem;
        right: 10px;;
        width: 100%;
        text-transform: capitalize;
        color: #C9DCFD;

    }

}


.ContainerSearch:hover{
    background-color: #023E8A;
    
}
.Search{
    align-items: center;
    margin: 8px ;
    margin-left: 20px;

    button{
        background-color: white;
        border: none; 
        padding: 12px 15px;
        border-radius: 50%;
        margin-left: 10px;
    }

}
#SearchHome{
    background-color: white;
    border: none;
    width: 250px;
    height: 30px;
    border-radius: 25px;
    padding: 10px 15px;

    
}
#SearchHome::placeholder{
    color: #001E60;
    position: relative;
    left: 10px;

}

</style>