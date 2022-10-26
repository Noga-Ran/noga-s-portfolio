<template>
  <main class="home-page">
    <section class="hero">
      <img src="https://res.cloudinary.com/nogacloud/image/upload/v1665078380/portfolio/pexels-digital-buggu-193777.jpg"
        alt="">
      <h1>Let's Code!</h1>
      <img @click.prevent="scrollToElement('works')"
        src="https://res.cloudinary.com/nogacloud/image/upload/v1665133256/portfolio/pointer-down.svg" alt="">
    </section>
    <introduction></introduction>
    <section ref='works' id='works'>
      <my-works></my-works>
    </section>
  </main>
</template>


<script>
import introduction from '../cmps/introduction.vue';
import myWorks from '../cmps/my-works.vue';
 
export default {
  methods: {
    scrollToElement(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop-80;

      window.scrollTo({left:0, top, behavior: 'smooth'});
   },
  },
  components:{
   introduction,
   myWorks
  },
}
</script>