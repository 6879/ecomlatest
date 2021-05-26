require('./bootstrap');
window.Vue = require('vue');




Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('chat-component', require('./components/ChatComponent.vue').default);
Vue.component('chat', require('./components/ChatAdmin.vue').default);

Vue.prototype.$userId = document.querySelector(["meta[name='user-id']","meta[name='userId']"]).getAttribute('content');
import Product from './components/website-view/Product.vue'
import navbar from './components/website-view/SideNavbar.vue'

import livechat from './components/website-view/ChatBox.vue'

import Swal from 'sweetalert2'
      window.Swal = Swal
      const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
 window.Toast = Toast
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);
import {routes} from './routes'
const router = new VueRouter({
    routes:routes,
   
    scrollBehavior ( to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
    
});

import { Form, HasError, AlertError } from 'vform'
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import CKEditor from 'ckeditor4-vue'; 
Vue.use( CKEditor );
window.$ = window.jQuery = require('jquery');

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
import InputTag from 'vue-input-tag'
import { TablePlugin } from 'bootstrap-vue'
Vue.use(TablePlugin)
Vue.component('input-tag', InputTag)
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AnimatedNumber from "animated-number-vue"


const app = new Vue({
  el: '#app',
  
  router,

  name: "Quantity",
  components: {
    AnimatedNumber,
    Product,
    navbar,livechat

  },
  
 
 

 
 

});







