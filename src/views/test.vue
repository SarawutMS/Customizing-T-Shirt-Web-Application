<template>
    <div class="custom">

        <div class="container">
            <h2 class="container">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <div class="shirt_color "></div>
                </div>
                <div @click="state_shirt = !state_shirt">
                    <div v-if="state_shirt">
                        <i class="bi bi-front "></i>
                        <div class="position-absolute top-50 start-50 translate-middle">
                            <img id="my-shirt" v-bind:src="require('../assets/img/crew_front.png')" />
                        </div>
                    </div>
                    <div v-else>
                        <i class="bi bi-back"></i>
                        <div class="position-absolute top-50 start-50 translate-middle">
                            <img id="my-shirt" v-bind:src="require('../assets/img/crew_back.png')" />
                        </div>
                    </div>
                </div>
            </h2>
            <div class="position-absolute top-50 start-0 translate-middle mx-5 mt-5" style="font-size:25px">
                <i @click="this.color_shirt = 'rgb(0, 0, 0)'" class="bi bi-circle-fill "
                    style="color:rgb(0, 0, 0);"></i>
                <br />
                <i @click="this.color_shirt ='rgb(255, 255, 255)'" class="bi bi-circle "></i>
            </div>
            <div class="position-absolute top-50 start-50 translate-middle label_pain">
                <canvas id="demo" height="250" width="125"></canvas>
                <text> Paintable Area</text>
            </div>
        </div>
        <nav class="fixed-bottom menubottom text-center bg-white pt-5 ">
            <div class="btn btn-outline-dark bi bi-clipboard-heart " @click="open_shirt = !open_shirt"></div>
            <div class="btn btn-outline-dark bi bi-fonts" @click="Addtext()"></div>
            <div class="btn btn-outline-dark bi bi-image" @click="test()"></div>
            <div class="btn btn-outline-dark bi bi-sticky"></div>
            <div class="btn btn-outline-dark bi bi-check-lg text-warning"></div>
        </nav>
    </div>
    <div>
        {{text}}

    </div>
    <!--  Modal  Line-->
    <Shirt_ChoiceVue :showModal=open_shirt />
    <Text_Edit :show-modal=on_edit_text>
        <template v-slot:body>
            <div class="text-center" v-bind="">

                <h1> <text class="px-1" :style="{ color:font_color,backgroundColor:bg_color }"> {{show_text}} </text>
                </h1>

            </div>

            <br />

            <input type="text" placeholder="" name="text" id="text" style="width:90%;" maxlength="15"
                v-model="text_value" @change="check_text(text_value)" />
            <br>


            <div class="row container  mt-3 " name="font_label">

                <div class=" col">
                    <select name="font" id="font" style="width: 100%;">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="col ">
                    <input type="number" placeholder="font-size" name="font-size" style="width: 100%;" />
                </div>
            </div>


            <br>
            <div class="row container  text-center" name="color_label">
                <div class="col">
                    <label for="font_color"><small>ตัวอักษร</small></label>
                    <input type="color" id="font_color" name="font_color" v-model="font_color">
                </div>
                <div class="col">
                    <label for="bg_color"><small>พื้นหลัง</small></label>
                    <input @change="check_text(text_value)" type="color" id="bg_color" name="bg_color"
                        v-model="bg_color" /><br>
                </div>
            </div>



        </template>
        <template v-slot:footer>
            <div class="btn btn-success mx-1" @click="Update_text()"> ตกลง </div>
            <div class="btn btn-warning mx-1 text-white" @click="this.on_edit_text = false"> ยกเลิก </div>
            <div class="btn btn-danger mx-1 text-white" @click="Obj_delete"> ลบ </div>
        </template>
    </Text_Edit>
</template>
<script scope>
import { fabric } from 'fabric'
import Shirt_ChoiceVue from '@/components/Create/Shirt_Choice.vue';
import Text_Edit from '@/components/Create/Text_Edit.vue';
let canvas = null
const del = () => {
    canvas.getActiveObjects().forEach((obj) => {
        canvas.remove(obj)
    });
    canvas.discardActiveObject().renderAll()
}



export default {
    name: "Create",
    components: {
        Shirt_ChoiceVue,
        Text_Edit,

    },
    data() {
        return {
            fisrt_text: "text",
            state_shirt: "crew_front.png",
            color_shirt: 'rgb(255,255,255)',
            open_shirt: false,
            on_edit_text: false,
            text: "1",

            show_text: "",
            text_value: "",
            font_color: "",
            bg_color: "",
            position: { left: "", top: "" }
            ,
        }

    },
    mounted() {
        canvas = new fabric.Canvas('demo')


        const modifiedHandler = (evt) => {
            var modifiedObject = evt.target;
            console.log(modifiedObject.get('left'), modifiedObject.get('top'));
        };

        canvas.on('mouse:down', this.Mouse_d_HavehoverCorsor);

        canvas.on('moving', modifiedHandler)


        canvas.on('mouse:dblclick', function (obj) {
            console.log(obj.target);
            let i = 0;

        });


    },
    methods: {






        Mouse_d_HavehoverCorsor(obj) {
            if (obj.target != null) {
                if (obj.target.hoverCursor != null) {
                    this.on_edit_text = !this.on_edit_text;
                    this.show_text = obj.target.text;
                    this.text_value = obj.target.text;
                    this.bg_color = obj.target.backgroundColor;
                    this.font_color = obj.target.fill;

                    this.position.left = obj.target.left;
                    this.position.top = obj.target.top;

                }
            }
        }, check_text(obj) {
            this.show_text = obj;
            if (obj == "") {

                this.show_text = 'แสดงตัวอย่าง';
            }

        },
        Update_text() {
            del();
            this.on_edit_text = false;
            var text = new fabric.Textbox(this.text_value, {
                fontFamily: 'Courier New',
                left: this.position.left,
                top: this.position.top,
                fontSize: 26,
                fill: this.font_color,
                backgroundColor: this.bg_color,
            });
            canvas.add(text)
        },
        Obj_delete() {
            this.on_edit_text = false,
                del();
        },
        Addtext() {
            var text = new fabric.Textbox(this.fisrt_text, {
                fontFamily: 'Courier New',
                left: 25,
                top: 100,
                fontSize: 26,
                fill: "#000000",
                backgroundColor: "#ffffff",
            });
            canvas.add(text)
        },


    }

};
//handler for moving objects on canvas
var moveHandler = function (evt) {
    var movingObject = evt.target;
    console.log(movingObject.get('left'), movingObject.get('top'));
};
//handler for done modifying objects on canvas

var customEvtHandler = function (evt) {
    console.log("I was triggered by a custom event.");
};

</script> 

<style lang="scss" scoped>
#text {
    color: v-bind(color);
    /* wrapped in quotes */

}

input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: solid;
    background-color: rgb(255, 255, 255);

    margin-left: 15px;
    width: 50%;
}


.no-outline:focus {
    outline: none;
}

#my-shirt {
    //background: url("../assets/img/crew_front.png") no-repeat;

    width: 320px;
    position: relative;
    margin-left: 6px;


}

.shirt_color {

    padding: 150px;
    padding-top: 200px;
    background-color: v-bind(color_shirt);

}


//ffc000
canvas {
    display: flex;

    border-style: solid;
    border-width: 1px;
    border-color: #ffc000;


}

.label_pain {

    text {
        background-color: rgb(161, 161, 161);
        color: white;
        padding: 2px 12px 5px 10px;

    }

    text-align: center !important;
}

.menubottom {

    .btn {
        padding: 15px 20px 15px 20px;
        margin-left: 5px;
        font-size: 25px;
    }

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
