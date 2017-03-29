import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

let authURL = 'http://localhost:9000/authentication';
let registerURL = 'http://localhost:9999/api/register';

export const authRequest = params => { return Vue.axios.post(`${authURL}`, params); };
export const registerRequest = params => { return Vue.axios.post(`${registerURL}`, params); };

//  Vue.http.interceptors.push((req, next) => {
//   if (req.url.startsWith('/secured')) {
//     const token = localStorage.getItem('id_token')
//     req.headers['Authorization'] = 'Bearer ' + token
//   }
// })