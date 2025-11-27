import { defineStore } from "pinia"

export const useUiStore = defineStore("ui", {
  state: () => ({
    globalLoading: false
  }),
  actions: {
    showLoader() {
      this.globalLoading = true
    },
    hideLoader() {
      this.globalLoading = false
    }
  }
})
