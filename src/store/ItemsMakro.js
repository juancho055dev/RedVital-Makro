import { defineStore } from "pinia"
import Fuse from 'fuse.js'

export const useCarruselStoreMakro = defineStore("carrusel", {
  state: () => ({
    items: [
      { id: 1,
        url: "https://tse4.mm.bing.net/th/id/OIP.ZC5OET-XhIXH4p37bcKciAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Galletas Oreo Americano",
        categoria: "alimentos",
        precio: 2.2,
        Descuent:8,
        },
      { id: 2,
        url: "https://tse4.mm.bing.net/th/id/OIP.Ou1IrGRDBOwCjTgALcO4BAHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Snacks Doritos",
        categoria:"alimentos",
        precio: 1.8,
        Descuent:17,
      },
      { id: 3,
        url: "https://images.hotukdeals.com/threads/raw/5NZZy/4680264_1/re/1024x1024/qt/60/4680264_1.jpg",
        title: " Refresco Cocacola 1.5Lts",
        categoria:"bebidas",
        precio: 1.5,
        Descuent:5,
    },
    { id: 4,
       url: "https://th.bing.com/th/id/OIP.8qPsWnMPAMJ2PUiOReO8IwHaHa?w=190&h=190&c=7&r=0&o=7&pid=1.7&rm=3",
       title: "Mantequilla Mavesa 500gr",
       precio:3.2,
       categoria:"alimentos",
       Descuent:8,
       },
      { id: 5,
         url: "https://th.bing.com/th/id/OIP.1WRgZp5MSDF41eALAET1wAHaHa?w=202&h=202&c=7&r=0&o=7&pid=1.7&rm=3",
         title: "Arroz Mary Premium  900Gr",
         categoria:"alimento",
         precio: 2.2,
         Descuent:12,
           },
      { id: 6,
         url: "https://th.bing.com/th/id/OIP.NoC2nzYaemRm7_JVUzEKWgAAAA?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
         title: "Crema de Arroz Mary",
         descripcion:"",
         categoria:"alimento",
         precio:3.6,
         Descuent:10,
        },
      { id: 7, 
        url: "https://th.bing.com/th/id/OIP.WtqxhyzwmZqFuIEMqjrxoQAAAA?w=158&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        title: "Refresco PepsiCola 1.5Lts",
        descripcion:"",
        categoria:"bebidas",
        precio:1.45,
        Descuent:5,
      },
         
    ],
    currentIndex: 0,
    itemsPerPage: 4, // 👈 cuántos mostrar al mismo tiempo
    fuse: null,
    searchResult: [],
    
  }),
  getters: {
    // (visibleImages, allItems, etc.)
    visibleImages: (state) => {
      
      // 👇 crea una ventana circular
      let result = []
      for (let i = 0; i < state.itemsPerPage; i++) {
        const index = (state.currentIndex + i) % state.items.length
        result.push(state.items[index])
      }
      return result
    },

     allItems: (state) => state.items
  },
  actions: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.items.length
    },
    initFuse(){
      const options = {
        keys:["title", "categoria"],
        threshold:0.6
      }

      this.fuse = new Fuse(this.items, options)
    },

    search(query){
      if(!query){
        this.searchResult = this.items
        return
      }

      const result = this.fuse.search(query)
      this.searchResult = result.map(r => r.item)
    }
  },
}


)