<template>
    <div class="login container">
        <h4 class="text-danger text-decoration-line-through"> แก้ไข </h4>

        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> Email </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="Email">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="inputPassword" class="col-sm-2 col-form-label"> <b> รหัสผ่าน </b></label>
            <div class="col-sm-10">
                <input type="password" class="form-control-plaintext" id="inputPassword" placeholder="รหัสผ่าน">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> ชื่อ </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="name" placeholder="ชื่อ">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> นามสกุล </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="lastname" placeholder="นามสกุล">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> ชื่อที่แสดง </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="name_display" placeholder="ชื่อที่แสดง">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> รายละเอียด </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="detail" placeholder="รายละเอียด">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> ลิงค์ </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="link_navigator" placeholder="ลิงค์">
            </div>
        </div>
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> เบอร์มือถือ </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="phone_number" placeholder="เบอร์มือถือ">
            </div>
        </div>
        
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> ไลน์ไอดี </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="id_line" placeholder="ไลน์ไอดี">
            </div>
        </div>
        
        <hr>
        <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"> <b> ที่อยู่ </b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="address" placeholder="ที่อยู่">
            </div>
        </div>
        
        <hr>

        <button type="button" class="btn btn-primary"> Save</button>
    </div>
</template>
  
<script>
// @ is an alias to /src

export default {
    name: "Edit",
    components: {},
};
</script>
  
<style lang="scss" scoped>
.full_bt {
    width: 100%;
}

.login {
    padding-top: 10%;

}
</style>
  