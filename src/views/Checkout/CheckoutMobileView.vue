<template>

    <div class="HomeWrapperMobile" v-if="SizeMobile">
        <div class="Header_Check">
          <router-link to="/home">
              <i class="fa-solid fa-chevron-left"></i>
          </router-link>
            <h2 class="Titulo_Check">Mi Carrito</h2>

        </div>

        <transition-group name="fade">
                <span class="cart_itemsMid" v-if="cars.items.length > 0">
                    <div v-for="item in cars.items" key="item.id" class="cart_itemsBody">
                        <div class="Items_cartActive">
                            <span class="cart1">
                              <img :src="item.url" alt="" class="Img_cart">
                            </span>
                            <span class="cart2">
                                <h1 class="titles">{{item.title}}</h1>
                                <p>{{item.categoria}}</p> 

                                <div class="item-footer">
                                    <h6> $ {{item.precio}} </h6>
                                    <h5> Bs: {{convertTotal(item.precio).toFixed(2)}} </h5>

                                    <button @click="RemoveItems(item.id)" class="btn_tarshCart">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>

                                    <div class="Items_cart">
                                        <button @click="cars.decreaseItem(item.id)">-</button>
                                        <h4>{{cars.getItemQty(item.id)}}</h4>
                                        <button @click="cars.increaseItem(item.id)" >+</button>
                                    </div>
                                </div>
                            </span>
                
                        </div>
                      
                    </div>
                    
                </span>
            </transition-group>


            <div class="TopCheck">
                      <span class="Title_Check">
                        <h2>SubTotal</h2>
                        <h3>${{cars.totalPrice.toFixed(2)}}
                        </h3>
                      </span>
                      <span class="Title_Check">
                        <h2>Delivery</h2>
                        <h3>$1.50</h3>
                      </span>
                      <span class="Title_Check">
                        <h2>Total</h2>
                        <h5>$ {{cars.totalPrice.toFixed(2)}} <br> Bs: {{convertTotal(cars.totalPrice).toFixed(2)}}</h5>
                        
                      </span>
                      <span class="btn_Checkout">
                        <router-link to="/Payments">
                          <span> 
                              <i class="fa-solid fa-chevron-left"></i>                          
                               <h6>Checkout</h6>  
                          </span>
                          
                        </router-link>
                      </span>
                    </div>
      
      

  </div>
</template>

<script setup>
import { POSITION, useToast } from 'vue-toastification';
import { UseScreen } from '../../composables/useScreen';
import { useCarsStore } from '../../store/CarsStore';
import { RouterLink, useRouter } from 'vue-router';
import { useDivisas } from '../../composables/useDivisas';


const {convertTotal} = useDivisas();
 
const toast = useToast();
const cars = useCarsStore();
const SizeMobile = UseScreen();


const RemoveItems = (id)  => {
    cars.removeItem(id);

    toast.error("Producto eliminado del Carrito", {
      position:POSITION.BOTTOM_CENTER
    });

}

console.log(convertTotal);



</script>


<style  scoped>
.HomeWrapperMobile{
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
    right: 100px;
    

  }
 
  .Items_cart button{
    margin: 5px 15px;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }
  .Titulo_Check{
    color: #333;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
  .SponsorCart{
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 4rem;
    border: 3px solid  var(--secundary-colorRed);
    position: relative;
    top: 2%;
    border-radius: 30px;
    margin:5%;
    justify-content: center;
    align-items: center;
  }
  .modul_1{
    display: flex;
    flex-direction: row;
    justify-content:space-between ;
    align-items: center;
    width: 40vw;
    height: 2rem;

  }
  .modul_inter{
    display: flex;
    flex-direction: column;
    margin: 15%;
    width: auto;
  }
  .modul_inter h2{
    font-family: "Poppins",sans-serif;
    font-size: 1rem;
    color: black;
    width: 8rem;
  }

  .modul_inter h3{
    font-size: 1.1rem;
    color: black;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  .modul_1Img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    right: -10%;
  }

  .model_2{
    width: 150%;
    position: relative;
    right: 3%;
    display: flex;
    flex-direction: column;
  }
  .model_2  h4{
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    position: relative;
    left: 50%;
    font-size: 0.65rem;
    width: 6rem;
  }
  .cart_itemsMid{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 60%;

  }
  .Items_cartActive{
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20%;
    height: 120px;
    position: relative;
    max-height: 150px;
    border-radius: 20px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.2);
    margin: 5%;
  }
  .Img_cart{
    width: 100%;
    object-fit: contain;
    height: 80px;
    margin: 5%;
  }
  .cart1 {
    /* Establece un ancho fijo o máximo para la imagen */
    flex-basis: 60px; /* O el tamaño que desees para la imagen */
    flex-shrink: 0; /* Evita que la imagen se comprima si hay poco espacio */
    margin: 5px;
    margin-left: 15px;
}
.cart2 {
    /* Permite que esta sección ocupe todo el espacio restante */
    flex-grow: 1; 
    
    /* Opcional: Usa Flexbox también aquí si quieres alinear el título, precio y botón */
    display: flex;
    flex-direction: column; /* Apila el contenido verticalmente */
    justify-content: space-between; /* Distribuye el espacio entre el contenido */
}

.titles {
    /* Mantiene el scroll horizontal para textos largos */
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none; 

   
    width: 190px; /* Ocupa todo el espacio de .cart2 */
    max-width: 200px;
    display: block;
    
    
    height: auto; 
    
    
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    
    
    line-height: 1.2;
    margin: 0;
    position: relative; 
    right: 15%;
}

/* Ocultar barra de desplazamiento en Chrome/Safari */
.titles::-webkit-scrollbar {
    display: none; 
}/* Limpia estos elementos dentro de .cart2 */

.cart2 h6 {
    font-size: 1.1rem;
    position: relative;
    right: 30%;
    bottom: 10px;
    color: #666;
    font-family: "Roboto", sans-serif;
}
.cart2 h5{
  font-size: 1rem;
  right: 23%;
  font-family: "Roboto", sans-serif;
  bottom: 10px;
  position: relative;
  color: #666;

  font-family: "Roboto", sans-serif;
}
.cart2 p {
    font-size: 1rem;
    position: relative;
    right: 15%;
    top: 5px;
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
    
}
.item-footer {
    display: flex;
    flex-direction: row;
    /* Distribuye el espacio entre los tres grupos: Precio | Basura | Controles */
    justify-content: space-between; 
    align-items: center; /* Centra los elementos verticalmente */
    width: 100%; /* Asegura que ocupe todo el ancho de .cart2 */
    margin-top: auto; /* Empuja el footer hacia el final de .cart2 (si .cart2 es columna) */
}
.btn_tarshCart {
    position: absolute;
    left: 90%;
    bottom: 60%;
    
    
    z-index: 10;
    background-color: transparent;
    border: none;
    padding: 5px; 
    width: auto; 
    height: auto;
}
 .btn_tarshCart i{
    font-size: 1rem;
    color: var(--secundary-colorRed);

  }
.Items_cart {
    position: relative;
    right: 30px;
    bottom: 10px;
    
    /* El resto de sus estilos Flexbox están bien */
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--gris-secundary);
    border-radius:  20px;
    color: #333;
    transition: all 0.5s linear;
    
}
 .Items_cart button{
    margin: 5px 15px;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    color: var(--gris-primary);
  }

  .Items_cart:active{
    background-color: #666;
  }

  .Items_cart h4{
    font-family: "Roboto", sans-serif;
  }

  .TopCheck{
    width: 100%;
    height: 32vh;
    position: fixed;
    box-shadow:
  10px 0px 6px -1px rgba(0, 0, 0, 0.2);
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Title_Check{
    width: 80%;
    height: 10%;
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3%;
    align-items: center;
  }

  .Title_Check h2{
    color: #666;
    margin: 5%;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    text-align: start;
  }
  .Title_Check h3{
    color: #666;
    margin: 5% 7%;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    position: relative;
    left: 10px;
    text-align:center;
    
  }
  .Title_Check  h5{
    color: #666;
    margin: 5% ;
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    text-align:end;
  }
  .btn_Checkout{
    width: 85%;
    height: 8vh;
    margin-bottom: 10px;
    

  }
  .btn_Checkout a{
    text-decoration: none;
  }
  .btn_Checkout span{
    width: 100%;
    background-color: var(--primary-colorRed);
    height: 100%;
    display: flex;
    border-radius: 40px;
    padding: 5%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .btn_Checkout h6{
    font-family: "Poppins", sans-serif;
    color: white;
    text-decoration: none;
    font-size: 1.3rem;  
    margin-right:8% ;  
  }

  .btn_Checkout i{
    font-size: 1.5rem;
    margin-left: 5%;
    background-color: white;
    padding: 3% 5%;
    border-radius: 10px ;
    color: var(--primary-colorRed);
  }

@media (max-width: 768px){
  .Title_Check h5{
    position: relative;
    left: 5px;
  }
}
</style>