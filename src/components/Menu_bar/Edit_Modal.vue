<template>

    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">

                <div class="modal-wrapper">

                    <div class="modal-container ">

                        <div class="modal-header bg-dark p-3 shadow">
                            <slot name="header">

                                <div class="center  text-white">
                                    แก้ไข
                                </div>
                            </slot>
                        </div>

                        <div class="modal-body ">
                            <slot name="body">

                                <div class="login container">


                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-label"> <b> Email </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="staticEmail"
                                                placeholder="Email">
                                        </div>
                                        <hr>
                                    </div>

                                    <div class="row">
                                        <label for="inputPassword" class="col-4 col-form-label"> <b> รหัสผ่าน </b></label>
                                        <div class="col">
                                            <input type="password" class="form-control-plaintext" id="inputPassword"
                                                placeholder="รหัสผ่าน">
                                        </div>
                                        <hr>
                                    </div>
                              
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> ชื่อ </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="name"
                                                placeholder="ชื่อ">
                                        </div>
                                        <hr>
                                    </div>
                                  
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> นามสกุล
                                            </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="lastname"
                                                placeholder="นามสกุล">
                                        </div>
                                        <hr>
                                    </div>
                                   
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> ชื่อที่แสดง
                                            </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="name_display"
                                                placeholder="ชื่อที่แสดง">
                                        </div>
                                        <hr>
                                    </div>
                                 
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> รายละเอียด
                                            </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="detail"
                                                placeholder="รายละเอียด">
                                        </div>
                                        <hr>
                                    </div>
                                 
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> ลิงค์ </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="link_navigator"
                                                placeholder="ลิงค์">
                                        </div>
                                        <hr>
                                    </div>
                               
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> เบอร์มือถือ
                                            </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="phone_number"
                                                placeholder="เบอร์มือถือ">
                                        </div>
                                        <hr>
                                    </div>

                                  
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> ไลน์ไอดี
                                            </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="id_line"
                                                placeholder="ไลน์ไอดี">
                                        </div>
                                        <hr>
                                    </div>

                                
                                    <div class="row">
                                        <label for="staticEmail" class="col-4 col-form-labell"> <b> ที่อยู่
                                            </b></label>
                                        <div class="col">
                                            <input type="text" class="form-control-plaintext" id="address"
                                                placeholder="ที่อยู่">
                                        </div>
                                        <hr>
                                    </div>

                              

                                    <button type="button" class="btn btn-primary"> Save</button>
                                </div>
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">

                                <div class="btn btn-outline-secondary mx-2" @click="onClickClose">ยกเลิก</div>

                                <div class="btn btn-outline-warning" @click="onConfirm">ออกจากระบบ</div>


                            </slot>

                        </div>
                    </div>
                </div>
            </div>
        </transition>

    </div>



</template>
    
<script>
import axios from 'axios';

export default {
    name: "edit_modal",

    props: {
        showModal: Boolean
    },

    data() {
        return {

        }

    },
    mounted() {






    },
    methods: {
        clear_value() {
            this.email = null
            this.password = null
            this.log = '____________________'
        },
        onClickClose(ev) {
            this.$emit('close', { name: 'this.showLogOut', state: false })
            this.clear_value()
        },

        onConfirm(ev) {
            this.$cookies.remove("email");
            this.$cookies.remove("password");
            this.$emit('logOut')
        }

    }
};
</script>
    
    
<style scoped>
/* we will explain what these classes do next! */
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

    padding: 10px;

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
    width: 80%;
    height: 30%;
    margin: 0px auto;

    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    margin-top: 5%;

    color: #030303;
    font-size: large;
    font-weight: 900;

}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.modal-body {
    margin: 30px 20px 10px 20px;
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