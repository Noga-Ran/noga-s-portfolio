<template>
    <header class="flex top-nav">
        <section class="logo flex">
            <img src="https://res.cloudinary.com/nogacloud/image/upload/v1667305821/portfolio/NR_1.png" alt="">
            <p>Noga's <span>Portfolio</span></p>
        </section>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
        </label>
        <ul class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/connect">Connect</router-link>
        </ul>
    </header>
</template>

<script>

export default {
    
}
</script>