// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en' // to set locale to english
import store from './store'

import '../theme/index.css' // generated Element-UI theme


Vue.use(ElementUI, {
    locale
})


router.beforeEach((to, from, next) => {
    let authentic = store.getters.isAuthentic
    if (to.matched.some(record => record.meta.requiresAuth) && !authentic) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');