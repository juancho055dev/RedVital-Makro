import { ref,onMounted, onUnmounted } from "vue"

 export const UseScreen =  () => {
    const SizeMobile = ref(window.innerWidth <= 768)
       
    const handleSize =  () => {
         SizeMobile.value = window.innerWidth <= 768
    }

    onMounted(() => {
      window.addEventListener('resize', handleSize)
    } )

    onUnmounted(() => {
      window.removeEventListener('resize', handleSize)
    })


    return{ SizeMobile }

 }
