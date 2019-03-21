import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
import Login from '../pages/Login'
import Index from '../pages/Index'
import Home from '../pages/home/Home.vue'
import Products from '../pages/manProducts/ManProducts.vue'
import ProductDetail from '../pages/manProducts/ProductDetail.vue'
import Orders from '../pages/manOrders/ManOrders.vue'
import OrderDetail from '../pages/manOrders/OrderDetail.vue'
import Accounts from '../pages/manAccounts/ManAccounts.vue'
import Notice from '../pages/Notice.vue'
import TabNav from '../components/TabNar'
Vue.use(Router);

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      requireAuth: false,
    },
    redirect:'/home',
    children:[
      {path: '/home', component: Home,name:'Home',
        meta:{requireAuth:false}
      },
      {path: '/products', component: Products,name:'Products',
        meta:{requireAuth:false}
      },
      {path: '/orders', component: Orders,name:'Orders',
        meta:{requireAuth:false}
      },
      {path: '/accounts', component: Accounts,name:'Accounts',
        meta:{requireAuth:false}
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: '/',
    component: Login
  },
  {path: '/orderdetail', component: OrderDetail,name:'OrderDetail'},
  {path: '/Notice', component: Notice,name:'Notice'},
  {path: '/productdetail', component: ProductDetail,name:'ProductDetail'},
  {path: '/tabvar', component: TabNav,name:'TabNav'},
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
});

export default router;
