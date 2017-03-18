import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { requiresAuth: true },
            children: [{
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve) // vue-datasource
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve) // Vue-Quill-Editor
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve) // Vue-Quill-Editor
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve) // Vue-Core-Image-Upload
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve) // vue-echarts-v3
                },
                {
                    path: '/mixcharts',
                    component: resolve => require(['../components/page/MixCharts.vue'], resolve) // vue-echarts-v3
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/Auth/index'], resolve)
        },
    ]
})