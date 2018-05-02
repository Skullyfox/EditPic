Vue.component(
    'uploadpic', {
        template: `
            <div class="uploadPic">
                <i class="fas fa-upload"></i>
                <p>Upload your picture</p>
            </div>
        `
    })
Vue.component(
    'resizepic', {
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
      downloadPic: false
    },

    methods: {
        setSeen: (e) => {

            var targetData  = e.target.dataset.setview;

            const   dataArray = [
                'uploadPic',
                'resizePic',
                'filterPic',
                'changeAfterDotPic',
                'downloadPic'
            ];


            for (var i = 0 ; i < dataArray.length ; i++){
                if( target == dataArray[i] ){
                    app._data.dataArray[i] = true;
                } else {
                    app._data.dataArray[i] = false;
                }
            }

            console.log(e.target.dataset.setview)
            console.log(dataArray[0])
            console.log(target == dataArray[0])
        }
    }
    
  })