<template>
    <div class="ContainerCart">
        <div class="cartitems">
            <span class="cart_itemsSup">
                <i class="fa-solid fa-xmark" @click="ToggleCartXmark"></i>

                <h2>hola mundo</h2>
            </span>
            <transition-group name="fade">
                <span class="cart_itemsMid" v-if="cars.items.length > 0">
                    <div v-for="item in cars.items" key="item.id" class="cart_itemsBody">
                        <div class="Items_cartActive">
                            <img :src="item.url" alt="">
                            <span>
                                <h2 >{{item.title}}</h2>
                                <h3> x{{item.qty}} Bs {{item.precio}}</h3>    
                            </span>
                            <button @click="RemoveItems(item.id)" class="btn_tarshCart">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    
                </span>
            </transition-group>

            <hr>
            <div class="TotalPrice">
                        <h2>
                            Total
                        </h2>
                        <span>
                            <h3>$ {{cars.totalPrice}}</h3>
                            <h3>Bs. {{TotalUsd}}</h3>
                        </span>

            </div>

            <router-link to="/Checkout" class="btn__Pagos">
                <button>Checkout</button>
            </router-link>

           
        </div>


    </div>
</template>

<script setup>
import { computed, onUnmounted } from 'vue';
import { useCarsStore } from '../../store/CarsStore';
import { useToast } from 'vue-toastification';
import { useDivisas } from '../../composables/useDivisas';
import { useActivebtn } from '../../composables/useActiveCarsBtn';
const {divisaEUR, divisaUSD} = useDivisas();

const { activebtn: activeCartbtn } = useActivebtn();

const ToggleCartXmark = () => {
    activeCartbtn.value = !activeCartbtn.value
    console.log("Xmark cerrando ")

}


const TotalUsd = computed(() => {
    return cars.totalPrice * divisaUSD.value;
})

const cars = useCarsStore();
const toast = useToast();

const RemoveItems = (id)  => {
    cars.removeItem(id);

    toast.error("Producto eliminado del Carrito");
}
</script>

<style>

hr{
    width: 90%;
    position: relative;
    left: 15px;
    border-radius: 20px;
}
.btn__Pagos{
    width: 85%;
    position: relative;
    background-color: #023E8A;
    border-radius: 10px;
    height: 50px;
    top: 30px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn__Pagos button{
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
}
.TotalPrice{
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.TotalPrice h2{
    font-family: "Poppins",sans-serif;
    font-size: 1.3rem;
    color: #666;
    margin: 5px;
    position: relative;
    top: 10px;
    left: 5px;
}
.TotalPrice span{
    width: 100px;
    position: relative;
    top: 15px;
    margin: 10px;
    justify-content: center;
    display: flex;
    
    flex-direction: column;
    align-items: center;
}
.TotalPrice span h3{
    font-size: 1rem;
    color: #333;
    font-family: "Roboto",sans-serif;
}
.btn_tarshCart{
    border: none;
    width: 50px;
    background-color: #e5383b;
    border-radius: 15px;
    transition: all 500ms;
}
.btn_tarshCart:active{
    background-color: #780000;
    transform: scale(0.8);
}
.btn_tarshCart i {
    color: white;
}
.cart_itemsBody{
}
.Items_cartActive {
    width: 100%;
    height: 50px;
    display: flex;
    margin: 10px;
}
.Items_cartActive img{
    width: 50px;
    object-fit: contain;
    height: 50px;
}
.Items_cartActive span h2{
    font-size: 1.1rem ;
    color: #666;
    max-width: 130px;
    overflow-y: auto;
    white-space: nowrap;
     font-family: "Poppins", sans-serif;
    margin: 5px;
    -ms-overflow-style: none;  /* IE y Edge */
    scrollbar-width: none;
}
.Items_cartActive span h2::-webkit-scrollbar{
    display: none;
}

.Items_cartActive span h3{
    font-size: 0.9rem;
    color:#e5383b;
    font-family: "Roboto",sans-serif;
    margin: 5px;
}
.cart_itemsMid{
    width: 100%;
    height: 190px;
    overflow-y:auto ;
    overflow-x: hidden;
}
.cart_itemsMid::-webkit-scrollbar{
    width: 0;
}
.cart_itemsSup{
    display: flex;
    margin: 5px;
    justify-content: center;
    justify-content: space-between;
}

.cart_itemsSup i{
    margin: 5px;
    font-size:1.5rem;
    color: #023E8A;
}
.cart_itemsSup h2{
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    text-transform: capitalize;
    position: relative;
    right: 70px;
    color: #333;
}

.ContainerCart {
    width: 300px;
    height: 400px;
    border-radius: 25px;
    background-color: #8FBFFA;
    font-size: 1;
    justify-content: center;
    align-items: center;
    display: flex;
}

.cartitems{
    position: relative;
    width: 90%;
    height: 90%;
    background-color: white;
    display: flex;
    border-radius: 25px;
    flex-direction: column;
}


.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>