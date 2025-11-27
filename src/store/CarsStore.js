import { defineStore } from "pinia";
import { useCarruselStoreMakro } from "./ItemsMakro";
import { useCarruselStoreRedvital } from "./ItemsRedvital";
import { useToast } from "vue-toastification";

export const useCarsStore = defineStore("cars", {
  state: () => ({
    items: [],         // productos en carrito
    allItems: [],      //todos los productos disponibles
    discount: 0,
    shippingCost:1.5,
    itemsCounter: 0
  }),
  getters: {

    totalItems: (state) => state.items.reduce((sum, items) => sum + (items.qty || 0), 0),
     makroItems: (state) => state.allItems.filter(p => p.source === 'makro'),
    redvitalItems: (state) => state.allItems.filter(p => p.source === 'redvital'),
    totalPrice: (state) =>{
      const subtotal =  state.items.reduce(
        (sum, items) => sum + (Number(items.precio) || 0) * (items.qty || 0),
         0
      );
      const discount = Number(state.discount) || 0;
      const shipping = Number(state.shippingCost) ||0;
      
      //solo sumamos shippins si hay product

      return subtotal > 0 ? subtotal - discount + shipping: 0;
    },
    getItemQty: (state) => (id)  => {
          const item = state.items.find(i =>  i.id === id);
          return item ? item.qty: 0;
    } 
  },
  actions: {
    initAllItems() {
      const storeMakro = useCarruselStoreMakro();
      const storeRedvital = useCarruselStoreRedvital();

      this.allItems = [
        ...storeMakro.items.map(p => ({ ...p, qty: 0, id:`makro-${p.id}`, source:'makro' })),
        ...storeRedvital.items.map(p => ({ ...p, qty: 0, id:`redvital-${p.id}`, source:'redvital' }))
];
    },
    increaseItem(productId) {
      const existing = this.items.find(p => p.id === productId);

      if (existing) {
        // Aumenta la cantidad en 1
        existing.qty += 1; 
      } else {
        // Lógica opcional: Si llamas a increaseItem y no existe, 
        // podrías buscar el producto en allItems y añadirlo con qty: 1
        // (Aunque generalmente, esto se hace con un botón "Añadir al carrito" aparte)
        console.warn(`Producto ${productId} no encontrado en el carrito para aumentar.`);
      }

      this.itemsCounter = this.totalItems; // Actualiza el contador global
    },
    
    // ➖ DISMINUIR CANTIDAD (Nueva Acción Requerida)
    decreaseItem(productId) {
        const itemIndex = this.items.findIndex(p => p.id === productId);

        if (itemIndex !== -1) {
            const item = this.items[itemIndex];
            const toast = useToast();

            if (item.qty > 1) {
                // Si la cantidad es mayor a 1, solo la disminuimos
                item.qty -= 1;
            } else {
                // Si la cantidad es 1, usamos la acción 'removeItem' para sacarlo del array
                this.removeItem(productId);
                toast.error("Producto Eliminado del Carrito");
                return; // Ya eliminó y actualizó itemsCounter en removeItem
            }
        }

        this.itemsCounter = this.totalItems; // Actualiza el contador global si solo disminuyó
    },
    addItem(product) {
      const existing = this.items.find(p => p.id === product.id);

      if (existing) {
        existing.qty += product.qty;
      } else {
         this.items.push({ ...structuredClone(product), qty: product.qty });
    }

  this.itemsCounter = this.totalItems;
    },
    removeItem(id) {
      this.items = this.items.filter((p) => p.id !== id);
      this.itemsCounter = this.totalItems;
    },
    clearCart() {
      this.items = [];
      this.itemsCounter = 0;
    }
  }
});
