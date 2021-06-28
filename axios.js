import Vue from 'vue'
import axios from 'axios'
 
const axiosIns = axios.create({
 baseURL: 'http://localhost:8000/api',
 headers: { authorization: JSON.parse(localStorage.getItem('userData')).token},
})
 
Vue.prototype.$http = axiosIns
 
export default axiosIns