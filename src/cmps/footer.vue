<template>
    <footer>
        <section>
            &copy;&nbsp;<span v-for="letter in ['S','u','n','F','l','o','w','e','r']"><p>{{letter}}</p></span>&nbsp;{{year}}
        </section>
    </footer>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            year: (new Date).getFullYear()
        }
    },
}
</script>