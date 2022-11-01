<script >
  import { RouterLink, RouterView } from 'vue-router'
  import headerVue from './cmps/header.vue'
  import navBar from './cmps/nav-bar.vue'
  
  export default {
    components: {
      RouterLink,
      RouterView,
      headerVue,
      navBar
    },
  }
</script>
  
<template>
  <!-- <headerVue /> -->
  <nav-bar/>
  <RouterView v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>
