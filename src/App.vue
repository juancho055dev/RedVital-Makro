<template>
      <RouterView />
      <div v-if="ui.globalLoading" class="loader-overlay">
        <div class="spinner"></div>
      </div>

</template>

<script setup >

    import { RouterView } from 'vue-router';
    import 'animate.css';
import { useUiStore } from './store/ui';
    const ui = useUiStore();
   

   
</script>

<style > 


* ,body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

::view-transition-old(root) {
  animation-name: slide-out;
}

::view-transition-new(root) {
  animation-name: slide-in;
}
/* y evita que afecte a transiciones locales */
.ventana,
.slide-enter-active,
.slide-leave-active {
  view-transition-name: none !important;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0.6;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0.6;
  }
}

.loader-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 61, 138, 0.45);
  display: flex;
  align-items: center;
  transition: opacity 0.4s ease-in-out;
  justify-content: center;
  z-index: 9999;
}
.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.5s linear  infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
/* Global, afecta a todos los toasts */
.Toastify__toast-container--top-right {
  top: 25vh !important;
}


/* ---------------------------------------------------------------------- */
/* 🛑 ANULACIÓN ESPECÍFICA DE SOMBRA Y RECUADRO DE FOCO 🛑 */
/* ---------------------------------------------------------------------- */

/* Anulamos el tap highlight y user-select con !important (esto debe ser fuerte) */
a, button, i, span, [tabindex] {
    -webkit-tap-highlight-color: transparent !important;
    -webkit-user-select: none !important;
    user-select: none !important;
}

/* Anulamos solo las propiedades de sombra y contorno del navegador, 
   pero permitimos que tus estilos de fondo/borde personalizados sigan funcionando
   porque NO usamos !important en el color de fondo.
*/
a:focus,
a:active,
button:focus,
button:active,
i:focus,
i:active,
:focus-visible { 
    /* Esta es la clave para el recuadro/borde */
    outline: none !important; 
    
    /* Esta es la clave para la "sombra azul" */
    box-shadow: none !important; 
}
</style>