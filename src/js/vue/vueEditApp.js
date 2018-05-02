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

var app = new Vue({

    el: '#app',

    data: {
      uploadPic: false,
      resizePic: false,
      filterPic: false,
      changeAfterDotPic: false,
      downloadPic: false
    },

    methods: {
        setSeen: (div) => {
            console.log(div)
        }
    }
    
  })