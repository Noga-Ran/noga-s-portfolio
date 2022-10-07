<script >
  import { RouterLink, RouterView } from 'vue-router'
  import headerVue from './cmps/header.vue'
  import footerVue from './cmps/footer.vue';
  
  export default {
    components: {
      RouterLink,
      RouterView,
      headerVue,
      footerVue
    },
  }
</script>
  
<template>
  <headerVue />
  <RouterView v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
  <footerVue/>
</template>
