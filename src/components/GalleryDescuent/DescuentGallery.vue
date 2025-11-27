<template>
    <div class="Container_gallery">

        <div class="gallery_1">
            <img src="../../assets/gallery_1.png" alt="">
            <span class="GalleryOff">
                <img src="../../assets/Logo_makro1.png" alt="">

                <i class="fa-solid fa-plus"></i>

                <span class="OfertGallery">
                    <h2>Ofertas</h2>
                    <ul>
                        <li>25% Off</li>
                        <li>30% Off</li>
                        <li>35% Off</li>
                    </ul>
                </span>
            </span>
        </div>
        <div class="ContainGallery">
            <div>
                <img src="../../assets/gallery_2.png" alt="">
            </div>
            <div>
                <img src="../../assets/gallery_3.png" alt="">
            </div>


        </div>
        

    </div>
</template>

<script setup> 
    
</script>

<style scoped >

.Container_gallery{
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100%;
    z-index: 1;
}

.GalleryContainer{
    display: flex;
    flex-direction: column;
    height:  100%;
    justify-content: center;

    img{
        height: 50%;
    }
}
.GalleryOff{
    display: flex;
    flex-direction: row;
    width: 100%;

    img{
        width: 40%;
        height: 60%;
        margin: 15px;
    }

    i{
        font-size: 2.5rem;
        color: #FFC220;
        position: relative;
        top: 25px;

    }
}

.OfertGallery{
    background-color: #FFC220;
    border-radius: 25px;
    width: 50%;
    margin: 10px;
    height: 80%;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 3rem;
        color: #CE1924;
        position: relative;
        left: 10px;
        font-family: "Poppins", sans-serif;
    }
    ul{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 15px;
        text-align: center;
        
    }
    li{
        display: flex;
        padding: 5px;
        font-size: 0.7rem;
        background-color: #CE1924;
        color: white;
        border-radius: 20px 10px 20px 10px;
        margin-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
        font-family: "Poppins", sans-serif;
        box-shadow: 1px 5px 30px 0px rgba(0,0,0,0.20);
        animation: pulso-oferta 2s infinite;

    }

   
}
 @keyframes pulso-oferta {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

</style>