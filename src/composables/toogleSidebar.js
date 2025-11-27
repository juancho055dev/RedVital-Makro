// useToggle.js
import { ref } from 'vue'

export function useToggle() {
  const ActiveDropdown = ref(false)

  function toggleDropdown() {
    ActiveDropdown.value = !ActiveDropdown.value   }

  return { ActiveDropdown, toggleDropdown }
}
