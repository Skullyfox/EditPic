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