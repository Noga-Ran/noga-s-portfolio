<template>
    <section class="socials">
        <div>Get In Touch:</div>
        <ul>
            <li v-for="social in socials" @click.prevent="connect(social.link)">
                <img :src="social.img" alt="">
            </li>
        </ul>
    </section>
</template>
<script>

export default {
    name: 'socials',
data() {
return {
    socials: [
        {link:'https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=CllgCJfrKxgwMtMpJgvZsGVHqzGhqRPJnPGjHMBTbfnGrFrmQbLqswdxKSNkSrxpnsJZTHwRnxB' ,img:'https://res.cloudinary.com/nogacloud/image/upload/v1667311032/portfolio/gmail-svgrepo-com.svg'},
        {link:'https://www.facebook.com/messages/t/100000306501276' ,img:'https://res.cloudinary.com/nogacloud/image/upload/v1667311033/portfolio/facebook-svgrepo-com.svg'},
        {link:'https://www.linkedin.com/in/noga-ran-960892249/' ,img:'https://res.cloudinary.com/nogacloud/image/upload/v1667311033/portfolio/linkedin-svgrepo-com_1.svg'},
        {link:'https://github.com/Noga-Ran' ,img:'https://res.cloudinary.com/nogacloud/image/upload/v1667311032/portfolio/github-svgrepo-com.svg'}
    ]
}
},
methods:{
    connect(link){
        window.open(link, '_blank');
    }
}
}
</script>