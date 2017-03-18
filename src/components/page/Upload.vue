<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> Form</el-breadcrumb-item>
                <el-breadcrumb-item>Upload picture</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-title">Support drag and drop</div>
        <div class="plugins-tips">
            Element UI Comes with upload components.
            --> <a href="http://element.eleme.io/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
        </div>
        <el-upload
                action="/api/posts/"
                type="drag"
                :thumbnail-mode="true"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-error="handleError"
                :default-file-list="fileList"
        >
            <i class="el-icon-upload"></i>
            <div class="el-dragger__text">Drag the file here, or<em>Click Upload</em></div>
            <div class="el-upload__tip" slot="tip">Can only upload jpg/png file, and no more than 500kb</div>
        </el-upload>
        <div class="content-title">Support clipping</div>
        <div class="plugins-tips">
            Vue-Core-Image-Upload：A lightweight vue upload plugin that supports clipping.
            --> <a href="https://github.com/Vanthink-UED/vue-core-image-upload" target="_blank">Vue-Core-Image-Upload</a>
        </div>
        <img class="pre-img" :src="src" alt="">
        <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
                               :crop="true"
                               text="Upload image"
                               url="/api/posts/"
                               extensions="png,gif,jpeg,jpg"
                               @:imageuploaded="imageuploaded"
                               @:errorhandle="handleError"></vue-core-image-upload>
    </div>
</template>

<script>
    import VueCoreImageUpload  from 'vue-core-image-upload';
    export default {
        data: function(){
            return {
                src: '../../../static/img/img.jpg',
                fileList: []
            }
        },
        components: {
                VueCoreImageUpload
        },
        methods:{
            imageuploaded(res) {
                console.log(res)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleError(){
                this.$notify.error({
                    title: 'Upload failed',
                    message: 'Photo upload interface upload failed, can be changed to their own server interface'
                });
            }
        }
    }
</script>

<style scoped>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .pre-img{
        width:250px;
        height: 250px;
        margin-bottom: 20px;
    }
</style>