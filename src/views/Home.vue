<template>
  <div class="home container">



    <div class="d-flex justify-content-center main_product">


      <!-- img <div class="border border-5" style="width: 800px;height: 400px;"></div> -->
      <div class="border border-5" style="width: 320px;height: 150px;"></div>

    </div>

    <div class="container mt-3">
      <h5>
        <b>
          Products
        </b>
      </h5>
      <hr>
      <div class="row product">
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;">
          </div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;">
       
          </div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>   
      </div>
    </div>


    <div class="container mt-3">
      <h5>
        <b> Featured Creators </b>

      </h5>
      <hr>
      <div class="row creator mb-5">
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
      
      </div>
    </div>


  </div>
</template>





<!--  


    <div class="container m-5">
      <h4>
        <b>
          Products
        </b>
      </h4>
      <hr>
      <div class="row product">
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;">
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>

        </div>
        <div class="col">
          <div class="border border-5 border border-5-3" style="width: 85px;height: 85px;">

            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div class="container m-5">
      <h4>
        <b> Featured Creators </b>

      </h4>
      <hr>
      <div class="row creator">
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>
        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;"></div>

        </div>
        <div class="col">
          <div class="border border-5" style="width: 85px;height: 85px;">
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>

        </div>
      </div>
    </div>


-->
<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.main_product {
  .border {
    background-color: rgb(201, 201, 201);
  }

}

.product {
  .border {
    background-color: rgb(201, 201, 201);
  }
}

.creator {
  .border {
    background-color: rgb(201, 201, 201);
  }
}

#mdiv {
  width: 25px;
  height: 25px;
  background-color: red;
  border: 1px solid black;
}

.mdiv {
  height: 85px;
  width: 2px;
  margin-left: 50%;
  background-color: rgb(126, 126, 126);
  transform: rotate(45deg);
  Z-index: 1;
}

.md {
  height: 85px;
  width: 2px;
  background-color: rgb(126, 126, 126);
  transform: rotate(90deg);
  Z-index: 2;
}

.hero {
  background-image: url("../assets/hero-bg.jpg");
  background-attachment: fixed;
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;

      @media (min-width: 550px) {
        font-size: 85px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }

    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
