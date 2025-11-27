import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";



import App from './App.vue'
import router from './router'

import { VueFire, VueFireAuth } from 'vuefire'
import { auth, db, firebaseApp } from '../src/Firebase/config.js'
import { useUserStore } from './store/UserStore.js';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import '../src/styles/Variables.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Toast, {
    timeout:2000,
    position: POSITION.TOP_RIGHT, // posición base
    toastClassName: "notificationMobile", // clase custom para CSS
})

app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth(),] //opcional, facilita el useCurrentUser()
})

const userStore = useUserStore();

// 🔍 Detectar sesión activa
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    userStore.setUser(user, userDoc.data());
  } else {
    userStore.cleaUser();
  }
});

app.mount('#app')
