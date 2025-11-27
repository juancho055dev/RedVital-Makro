<template>
         <div v-if="ActiveDropdown" >
            <h3>hola esta ejecutandose</h3>

            </div>
</template>

<script setup>
import { useToggle } from '../../composables/toogleSidebar';

const {ActiveDropdown} = useToggle();
</script>

<style scoped>
</style>