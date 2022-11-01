<template>
    <aside class="site-bar">
        <div class="inner-bar">
            <a href="/" class="person">
                <div class="avatar">
                    <img src="https://res.cloudinary.com/nogacloud/image/upload/v1666707694/me/IMG_20191122_205530_219.jpg" alt="">
                </div>
                <div class="info">
                    <h1>Noga Ran</h1>
                    <h2>Fullstack Developer</h2>
                </div>
            </a>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="portfolio">Portfolio</router-link>
                <router-link to="cv">CV</router-link>
                <router-link to="Contact">Contact Me</router-link>

            </nav>
            <socials-vue></socials-vue>
        </div>
    </aside>
</template>
<script>
import socialsVue from './socials.vue'

export default {
data() {
return {}
},
name: 'nav-bar',
components:{
    socialsVue
}
}
</script>