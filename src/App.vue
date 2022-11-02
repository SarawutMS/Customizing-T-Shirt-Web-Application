
<template>
  <div>

  </div>
  <div class="app">
    <Menubar />
    <notifications position="top" width="60%" style="margin-top: 6%; margin-left: 10%;" />
    <!--  <Navigation /> -->

    <router-view />


  </div>

</template>

<script>
import Navigation from './components/Navigation.vue';
import Menubar from './components/Menubar.vue';
import Login_Modal from './components/Login_Modal.vue';
import axios from 'axios';
import { notify } from "@kyvg/vue3-notification";


export default {
  name: "App",

  data() {
    return {
      cookies: this.$cookies,
    }
  },
  mounted() {

    //this.cookies.set("myCoookie", "abcdefg");


    console.log(this.$cookies.get('email'))

  }, methods: {



  },
  emits: {
    success(ev) {
      notify({
        type: "success",
        text: "เข้าสู่ระบบสำเร็จ",
      });

      console.log(ev);
    },
    onCookies(ev) {
    
      console.log(this.cookies);
    }
  },
  components: {
    Navigation,
    Menubar,
    Login_Modal,

  },
};
</script>






<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Georgia, serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  //background-color: #f1f1f1;
}


.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>

