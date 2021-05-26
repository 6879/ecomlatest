
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key:'176db7d16c934c4ffdc3',
    cluster: 'ap1',
    encrypted: true
});
window.Vue = require('vue');
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
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
import App from './components/App.vue'
import { Form, HasError, AlertError } from 'vform'
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// route list
// Vue.component('Offer', () => import('./components/website-view/Offer/Offer.vue'));
// import  CategoryWiseView from './components/website-view/CategoryWiseView.vue';
// import  CategoryThirdView from './components/website-view/CategoryThirdView.vue';
// import  DistrictLocaton from './components/website-view/Delivery-Location/DistrictLocation.vue';
// import  ThanaLocaton from './components/website-view/Delivery-Location/ThanaLocation.vue';
// import  WardLocaton from './components/website-view/Delivery-Location/WardLocation.vue';

// import  CustomerProfile from './components/website-view/Customer/CustomerProfile.vue';
// import  CustomerOrder from './components/website-view/Customer/CustomerOrder.vue';
// import  BalanceSheet from './components/website-view/Customer/BalanceSheet.vue';
// import  Promotion from './components/website-view/Customer/Promotion.vue';
// import  PromotionalTeam from './components/website-view/Customer/PromotionalTeam.vue';
// import  PromotionalShoppingDetails from './components/website-view/Customer/PromotionalShoppingDetails.vue';
// import  PromotionalTransactionDetails from './components/website-view/Customer/PromotionalTransactionDetails.vue';
// import  PromotionalSalesTeamTransaction from './components/website-view/Customer/PromotionalSalesTeamTransaction.vue';
// import  PromotionalSalesTeamTransactionDetails from './components/website-view/Customer/PromotionalSalesTeamTransactionDetails.vue';
// import  DailyCommission from './components/website-view/Customer/DailyCommission.vue';
// import  Complain from './components/website-view/Customer/Complain.vue';
// import  CustomerRegistrationEntry from './components/website-view/Customer/CustomerRegistrationEntry.vue';
// import  CheckOut from './components/website-view/Customer/CheckOut.vue';
// import  CancelOrderList from './components/website-view/Customer/CancelOrderList.vue';
// import  SuccessOrderList from './components/website-view/Customer/SuccessOrderList.vue';
// import  CustomerMessage from './components/website-view/Customer/CustomerMessage.vue';
// import  Payment from './components/website-view/Customer/Payment.vue';
// import  Login from './components/website-view/Customer/Login.vue';

import  SearchProduct from './components/website-view/SearchProduct.vue';

const router = new VueRouter({
    routes: [
        {
    name: 'view',
    path: '/view/:id',
    component: () => import('./components/website-view/CategoryWiseView.vue'),
 
    meta: { hideDashboard: true }
   },
        {
    name: '/',
    path: '/',
    component: () => import('./components/website-view/Product.vue'),
 
   
   },
   {    name: 'searchproduct',
   path: '/searchproduct',
   component: SearchProduct,
   meta: { hideDashboard: true }
  
},
{    name: 'promotionalsalesteamtransactiondetails',
path: '/promotionalsalesteamtransactiondetails/:id',

component: () => import('./components/website-view/Customer/PromotionalSalesTeamTransactionDetails.vue'),
meta: { hideDashboard: true }

},
   {    name: 'offerview',
   path: '/offerview',
   component: () => import('./components/website-view/Offer/Offer.vue'),
 
   meta: { hideDashboard: true }
  
},
{
    name: 'viewthird',
    path: '/viewthird/:id',
   
    component: () => import('./components/website-view/CategoryThirdView.vue'),
    meta: { hideDashboard: true }
   },
   {    name: 'districtlocation',
   path: '/districtlocation/:id',

   component: () => import('./components/website-view/Delivery-Location/DistrictLocation.vue'),
   meta: { hideDashboard: true }
  
},
{    name: 'thanalocation',
path: '/thanalocation/:id',

component: () => import('./components/website-view/Delivery-Location/ThanaLocation.vue'),
meta: { hideDashboard: true }

},
{    name: 'wardlocation',
path: '/wardlocation/:id',

component: () => import('./components/website-view/Delivery-Location/WardLocation.vue'),
meta: { hideDashboard: true }

},

   {    name: 'customerprofile',
   path: '/customerprofile',

   component: () => import('./components/website-view/Customer/CustomerProfile.vue'),
   meta: { hideDashboard: true }  
},
{    name: 'customerorder',
path: '/customerorder',
component: () => import('./components/website-view/Customer/CustomerOrder.vue'),
meta: { hideDashboard: true }

},
{    name: 'balancesheet',
path: '/balancesheet',
component: () => import('./components/website-view/Customer/BalanceSheet.vue'),
meta: { hideDashboard: true }

},
{    name: 'promotion',
path: '/promotion',
component: () => import('./components/website-view/Customer/Promotion.vue'),
meta: { hideDashboard: true }

},  
{    name: 'promotionalteam',
path: '/promotionalteam',
component: () => import('./components/website-view/Customer/PromotionalTeam.vue'),
meta: { hideDashboard: true }

},
{    name: 'promotionalshopping',
path: '/promotionalshopping/:id',

component: () => import('./components/website-view/Customer/PromotionalShoppingDetails.vue'),
meta: { hideDashboard: true }

},
{    name: 'promotionaltransaction',
path: '/promotionaltransaction/:id',

component: () => import('./components/website-view/Customer/PromotionalTransactionDetails.vue'),
meta: { hideDashboard: true }

},
{    name: 'promotionalsalesteamtransaction',
path: '/promotionalsalesteamtransaction/:id',

component: () => import('./components/website-view/Customer/PromotionalSalesTeamTransaction.vue'),
meta: { hideDashboard: true }

},
{    name: 'dailycommission',
path: '/dailycommission',

component: () => import('./components/website-view/Customer/DailyCommission.vue'),
meta: { hideDashboard: true }

},
{    name: 'complain',
path: '/complain',

component: () => import('./components/website-view/Customer/Complain.vue'),
meta: { hideDashboard: true }

},
{    name: 'customerregi',
path: '/customerregi',

component: () => import('./components/website-view/Customer/CustomerRegistrationEntry.vue'),
meta: { hideDashboard: true }

},
{    name: 'checkout',
path: '/checkout',

component: () => import('./components/website-view/Customer/CheckOut.vue'),
meta: { hideDashboard: true }

},
{    name: 'cancelorder',
path: '/cancelorder',

component: () => import('./components/website-view/Customer/CancelOrderList.vue'),
meta: { hideDashboard: true }

},
{    name: 'successorder',
path: '/successorder',

component: () => import('./components/website-view/Customer/SuccessOrderList.vue'),
meta: { hideDashboard: true }

},
{    name: 'customermessage',
path: '/customermessage',
component: () => import('./components/website-view/Customer/CustomerMessage.vue'),

meta: { hideDashboard: true }

},
{    name: 'payment',
path: '/payment/:id',

component: () => import('./components/website-view/Customer/Payment.vue'),
meta: { hideDashboard: true }

},
{    name: 'login',
path: '/login',

component: () => import('./components/website-view/Customer/Login.vue'),
meta: { hideDashboard: true }

},
      ],
   
    scrollBehavior ( to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
    
});

Vue.prototype.$userId = document.querySelector(["meta[name='user-id']","meta[name='userId']"]).getAttribute('content');
const server = new Vue({
    el: '#server',  
    name: "Quantity",
    router,
    components: {
        App
  
    },
    
})