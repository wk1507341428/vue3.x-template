import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('./view/Login'),
    meta: {
        title: 'console 登录'
    }
}]

export default new VueRouter({
    routes: routes
})