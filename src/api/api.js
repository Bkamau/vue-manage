import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

let URL = '';

export const request = params => { return Vue.axios.get(`${URL}`,   params); };

//  Vue.http.interceptors.push((req, next) => {
//   if (req.url.startsWith('/secured')) {
//     const token = localStorage.getItem('id_token')
//     req.headers['Authorization'] = 'Bearer ' + token
//   }
// })