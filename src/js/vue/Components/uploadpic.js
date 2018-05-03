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