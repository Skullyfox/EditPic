var app = new Vue({

    el: '#app',

    data: {
        targetData: 'resizePic',
        picture: '',
    },

    methods: {
        setSeen: function(e) {
            if(app.picture != ''){
                drawPic();
                app.targetData = e.target.dataset.setview;
            }else{
                app.targetData = e.target.dataset.setview;
            }
        },
        upload: function() {
            console.log("upload tried");
            app.picture = new SimpleImage(img);
        }
    }
});
var img = document.querySelector('#uploadFile'),
    canvas = document.querySelector('.canvasShowPic');

function drawPic() {
    var pictureWillDraw = app._data.picture;
    pictureWillDraw.drawTo(canvas);
}

Vue.component(
    'changeafterdotpic', {
        template: `
            <div class="changeAfterDotPic">
                <i class="far fa-image"></i>
                <p>Change Extension</p>
            </div>
        `
    })
Vue.component(
    'downloadpic', {
        template: `
            <div class="downloadPic">
                <i class="fas fa-download"></i>
                <p>Download your Picture</p>
            </div>
        `
    })
Vue.component(
    'filterpic', {
        template: `
            <div class="filterPic">
                <i class="fas fa-magic"></i>
                <p>Filter</p>
            </div>
        `
    })
Vue.component(
    'resizepic', {
        props: [''],
        template: `
            <div class="resizePic">
                <div class='resizeOpt'>
                    <i class="fas fa-expand-arrows-alt"></i>
                    <p>Resize</p>
                </div>
                <div class='resizeLiveView'>
                    <canvas class='canvasShowPic'></canvas>
                </div>
            </div>
        `
    })
Vue.component(
    'uploadpic', {
        template: `
            <div class="uploadPic">
                <p> Upload your Pic here ! </p>
                <label for='uploadFile' id='label-uploadFile'>
                    <i class="fas fa-upload"></i>
                </label>
                <input type='file' id='uploadFile' multiple="false" accept="image/*" v-on:change="$emit('upload-file')"/>
            </div>
        `
    })