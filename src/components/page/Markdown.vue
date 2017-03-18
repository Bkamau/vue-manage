<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>Form</el-breadcrumb-item>
                <el-breadcrumb-item>markdown</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            Vue-SimpleMDE：Vue.js Markdown Editor
            --> <a href="https://github.com/F-loat/vue-simplemde" target="_blank">Vue-SimpleMDE</a>
        </div>
        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
        <div class="plugins-tips">
            <p>Since the markdown syntax has been used, then there is a very practical problem. How to show the data in the foreground?？</p>
            <br>
            <p>This time you need to analyze the markdown syntax. can use <a href="https://github.com/miaolz123/vue-markdown" target="_blank">vue-markdown</a>：一个基于vue.js的markdown语法解析插件。（这里不作展开，有需要自行了解）</p>
        </div>
    </div>
</template>

<script>
    import { markdownEditor } from 'vue-simplemde';
    export default {
        data: function(){
            return {
                content:'',
                configs: {
                    status: true,
                    initialValue: 'Hello BBK',
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                        highlightingTheme: 'atom-one-light'
                    }
                }
            }
        },
        components: {
            markdownEditor
        }
    }
</script>