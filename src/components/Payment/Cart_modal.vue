<template>

    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header ">
                            <slot name="header">

                                ตะกร้าสินค้า

                                <span @click="showModal = false"><i class="bi bi-x-lg text-warning"></i>
                                </span>


                            </slot>
                        </div>

                        <div class="modal-body ">
                            <slot name="body">
                                <!-- img -->

                                <div>
                                    <div class="border " style=" padding:100px 25px 75px 100px;"></div>

                                </div>



                                <div class="detail mt-5 border">
                                    <text class="">
                                        <b> รายการที่เลือก </b>

                                    </text>

                                </div>
                                <div class="row">

                                    <b class="col"> Total </b>
                                    <span class="col text-end mx-2"> 0 <small>THB</small></span>
                                </div>


                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">


                                <button class="btn btn-confirm" @click="showModal = false">
                                    ยืนยันรายการสั่งซื้อ
                                </button>


                                <button class="btn btn-another" @click="showModal = false">
                                    เลือกสินค้าเพิ่มเติม
                                </button>

                            </slot>

                        </div>
                    </div>
                </div>
            </div>
        </transition>

    </div>



</template>
  
<script>
export default {
    name: "cart_modal",
    props: {
        showModal: Boolean
    },

    data() {
        return {
            count: 0
        }

    },
    mounted() {

    },
    methods: {

        onClickClose(event) {
            this.$emit('close', { name: 'Payment_Modal', state: false })

            return false;
        },

    }
};
</script>
  <link rel="stylesheet" href="../assets/css/modal_css.css" /> 
  
<style scoped>
/* we will explain what these classes do next! */
.detail {
    height: 150px;
}

input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: rgb(255, 255, 255);
    width: 100%;

}

.no-outline:focus {
    outline: none;
}

.modal-footer {
    margin-top: 20%;
    height: 10%;
    position: relative !important;
}

.btn-another {
    background-color: #181818 !important;
    color: rgb(255, 255, 255) !important;
    width: 100%;
    position: absolute !important;
    bottom: 1px;
}

.btn-confirm {
    background-color: #ffc107 !important;
    color: rgb(0, 0, 0) !important;
    width: 100% !important;

    position: absolute !important;
    bottom: 50px;

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
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    margin-top: 2%;
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


@media (min-width: 600px) {
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

    .modal-container {
        width: 30%;
        height: 80%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
}
</style>