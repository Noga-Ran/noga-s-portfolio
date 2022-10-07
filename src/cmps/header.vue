<template>
    <header class="flex top-nav">
        <section class="logo flex">
            <img src="https://res.cloudinary.com/nogacloud/image/upload/v1665063014/portfolio/img-logo.png" alt="">
            <p>Noga's <span>Portfolio</span></p>
        </section>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
        </label>
        <ul class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </ul>
    </header>
    <!-- <header class="flex">
    </header> -->
</template>

<script>

export default {
    
}
</script>