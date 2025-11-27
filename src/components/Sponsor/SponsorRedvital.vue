<template>
    <div class="container">
        <img src="../../assets/RED-VITAL 1-Photoroom.png" alt="" class="img_logo">
        <img src="../../assets/cashea (2)-Photoroom.png" alt="" class="cashea_logo animate__bounce">
        
        <span class="linea_cotidiana">

            <h5>Línea Cotidiana para el día a día</h5>

            <img src="https://cdn.prod.website-files.com/632db6924fcc7661685adfa8/665eabd299d8b390fdc8d215_Image_Feature003-p-1600.webp" alt="" class="cashea_sponsor">

            
            
        </span>

        <div class="imgcasheaMobile"></div>
        <div class="imgcasheaMobile2"></div>
        
        <SearchComponent class="search_sponsor" />

    </div>
</template>

<script setup>

import SearchComponent from "../Search/SearchComponent.vue"
    
</script>

<style scoped>

.container{
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: start;
    flex-direction: row;

}

.img_logo{
    width: 400px;
    height: 400px;
    object-fit: contain;
    position: relative;
    bottom: 100px;

}
.cashea_logo{
    width: 280px;
    height: 200px;
    object-fit: contain;
    position: relative;
    right: 35px;
    
}

.imgcasheaMobile{
    display: none;
}
.imgcasheaMobile2{
    display: none;
}

.cashea_sponsor{
    width: 280px;
    height: 220px;
    object-fit: contain;
    position: relative;
    right: 60px;
    bottom: 80px;
    z-index: 1;
}
.linea_cotidiana{
    width: 350px;
}

.linea_cotidiana h5 {
    font-size: 1.4rem;
    position: relative;
    display: inline-block;
    top: 130px;
    color: #666;
    right: 45px;
    width: 280px;
    z-index: 10;
    text-align: center;
    font-family: "Poppins", sans-serif;
}

@media (max-width: 768px){
    .container{
        width: 95%;
        height: 10vh;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 16%;
        left: 2.5%;
        border-radius: 5px;
        box-shadow: 4px 4px 6px -1px rgba(0, 0, 0, 0.07);
    }
    .img_logo{
        width: 40%;
        height: 70%;
        object-fit: cover;
        position: relative;
        top: -5%;
        left: 2%;
    }
    .cashea_logo{
        width:65%;
        height: 100%;
        object-fit: contain;
        position: relative;
        right: 11%;
    }
    .linea_cotidiana{
        display: none;

    }
    .search_sponsor{
        display: none;
    }
    .imgcasheaMobile{
        display: block;
        background-image: url("https://cdn.prod.website-files.com/632e1b3fb161a903129c733e/654ceef7ab5aa29707e6f4fb_t1-p01.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 35%;
        height: 100%;
        position: relative;
        right: 22%;
    }
    .imgcasheaMobile2{
        display: block;
        background-image: url("https://uploads-ssl.webflow.com/632db6924fcc7661685adfa8/64923c8888284cdec8b077de_cashea.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 20%;
        height: 80%;
        position: relative;
        right: 18%;
    }

}

</style>