<template>
    <div class="container ">
        <div class="row m-2">
            <b class="col align-self-center ">
                Profile
            </b>

            <div class="col text-end">
                <Edit_ModalVue @child_res="res_Data" />
            </div>
        </div>

        <div class="row  border-bottom  m-2 mx-5">
            <div class="col-5 bi bi-person-fill px-0">
                <small> ชื่อผู้ใช้ </small>


            </div>
            <div class="col-7">
                <small class=""> {{ _name }} </small>


            </div>


        </div>





        <div class=" mt-3" style="">
            <div class="row m-2">
                <Shirt_Component v-for="item of data" :data_="item" :pages="'profile'" />
            </div>
        </div>
    </div>


</template>
<script scope>

import Edit_ModalVue from '@/components/Menu_bar/Edit_Modal.vue';
import Shirt_Component from '@/components/Menu_bar/Shirt_Component.vue';
import axios from 'axios';
export default {
    name: "Profile",
    components: {
        Edit_ModalVue,
        Shirt_Component,
    },
    data() {
        return {
            data: [],
            _name: String,
        }

    },
    mounted() {

        let _id = this.$cookies.get('_id');;
        let permission = false;


        axios.get(`http://localhost:3000/services/arm_service/own_shirts/${_id}/${permission}`)
            .then(response => {
                this.data = response.data;

            })
            .catch(error => {
                console.log(error);
            });

    },
    methods: {
        res_Data(data) {
            this._name = data.user_name

        },

    }

};

</script> 

<style lang="scss" scoped>

</style>
