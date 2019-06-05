import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(App)
}).$mount('#App')