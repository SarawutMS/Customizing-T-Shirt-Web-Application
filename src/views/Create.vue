<template>
    <div class="custom">
        <div class="container">
            <h2 class="container">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <div class="shirt_color "></div>
                </div>

                <i @click="state_shirt = !State_canvas()" class="bi"
                    :class="[state_shirt ? 'bi-front' : 'bi-back']"></i>


                <div>

                    <div class="position-absolute top-50 start-50 translate-middle">
                        <img id="my-shirt" v-bind:src="shirt_s" />
                    </div>
                </div>

            </h2>
            <div class="position-absolute top-50 start-0 translate-middle mx-5 mt-5" style="font-size:25px">
                <i @click="this.color_shirt = 'rgb(28, 28, 28)'" class="bi bi-circle-fill "
                    style="color:rgb(28, 28, 28);"></i>
                <br />
                <i @click="this.color_shirt = 'rgb(255, 255, 255)'" class="bi bi-circle "></i>
            </div>
            <div class="position-absolute top-50 start-50 translate-middle label_pain">


                <div v-bind:style="canvas_sf">
                    <canvas ref="front" class="demo"></canvas>
                </div>
                <div v-bind:style="canvas_sb">
                    <canvas ref="back" class="demo"></canvas>
                </div>



                <text> Paintable Area</text>
            </div>
        </div>
        <nav class="fixed-bottom bg-light row  mx-0">
            <!--  BTN  -->
            <Shirt_ChoiceVue v-bind:type="type_shirt" @Choice_Shirt="Change_type" />
            <div class="col btn btn-outline-secondary">
                <div class=" bi bi-fonts p-3" @click="Addtext()"></div>
            </div>
            <div class="col  btn btn-outline-secondary">
                <div class="bi bi-image p-3" @click="popFileSelector()"></div>
            </div>
            <div class="col  btn btn-outline-secondary">
                <div class="bi bi-sticky p-3" @click="test"></div>
            </div>
            <div class="col  btn btn-outline-secondary">
                <div class="bi bi-check-lg text-warning p-3" @click="Save_Fn"></div>
            </div>
            <!--  save_Button()  -->
        </nav>
    </div>
    <div>

        <form>
            <input type="hidden" id="myfile" name="myfile" v-model="this.data" />
        </form>
    </div>
    <!--  Modal  Line-->

    <Text_Edit :show-modal=on_edit_text>
        <template v-slot:body>


            <input class="text-center" type="text" placeholder="" name="text" id="text" style="width:90%;"
                maxlength="15" :style="{ color: font_color, backgroundColor: bg_color }" v-model="text_value"
                @change="check_text(text_value)" />
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

        <div class="static" :class="{
            active: isActive,
            'text-danger': hasError
        }">
            ssd
        </div>
    </Text_Edit>



    <Save :saveMenu=on_save :type_shirt=type_shirt :canvasData=DataC :property=color_shirt @close="on_save = !on_save"
        @save="Alert" @alert="Alert" />

    <AlertVue :showAlert="showAlert" :data="Data" @close="showAlert = !showAlert" @confirm="Mongo_DB"></AlertVue>
    <form>

        <input type="file" @change="handleFiles" id="fileElem" multiple accept="image/*" style="display:none" />
    </form>
</template>
<script>
import { fabric } from 'fabric'
import Shirt_ChoiceVue from '@/components/Create/Shirt_Choice.vue';
import Text_Edit from '@/components/Create/Text_Edit.vue';
import Save from '@/components/Create/Save_.vue';
import axios from 'axios';
import AlertVue from '@/components/Alert.vue';

var FormData = require('form-data');

var canvas = [];
var __canvases = [];
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
        Save,
        AlertVue
    },
    data() {
        return {
            Data: [],
            showAlert: false,
            on_save: false,
            fisrt_text: "text",
            state_shirt: true,
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
            old_canvas: canvas
            ,
            localhost: window.location.host,
            img: [],
            cookies: this.$cookies,
            shirt: true,
            fornt_back_shirt: 0,
            type_shirt: "crew_",
            DataC: { 'front': '', 'back': '' },
            deleteIcon: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E",
        }

    },
    computed: {
        canvas_sb() {

            if (this.state_shirt) {
                return "display:none"
            } else {
                return "display:block"
            }
        },
        canvas_sf() {

            if (!this.state_shirt) {
                return "display:none"
            } else {
                return "display:block;"
            }
        },
        shirt_s() {
            if (this.state_shirt) {
                this.data = require(`../assets/img/${this.type_shirt}front.png`);
            } else {
                this.data = require(`../assets/img/${this.type_shirt}back.png`);
            }





            return this.data;
        },



    },
    mounted() {
        /// 


        ////

        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerColor = 'black';
        fabric.Object.prototype.cornerStyle = 'circle';


        var canvas1 = new fabric.Canvas(this.$refs.front);
        var canvas2 = new fabric.Canvas(this.$refs.back);


        __canvases[0] = canvas1;
        __canvases[0].setDimensions({ width: 140, height: 250 });
        __canvases[1] = canvas2;
        __canvases[1].setDimensions({ width: 140, height: 250 });
        //canvas = new fabric.Canvas(this.$refs.demo);





        var imageURL = require('../assets/img/crew_front.png');
        var image = new Image()
        image.src = require('../assets/img/crew_front.png');


        var deleteImg = document.createElement('img');
        deleteImg.src = this.deleteIcon;
        fabric.Object.prototype.controls.deleteControl = new fabric.Control({
            x: 0.5,
            y: -0.7,
            offsetY: 16,
            cursorStyle: 'pointer',
            mouseUpHandler: this.deleteObject,
            render: this.renderIcon(deleteImg),
            cornerSize: 24
        });

        //canvas.on('mouse:down', this.Mouse_d_HavehoverCorsor);


        /*  canvas.on('mouse:dblclick', function (obj) {
              console.log("dbl_check");
              let i = 0;
              alert("test")
          });*/

    },
    methods: {

        test(ev) {

            let front = __canvases[0].toJSON();


        },


        deleteObject(eventData, transform) {
            var target = transform.target;
            var canvas = target.canvas;
            canvas.remove(target);
            canvas.requestRenderAll();

        },
        renderIcon(icon) {
            return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
                var size = this.cornerSize;
                ctx.save();
                ctx.translate(left, top);
                ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
                ctx.drawImage(icon, -size / 2, -size / 2, size, size);
                ctx.restore();
            }
        },

        Save_Fn(ev) {

            this.DataC.front = __canvases[0].toDataURL({
                format: 'png',
                enableRetinaScaling: true,
                multiplier: 1
            });

            this.DataC.back = __canvases[1].toDataURL({
                format: 'png',
                enableRetinaScaling: true,
                multiplier: 1

            });


            this.on_save = !this.on_save;
        },
        Change_type(ev) {

            this.type_shirt = ev.type

            switch (this.type_shirt) {


                case 'womens_crew_': {
                    __canvases[this.fornt_back_shirt].setDimensions({ width: 140, height: 250 });
                    break;
                }
                case 'mens_tank_': {
                    __canvases[this.fornt_back_shirt].setDimensions({ width: 140, height: 200 });
                    break;
                }
                default: {
                    __canvases[this.fornt_back_shirt].setDimensions({ width: 140, height: 250 });
                    break;
                }

            }


        },

        State_canvas() {
            if (this.state_shirt) {
                this.fornt_back_shirt = 1;
            } else {
                this.fornt_back_shirt = 0;
            }
            return this.state_shirt
        },
        Check() {

            this.front_c.forEach(obj => {
                canvas.add(obj)
            });


        },
        Alert(ev) {


            this.Data = ev;
            this.showAlert = !this.showAlert;


        },

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
                    __canvases[this.fornt_back_shirt].add(img).renderAll().setActiveObject(img);
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

            console.log(this.__canvases[0].getObjects());
            /* let token = "JAfreOCefsj3bMqD6usegzhajzzh4sGYGc8Sp4fG"
             axios.get(`https://search.icons8.com/api/iconsets/v5/search?term=cart&token=${token}`)
                 .then(response => {
                     console.log(response.data);
                 })
                 .catch(error => {
                     console.log(error);
                 }); */
        },
        save_Button() {
            let datas = new FormData();

            let sen = canvas.toDataURL({
                format: 'png',
            });
            let tes = canvas.toSVG();


            datas.append('fileuploads', sen);
            datas.append('svg', tes);
            datas.append('name', this.$cookies.get('email'));
            datas.append('count', '1');
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
        },
        check_text(obj) {
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
            var text = new fabric.IText(this.fisrt_text, {
                fontFamily: 'Courier New',
                left: 25,
                top: 100,
                fontSize: 26,
                fill: "#000000",
                //backgroundColor: "#ffffff",

            });
            __canvases[this.fornt_back_shirt].add(text)

        },


        Mongo_DB() {


            let front = __canvases[0].toDataURL({
                format: 'png',
            });
            let back = __canvases[1].toDataURL({
                format: 'png',
            });

            const userEmail = this.cookies.get('email');

            let datas = new FormData();
            datas.append('back', back);
            datas.append('front', front);
            datas.append('nameshirt_', this.Data.container.nameshirt_);
            datas.append('type_shirt', this.type_shirt);
            datas.append('users_id', "dataUrl");
            datas.append('email', userEmail);

            datas.append('for_edit', JSON.stringify(__canvases[0].toJSON()));
            datas.append('permission', this.Data.container.permission);
            datas.append('detail', this.Data.container.detail);
            axios.post(`http://localhost:3000/services/arm_service/create_shirt`,
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
@media (max-height: 500px) {
    .fixed-bottom {
        

        display: none;

    }


}




.back_demo {
    //relative



    border: 1px solid #318cc0;


}

.demo {
    //relative
    border: 1px solid #a1a1a1;
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
        background-color: #a1a1a1;
        color: white;
        padding: 3px 12px 5px 17px;

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
