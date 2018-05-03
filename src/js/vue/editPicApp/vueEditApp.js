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
