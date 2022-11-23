<template>
    <div class="container ">
        <b>
            Design Gallery
        </b>

        <div class="row ">


            <Shirt_Component v-for="item of data" :data_="item" :pages="'gallery'" />

        </div>
    </div>

</template>
<script scope>
import Shirt_Component from '@/components/Menu_bar/Shirt_Component.vue';
import axios from 'axios';
export default {
    name: "Gallery",
    components: {
        Shirt_Component,
    },
    data() {
        return {
            data: [],

            localhost: window.location.host,
            
        }

    },
    mounted() {
        axios.get(`http://localhost:3000/services/arm_service/shirts/gallery`)
            .then(response => {
                this.data = response.data;
              
            })
            .catch(error => {
                console.log(error);
            });


    },
    methods: {


    }

};

</script> 

<style lang="scss" scoped>

</style>
