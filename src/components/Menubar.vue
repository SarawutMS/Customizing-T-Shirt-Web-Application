<template>
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
        <div class="backgroud">
            <router-link class="link" :to="{name: 'Home'}">
                <b>หน้าแรก </b>
                <span class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end "></i> </span>
            </router-link>
            <router-link class="link" :to="{name: 'Create'}"><b> ออกแบบเสื้อ </b> <span
                    class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
            </router-link>

            <router-link class="link" :to="{name: ''}"><b> Design Gallery </b> <span
                    class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
            </router-link>

            <router-link class="link" :to="{name: ''}" @click="showPayment = !showPayment"><b>วิธีการชำระเงิน </b> <span
                    class="position-absolute end-0 me-3"> <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
            </router-link>

            <router-link class="link" :to="{name: ''} " @click="showRegister = !showRegister"><i
                    class="bi bi-person-fill"></i><b>สมัครสมาชิก</b> <span class="position-absolute end-0 me-3"> <i
                        class="bi bi-chevron-right ps-5 text-end"></i> </span>
            </router-link>
            <div class="container" @click="test()">
            </div>
            <router-link class="link" :to="{name: ''}" @click="showLogin = !showLogin"><i
                    class="bi bi-box-arrow-in-right"></i> <b>เข้าสู่ระบบ</b><span class="position-absolute end-0 me-3">
                    <i class="bi bi-chevron-right ps-5 text-end"></i> </span>
            </router-link>
        </div>
    </div>


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

                <div class="p-1" @click="sidebar()">
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


    <Register_ModalVue :showModal=showRegister />
    <Login_ModalVue :showModal=showLogin />
    <Payment_Modal :showModal=showPayment />
    <Cart_Modal :showModal=showCart />
</template>
<script>

import Register_ModalVue from './Register_Modal.vue';
import Login_ModalVue from './Login_Modal.vue';
import Payment_Modal from './Payment/Payment_Modal.vue';
import Cart_Modal from './Payment/Cart_modal.vue';
export default {
    name: "menubar",
    components: {
        Register_ModalVue,
        Login_ModalVue,
        Payment_Modal,
        Cart_Modal
    },
    data() {
        return {

            showRegister: false,
            showLogin: false,
            showPayment: false,
            showCart: false
        };
    },
    mounted() {

    },
    methods: {

        submit() {
            this.$emit('submit', 1)
            console.log('submit')
        },
        closeNav() {
            document.getElementById("mySidebar").style.width = "0px";
        },
        sidebar() {
            document.getElementById("mySidebar").style.width = "250px";



        },
    },
};
</script>
<link rel="stylesheet" href="../assets/css/modal_css.css" /> 
<style lang="scss" scoped>
.sidebar {
   
  
    height: 100%;

  
    width: 0px;
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
    