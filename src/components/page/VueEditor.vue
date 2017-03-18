<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> Form</el-breadcrumb-item>
                <el-breadcrumb-item>Editor</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            Vue-Quill-Editor: Quill-based rich text editor for Vue2.
            <a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
        </div>
        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit">Submit</el-button>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor';
    export default {
        data: function(){
            return {
                content: '<p>Hello BBK</p>',
                editorOption: {
                    // something config
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('Submitted successfully!');
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>