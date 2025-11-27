import { defineStore } from "pinia"
import Fuse from 'fuse.js'


export const useCarruselStoreRedvital = defineStore("carruselRedvital", {
  state: () => ({
    items: [
      { id: 1,
        url: "https://th.bing.com/th/id/OIP.Lh_h5Famkbg0S97d-Ecl4gHaHa?w=194&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
        title: "Listerine Fresh 300ml",
        categoria: "higiene-dental",
        precio: 5.9,
        Descuent:15,
        },
      { id: 2,
        url: "https://th.bing.com/th/id/OIP.Pnvz8O2kdTVkzVRM1X3ymAHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
        title: "Acetaminofen",
        categoria:"medicamento",
        precio: 1.1,
        Descuent:15,
      },
      { id: 3,
        url: "https://th.bing.com/th/id/OIP.iQzb0i_ELshmqRUzQdlEuQHaHa?w=219&h=219&c=7&r=0&o=7&pid=1.7&rm=3",
        title: "Ambroxol",
        categoria:"medicamento-liquido",
        precio: 1.8,
        Descuent:15,
    },
    { id: 4,
       url: "https://th.bing.com/th/id/OIP.jjb0c_gdBMxymyHyweLRjQAAAA?w=128&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
       title: "Teragrip Forte",
       precio:2,
       categoria:"medicamento",
       Descuent:25,
       },
      { id: 5,
         url: "https://lh3.googleusercontent.com/1O-Of50pX2OUQ-w_B4ad7cUXQ6BaxAhfwW0KMlseTMBE4WyMdajlassJ2b3D3N1izwdu49FOo4ON3t5haAOIiPnX6bGkwOjTy77NGn07tiMGpP9j=s650-rw",
         title: "Acetona Valmy",
         categoria:"higiene-personal",
         precio: 3.8,
         Descuent:5,
           },
      { id: 6,
         url: "https://lh3.googleusercontent.com/tA4vd44iip-vRXyyOnWZRssWMp-Fp7UuRPyh8hGvykU1iFyOnPpjjkR5xr4NvO0s8lJ9BF8GMAzV8VncrP9zSlIVMRhkKOJ8Qzdt1B543koYo_Y=s650-rw",
         title: "Gel Fijador Black Men Rolda 250gr",
         descripcion:"",
         categoria:"higiene-personal",
         precio:3.6,
         Descuent:10,
        },
      { id: 7, 
        url: "https://lh3.googleusercontent.com/odhVIUXqD3DvxloFNmlkCtg_EHiAK3mkg1ZWlcPZT8fbzv_o7gXISMKIuh5zHsNMEAHFp_VYU2dSQDJyUsvQ8pL2o_Ddi8kaRx8Ln98rcI-w0oL1=s650-rw",
        title: "Shampoo head&shoulder 380ml Proteccion Caida",
        descripcion:"",
        categoria:"higiene-personal",
        precio:5.9,
        Descuent:5,
      },
      {
        id:8,
        url:"https://lh3.googleusercontent.com/VSItl1fSs6xeM4JdJmvc7XC1ZyUrmO1OkpS6fI5Q6AJZIYy5gJaOO3-frzBpDmM9O8IahSPY1xm0yieU1d_VwH-S2PiztbweUg=s650-rw",
        title:"Toallas Humedas Minlot  Crema 72Unid",
        descripcion:"",
        categoria:"higiene",
        precio:1.9,
        Descuent:10,
      },
      {
        id:9,
        url:"https://lh3.googleusercontent.com/VSItl1fSs6xeM4JdJmvc7XC1ZyUrmO1OkpS6fI5Q6AJZIYy5gJaOO3-frzBpDmM9O8IahSPY1xm0yieU1d_VwH-S2PiztbweUg=s650-rw",
        title:"Toallas Humedas Minlot  Crema 72Unid",
        descripcion:"",
        categoria:"higiene",
        precio:1.9,
        Descuent:20,
      },
      {
        id:10,
        url:"https://lh3.googleusercontent.com/VSItl1fSs6xeM4JdJmvc7XC1ZyUrmO1OkpS6fI5Q6AJZIYy5gJaOO3-frzBpDmM9O8IahSPY1xm0yieU1d_VwH-S2PiztbweUg=s650-rw",
        title:"Toallitas Humedas Minlot  Crema 72Unid",
        descripcion:"",
        categoria:"higiene",
        precio:1.9,
        Descuent:20,
      }
    
         
    ],

    currentIndex: 0,
    itemsPerPage: 4, // 👈 cuántos mostrar al mismo tiempo
    fuse: null,
    searchResult: [],
  }),
  getters: {
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
        (this.currentIndex - 1 + this.items.length) % this.items.length
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

    }
  },
)