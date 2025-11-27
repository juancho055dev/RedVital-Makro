<template>
  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold mb-4">🔥 Firebase + Vue 3 (2025)</h1>

    <input
      v-model="newTask"
      placeholder="Escribe una tarea"
      class="border p-2 rounded w-64"
    />
    <button @click="addTask" class="ml-2 bg-blue-500 text-white px-3 py-2 rounded">
      Agregar
    </button>

    <ul class="mt-4 space-y-1">
      <li v-for="t in tasks" :key="t.id" class="border p-2 rounded">
        {{ t.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import {firebaseApp} from '@/Firebase/config.js'

//const db = getFirestore(app)
const tasks = ref([])
const newTask = ref("")

const loadTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"))
  tasks.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

const addTask = async () => {
  if (!newTask.value.trim()) return
  await addDoc(collection(db, "tasks"), { text: newTask.value })
  newTask.value = ""
  await loadTasks()
}

onMounted(loadTasks)
</script>
