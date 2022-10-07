<template>
  <main>
    <section class="hero">
      <img src="https://res.cloudinary.com/nogacloud/image/upload/v1665078380/portfolio/pexels-digital-buggu-193777.jpg"
        alt="">
      <h1>Let's Code!</h1>
      <img @click.prevent="scrollToElement(36)"
        src="https://res.cloudinary.com/nogacloud/image/upload/v1665133256/portfolio/pointer-down.svg" alt="">
    </section>
    <p v-for="n of 100" :key="n" :ref="n === 100 ? 'last' : ''+n">
      {{ n }}
    </p>
  </main>
</template>


<script>
export default {
  methods: {
    scrollToElement(element) {
      const [el] = this.$refs[element];
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().y - 102,
          left: 100,
          behavior: 'smooth'
        })
      }
      el.style.backgroundColor = 'yellow' 
      console.log(el.style.color);
      setTimeout(()=>{
        el.style.backgroundColor = 'transparent'
      },2000)
   }
  }
}
</script>