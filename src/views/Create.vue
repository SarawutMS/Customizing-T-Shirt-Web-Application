<template>
    <div class="custom">
        <div class="container">
            <h2 class="container">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <div class="shirt_color "></div>
                </div>

                <i @click="state_shirt = !state_shirt" class="bi" :class="{'bi-front':state_shirt}"></i>
                <i @click="state_shirt = !state_shirt" class="bi" :class="{'bi-back':!state_shirt}"></i>

                <div v-if="state_shirt">

                    <div class="position-absolute top-50 start-50 translate-middle">
                        <img id="my-shirt" v-bind:src="this.data" />
                    </div>
                </div>
                <div v-else>

                    <div class="position-absolute top-50 start-50 translate-middle">
                        <img id="my-shirt" v-bind:src="this.data" />
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
            <div class="btn btn-outline-dark bi bi-image" @click="popFileSelector()"></div>
            <div class="btn btn-outline-dark bi bi-sticky" @click="add_stiker()"></div>
            <div class="btn btn-outline-dark bi bi-check-lg text-warning" @click="save_Button()"></div>
        </nav>
    </div>
    <div>

        <form>
            <input type="hidden" id="myfile" name="myfile" v-model="this.data" />
        </form>
    </div>
    <!--  Modal  Line-->
    <Shirt_ChoiceVue :showModal=open_shirt />
    <Text_Edit :show-modal=on_edit_text>
        <template v-slot:body>
            <div class="text-center" v-bind="">

                <h1> <text class="px-1" :style="{ color:font_color,backgroundColor:bg_color }"> {{show_text}}
                    </text>
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

        <div class="static" :class="{ active: isActive,
        'text-danger': hasError }">
            ssd
        </div>
    </Text_Edit>

    <form>

        <input type="file" @change="handleFiles" id="fileElem" multiple accept="image/*" style="display:none" />
    </form>
</template>
<script scope>
import { fabric } from 'fabric'
import Shirt_ChoiceVue from '@/components/Create/Shirt_Choice.vue';
import Text_Edit from '@/components/Create/Text_Edit.vue';
import axios from 'axios';


var FormData = require('form-data');

let canvas = null
const del = () => {
    canvas.getActiveObjects().forEach((obj) => {
        canvas.remove(obj)
    });
    canvas.discardActiveObject().renderAll()
}

const stoDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))





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
            data: require('../assets/img/crew_front.png'),
            send: "",
            isActive: true,
            hasError: true,

            canvas_e: null,

            img: [],
        }

    },
    mounted() {

        canvas = new fabric.Canvas("demo");
        var imageURL = require('../assets/img/crew_front.png');
        var image = new Image()
        image.src = require('../assets/img/crew_front.png');

        canvas.on('mouse:down', this.Mouse_d_HavehoverCorsor);


        canvas.on('mouse:dblclick', function (obj) {
            console.log("dbl_check");
            let i = 0;
            alert("test")
        });




    },
    methods: {
        handleFiles(event) {
            var data = event.target.files[0]
            console.log(event.target.files)
            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = (e) => {
                fabric.Image.fromURL(e.target.result, (img) => {
                    img.scaleToWidth(60);
                    img.scaleToHeight(60);
                    img.set({ 'left': 20 });
                    img.set({ 'top': 20 });
                    canvas.add(img).renderAll().setActiveObject(img);
                });
            }

        },
        popFileSelector() {
            var el = document.getElementById("fileElem");
            if (el) {
                el.click()


            }
        },

        add_stiker() {
            let token = "JAfreOCefsj3bMqD6usegzhajzzh4sGYGc8Sp4fG"
            axios.get(`https://search.icons8.com/api/iconsets/v5/search?term=cart&token=${token}`)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        save_Button() {
            let datas = new FormData();
            let sen = canvas.toDataURL({
                format: 'png',
            });
            let tes = canvas.toSVG();

       
        
            datas.append('fileuploads', sen);
            datas.append('svg', tes);
            datas.append('name', 'Customer');
            datas.append('count', '0');
            axios.post('http://localhost:3000/services/arm_service/upload',
                datas,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        imporT_() {
            const test = require('../assets/dd.jpg')
            console.log(this.canvas_e.toDataURL());
            //for image out side canvas;
            stoDataURL(this.canvas_e.toDataURL())
                .then(dataUrl => {
                    let datas = new FormData();
                    datas.append('fileuploads', dataUrl);
                    axios.post('http://localhost:3000/services/arm_service/upload',
                        datas,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
        },
        upload_text() {
            var body = {
                userName: 'Fred',
                fileupload: require('../assets/img/crew_front.png')
            }

            axios({
                method: 'post',
                url: 'http://192.168.1.15:3000/arm_mongo/upload_text',
                data: body
            })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },



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
                backgroundColor: "transparent",
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
#canvas-container {
    width: 95%;
    height: 95%;
    margin: auto !important;



}

canvas {
    //relative



    border: 1px solid #ffc000;


}

.img {
    width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;


}

.text {
    top: 100%;
    width: 100%;
    font-size: 18px;
    text-align: center;
}









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
