<template>


    <Transition name="slide-fade">
        <div id="mySidebar" class="sidebar" v-if="Menu_show">
            <a href="javascript:void(0)" class="closebtn" @click="EndNav()">×</a>
            <div class="backgroud">
                <router-link class="link bg-warning shadow" :to="{name: 'Home'}" @click="CloseNave()">
                    <b>หน้าแรก </b>
                    <span class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end "></i>
                    </span>
                </router-link>
                <router-link class="link" :to="{name: 'Create'}" @click="CloseNave()"><b> ออกแบบเสื้อ </b> <span
                        class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                </router-link>

                <router-link class="link" :to="{name: ''}" @click="CloseNave()"><b> Design Gallery </b> <span
                        class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                </router-link>

                <router-link class="link" :to="{name: ''}" @click="showPayment = !showPayment"><b>วิธีการชำระเงิน </b>
                    <span class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end"></i>
                    </span>
                </router-link>


                <div v-if="!login">


                    <router-link class="link" :to="{name: ''} " @click="showRegister = !showRegister"><i
                            class="bi bi-person-fill"></i><b>สมัครสมาชิก</b> <span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>
                    <div class="container" @click="test()">
                    </div>
                    <router-link class="link" :to="{name: ''}" @click="showLogin = !showLogin" name="showLogin"
                        id="showLogin">
                        <i class="bi bi-box-arrow-in-right"></i>
                        <b>เข้าสู่ระบบ</b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>

                </div>
                <div v-else>
                    <router-link class="link" :to="{name: ''}" @click="showLogin = !showLogin" name="showLogin"
                        id="showLogin">
                        <i class="bi bi-person"></i>
                        <b class=""> ชื่อผู้ใช้งาน </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>


                    <router-link class="link" :to="{name: ''}" @click="showEdit = true" name="logOut" id="logOut">
                        <i class="bi  bi-file-earmark-person"></i>
                        <b> โปรไฟล์ </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>

                    <router-link class="link" :to="{name: ''}" @click="logOut()" name="logOut" id="logOut">
                        <i class="bi  bi-wallet2"></i>
                        <b> รายการรอชำระเงิน </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>



                    <router-link class="link" :to="{name: ''}" @click="logOut()" name="logOut" id="logOut">
                        <i class="bi  bi-card-list"></i>
                        <b> รายการที่ออกแบบ </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>


                    <router-link class="link" :to="{name: ''}" @click="logOut()" name="logOut" id="logOut">
                        <i class="bi bi-credit-card-2-front"></i>
                        <b> รายการขาย </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>



                    <router-link class="link" :to="{name: ''}" @click="logOut()" name="logOut" id="logOut">
                        <i class="bi bi bi-shop"></i>
                        <b> ดูแบบเสื้อที่มีการสั่งซื้อ </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>

                    <router-link class="link" :to="{name: ''}" @click="showLogout = true" name="logOut" id="logOut">
                        <i class="bi bi-box-arrow-in-left"></i>
                        <b> ออกจากระบบ </b><span class="position-absolute end-0 me-3">
                            <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
                    </router-link>

                </div>
            </div>
        </div>
    </Transition>






    <nav class="navbar  bg-dark pb-0 ">
        <div style="height: 6px;">Thynne</div>
        <div class="container-fluid bg-white ">

            <div class="branding">
                <i class="bi bi-egg-fried fa-1x"></i>
            </div>

            <div class="d-flex">

                <div class="p-1" @click="showCart = !showCart">
                    <i class="bi bi-cart2 fa-2x text-warning"></i>
                </div>

                <div class="p-1" @click="Menu_show = !Menu_show">
                    <i class="bi bi-list fa-2x text-warning"></i>
                </div>

            </div>
        </div>
    </nav>




    <nav class="fixed-bottom menubottom text-center bg-dark">
        <div class="row">
            <div class="col p-3">
                <router-link class="link" :to="{name: 'Home'}">
                    <text class="text-warning"><b> ALL PORDUCTS </b></text>
                </router-link>
            </div>
            <div class="col bg-warning p-3">


                <router-link class="link" :to="{name: 'Create'}">
                    <text class="text-dark"><b> Create </b></text>
                </router-link>

            </div>
        </div>
    </nav>



    <!-- Modal <Register_ModalVue /> -->



    <!-- The Modal -->
    <Logout_ModalVue :showModal=showLogout @close="close" @logOut="logOut" />
    <Register_ModalVue :showModal=showRegister @close="click_event" />
    <Login_ModalVue :showModal=showLogin @close="click_event" @login="check_login_" />
    <Payment_Modal :showModal=showPayment @close="click_event" />
    <Cart_Modal :showModal=showCart @close="click_event" />
    <Edit_Modal :showModal=showEdit @close="click_event" />
</template>
<script>


import Logout_ModalVue from './Logout_Modal.vue';
import Register_ModalVue from './Register_Modal.vue';
import Login_ModalVue from './Login_Modal.vue';
import Payment_Modal from './Payment/Payment_Modal.vue';
import Cart_Modal from './Payment/Cart_modal.vue';

import Edit_Modal from './Menu_bar/Edit_Modal.vue';
import { notify } from "@kyvg/vue3-notification";
export default {
    name: "menubar",
    components: {
        Register_ModalVue,
        Login_ModalVue,
        Payment_Modal,
        Cart_Modal, Logout_ModalVue, Edit_Modal
    },
    data() {
        return {
            login: false,
            Menu_show: false,

            showEdit: false,
            showRegister: false,
            showLogin: false,
            showLogout: false,
            showPayment: false,
            showCart: false
        };
    },
    mounted() {
        this.check_login_()
    },
    methods: {
        check_login_() {

            const login = this.$cookies.get('email');
            console.log(login);
            if (login != null) {
                this.login = true;

            } else {
                this.login = false;

            }

        },
        logOut(ev) {
            this.showLogout = false;
            this.check_login_()
            this.CloseNave()
        },
        close(ev) {

            this.showLogout = false;

        },
        click_event(ev) {

            this.showLogout = false;
            this.CloseNave()
        },
        submit() {
            this.$emit('submit', 1)
            console.log('submit')
        },
        EndNav() {

            this.Menu_show = false

            this.clear()


        }, CloseNave() {
            document.getElementById("mySidebar").style.width = "0px"
            this.clear()
        }, clear() {
            this.showLogin = false
            this.showRegister = false
            this.showCart = false
            this.showPayment = false
        },
        sidebar() {
            document.getElementById("mySidebar").style.width = "250px";

        },
    },
};
</script>
<link rel="stylesheet" href="../assets/css/modal_css.css" /> 
<style lang="scss" scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.sidebar {


    height: 100%;
    width: 250px;
    position: fixed !important;
    z-index: 9998;
    top: 0;
    right: 0;
    background-color: #111;
    opacity: 90%;
    overflow-x: hidden;
    // transition: 0.5s;
    padding-top: 60px;

    .backgroud {

        background-color: rgba(255, 255, 255, 0.89);

    }
}

.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 16px;
    color: #050505;
    display: block;
    transition: 0.3s;

}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 40px;
    margin-left: 50px;
    color: orange;
}

.openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
}

.openbtn:hover {
    background-color: #444;
}




.menubottom {

    .link {
        font-size: 15px;
        transition: 0.5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        text-decoration: none;

        &:hover {
            opacity: 1;
        }
    }

}
</style>
    