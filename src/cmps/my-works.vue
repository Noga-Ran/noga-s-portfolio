<template>
    <div class="works">
        <h1>My Works:</h1>
        <li>
         <ul v-for="work in works" @click.prevent="openModal(work)">
             <h1>{{work.name}}</h1>
             <img :src="work.img" alt="">
         </ul>
        </li>
    </div>
    <my-modal v-if="showModal" @close="showModal = false" :work="chosenWork">
        <template v-slot:header>{{chosenWork.name}}</template>
        <template v-slot:body>{{chosenWork.desk}}</template>
  </my-modal>
</template>

<script>
import myModal from './my-modal.vue';

export default {
    data() {
    return {
        showModal: false,
        works:[
            {
                name: 'skybnb',
                img: 'https://res.cloudinary.com/nogacloud/image/upload/v1666710411/portfolio/skybnb.png',
                desk: 'Fullstack Vue3 application that simulate the `airbnb` user experience. user can log in/sign up, watch different loactions, order a vaction and add them to its wishlist.',
                link: 'https://sky--bnb.herokuapp.com/#/',
                hash: ['Vuejs','frontend','backend']
            },
            {
                name: 'Mr.Bitcoin',
                img: 'https://res.cloudinary.com/nogacloud/image/upload/v1666710407/portfolio/Mr.Bitcoin.png',
                desk: 'Frontend Angular application that simulate Bitcoin transference',
                link: 'https://noga-ran.github.io/Mister-Bitcoin-Angular/#/',
                hash: ['Angular','frontend']
            }
        ],
        chosenWork: null
    }
    },
    components:{
        myModal
    },
    methods:{
        openModal(work){
        this.chosenWork = work
        this.showModal = true
    }
    }
}
</script>