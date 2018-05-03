Vue.component(
    'uploadpic', {
        template: `
            <div class="uploadPic">
                <p> Upload your Pic here ! </p>
                <label for='uploadFile' id='label-uploadFile'>
                    <i class="fas fa-upload"></i>
                </label>
                <input type='file' id='uploadFile'/>
            </div>
        `
    })
Vue.component(
    'resizepic', {
        props: [''],
        template: `
            <div class="resizePic">
                <i class="fas fa-expand-arrows-alt"></i>
                <p>Resize</p>
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

var app = new Vue({

    el: '#app',

    data: {
        uploadPic: true,
        resizePic: false,
        filterPic: false,
        changeAfterDotPic: false,
        downloadPic: false,
    },

    methods: {
        setSeen: (e) => {

            var targetData = e.target.dataset.setview;

            const dataArray = [
                'uploadPic',
                'resizePic',
                'filterPic',
                'changeAfterDotPic',
                'downloadPic'
            ];


            for (var i = 0; i < dataArray.length; i++) {
                if (targetData == dataArray[i]) {
                    switch (i) {
                        case 0:
                            app._data.uploadPic = true;
                            break;
                        case 1:
                            app._data.resizePic = true;
                            break;
                        case 2:
                            app._data.filterPic = true;
                            break;
                        case 3:
                            app._data.changeAfterDotPic = true;
                            break;
                        case 4:
                            app._data.downloadPic = true;
                            break;
                    }
                } else {
                    switch (i) {
                        case 0:
                            app._data.uploadPic = false;
                            break;
                        case 1:
                            app._data.resizePic = false;
                            break;
                        case 2:
                            app._data.filterPic = false;
                            break;
                        case 3:
                            app._data.changeAfterDotPic = false;
                            break;
                        case 4:
                            app._data.downloadPic = false;
                            break;
                    }
                }
            }
        },

        debugThis: (e) => {
            console.log(e.target)
        },
    }
})