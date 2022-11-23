<template>


    <transition name="modal">
        <div v-if="showModal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header ">
                            <slot name="header">

                                <spam></spam>

                                <span @click="showModal = onClickClose()"><i class="bi bi-x-lg text-warning"></i>
                                </span>

                            </slot>
                        </div>

                        <div class="modal-body ">
                            <slot name="body">
                                <div class="row text-center Image-layOut">
                                    <div class="col-6 parent">



                                        <img class="child" v-bind:src="front_canvas" />



                                        <img class="ms-save" v-bind:src="shirt_front" />

                                    </div>
                                    <div class="col-6 parent">
                                        <img class="child" v-bind:src="back_canvas" />
                                        <img class="ms-save" v-bind:src="shirt_back" />


                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-7">
                                        {{ data_.detail }}
                                    </div>
                                </div>
                                <hr>


                                <div class="container">
                                    <div class="row  ">
                                        <div class="col-1 ">
                                            <input class="" type="checkbox" value="" id="flexCheckDefault">
                                        </div>
                                        <div class="col-2 fw-blod">

                                            XS

                                        </div>

                                        <div class="col-1 input_UD p-0 text-center bg-warning" @click="buy['xs'] += 1">
                                            + </div>
                                        <div class="col-6 text-center p-0 m-0 input_UD">
                                            <input type="number" class="text-center m-0" id="xs" :value="buy['xs']"
                                                @input="Check_num" />
                                        </div>
                                        <div class="col-1 input_UD  bg-warning" @click="Down_num('xs')"> - </div>
                                    </div>





                                    <div class="row  mt-2">
                                        <div class="col-1 ">
                                            <input class="" type="checkbox" value="" id="flexCheckDefault">
                                        </div>
                                        <div class="col-2 fw-blod">

                                            S

                                        </div>


                                        <div class="col-1 input_UD p-0 text-center bg-warning" @click="buy['s'] += 1"> +
                                        </div>
                                        <div class="col-6 text-center p-0 m-0 input_UD">
                                            <input type="number" class="text-center m-0" id="s" :value="buy['s']"
                                                @input="Check_num" />
                                        </div>
                                        <div class="col-1 input_UD  bg-warning" @click="Down_num('s')"> - </div>
                                    </div>


                                    <div class="row  mt-2">
                                        <div class="col-1 ">
                                            <input class="" type="checkbox" value="" id="flexCheckDefault">
                                        </div>
                                        <div class="col-2 fw-blod">

                                            M

                                        </div>

                                        <div class="col-1 input_UD p-0 text-center bg-warning" @click="buy['m'] += 1"> +
                                        </div>
                                        <div class="col-6 text-center p-0 m-0 input_UD">


                                            <input type="number" class="text-center m-0" id="m" :value="buy['m']"
                                                @input="Check_num" />



                                        </div>
                                        <div class="col-1 input_UD  bg-warning" @click="Down_num('m')"> - </div>
                                    </div>

                                    <div class="row  mt-2">
                                        <div class="col-1 ">
                                            <input class="" type="checkbox" value="" id="flexCheckDefault">
                                        </div>
                                        <div class="col-2 fw-blod">

                                            L

                                        </div>


                                        <div class="col-1 input_UD p-0 text-center bg-warning" @click="buy['l'] += 1"> +
                                        </div>
                                        <div class="col-6 text-center p-0 m-0 input_UD">
                                            <input type="number" class="text-center m-0" id="l" :value="buy['l']"
                                                @input="Check_num" />


                                        </div>
                                        <div class="col-1 input_UD  bg-warning" @click="Down_num('l')"> - </div>
                                    </div>


                                    <div class="row  mt-2">
                                        <div class="col-1 ">
                                            <input class="" type="checkbox" value="" id="flexCheckDefault">
                                        </div>
                                        <div class="col-2 fw-blod">

                                            XL

                                        </div>


                                        <div class="col-1 input_UD p-0 text-center bg-warning" @click="buy['xl'] += 1">
                                            + </div>
                                        <div class="col-6 text-center p-0 m-0 input_UD">
                                            <input type="number" class="text-center m-0" id="xl" :value="buy['xl']"
                                                @input="Check_num" />
                                        </div>
                                        <div class="col-1 input_UD  bg-warning" @click="Down_num('xl')"> - </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="row mx-0">
                                    <div class="col-6">
                                        <small class="fw-bold"> Total </small>

                                    </div>
                                    <div class="col-6 text-end">
                                        <small class="fw-bold"> 0 THB </small>

                                    </div>
                                </div>


                            </slot>
                        </div>

                        <div class="modal-footer  bg-warning row" @click="test">
                            <slot name="footer">

                                <div class="col text-center p-2">
                                    <h3> <b> Buy </b> </h3>
                                </div>


                            </slot>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </transition>





</template>
  
<script scope>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "Shirt_Component",
    props: {

        Carousel,
        Slide,
        data_: null,
        pages: String,
    },
    computed: {

        Page_class() {
            switch (this.pages) {
                case ("gallery"):
                    return 'Layout_border';
                case ("home"):
                    return '';
            }



        },

    },
    data() {
        return {


            buy: { "xs": 0, "s": 0, "m": 0, "l": 0, "xl": 0, },

            showModal: false,
            shirt_front: require(`@/assets/img/${this.data_.property._type}front.png`),
            shirt_back: require(`@/assets/img/${this.data_.property._type}back.png`),

            front_canvas: null,
            back_canvas: null,
            localhost: window.location.host,
        }

    },
    mounted() {

        this.front_canvas = `http://${this.localhost}/images/${this.data_.shirt_path.front}.png`
        this.back_canvas = `http://${this.localhost}/images/${this.data_.shirt_path.back}.png`


    },
    methods: {
        pop_Modal(ev) {
            this.$emit('continue');
            this.showModal = true
        },
        Check_num(ev) {

            if (ev.target.value <= 0 || ev.target.value == "") {


                ev.target.value = 0
            }
            this.buy[ev.target.id] = parseInt(ev.target.value)

        },

        Down_num(size) {

            if (this.buy[size] <= 0) {
                this.buy[size] = 0;
            } else {
                this.buy[size] -= 1;
            }

        },
        test(ev) {
            console.log("test");
        },
        onClickClose(event) {

            this.$emit('close')
            return false;
        },
    }
};
</script>
  
  
<style scoped>
/* we will explain what these classes do next! */


.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 70%;
    text-align: center;
}


input[type=number]:focus {
    outline: none;
}

.detail {
    height: 200px;
}

.shirt_choice:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.input_UD {
    border: 2px solid rgb(17, 17, 17);


}

input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: rgb(255, 255, 255);

}

.no-outline:focus {
    outline: none;
}


.ms-save {
    width: 155px;
}

@media (max-height: 500px) {
    .modal-footer {

        display: none;

    }

    .Image-layOut {
        display: none;
    }
}

.modal-footer {

    bottom: 0;
    left: 0;

    position: fixed;
    width: 105%;

}

.font_ {
    font-size: 70%;
}

.Layout_border {

    border: 2px solid rgb(231, 224, 224);
    padding: 10px;
    border-radius: 10px 10px 10px;
}


.btn-upload {
    background-color: #ffc107 !important;
    color: rgb(0, 0, 0) !important;
    width: 100%;

    position: absolute !important;
    bottom: 50px
}

.btn-confirm {
    background-color: #ffc107 !important;
    color: rgb(0, 0, 0) !important;
    width: 100% !important;

    position: absolute !important;
    bottom: 1px
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 1s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {

    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    margin-top: 1%;
    color: #030303;
    font-size: large;
    font-weight: 900;

}



.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}


.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>