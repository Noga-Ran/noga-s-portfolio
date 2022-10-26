<template>
    <transition name="sketchOut">
        <div class="modal-mask">
            <div class="modal-wrapper" @click.prevent="$emit('close')">
                <div class="modal-container" id="modal" :class="{visible: active}">
                    <button class="modal-default-button" @click="$emit('close')"><svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></button>

                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>
                    <img :src="work.img" alt="">
                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <ul>
                        <li v-for="hash in work.hash">#{{hash}}</li>
                    </ul>

                    <button @click.stop="open(work.link)">Browse Work</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        work: Object
    },
data() {
return {
    active:false
}
},
methods: {
    open(link){
        window.open(link, "_blank");
    }
},
created(){
    this.active = true
},
unmounted(){
    // this.$refs['modal'].addClass('out');
    // this.$refs['modal'].removeClass('modal-active')
}
}
</script>