Vue.component(
    'resizepic', {
        props: [''],
        template: `
            <div class="resizePic">
                <div class='resizeOpt'>
                    <i class="fas fa-expand-arrows-alt"></i>
                    <p> Resize </p>
                    <div class='resizeOptChoice'>
                        <div class="optWidth">
                            <input placeholder="Width" id="optWidth" type="number" class="validate">
                        </div>
                        <i class="fas fa-times"></i>
                        <div class="optHeight">
                            <input placeholder="Height" id="optHeight" type="number" class="validate">
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn-large button">Apply Changes</a>
                </div>
                <div class='resizeLiveView'>
                    <canvas class='canvasShowPic'></canvas>
                </div>
            </div>
        `
    })