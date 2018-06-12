// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js文件，作为总文件，可以认为是全局文件，如果多个文件都需要引入相同的模块，那么可以直接在此文件中引入
// 例如，很多页面都会用到iconfont，在这里写一次就可以在多个页面应用了
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/iconfont.css'

// 解决1像素边框问题，不同的手机屏幕像素不一样，有的是2倍屏，有的是三倍屏，因此设置1px的边框，可能会出现2px或3px的边框现实中手机中
import 'styles/border.css'
// 一定段300ms点击延迟问题，造成体验较差。解决方案，引入fastclick库
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
// 把fastClick绑定到document.body上
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router必须有，否则app中的使用router-view会报错
  router,
  // 这里的App是从import App from './App'这里倒入的变量，可以更改
  components: { App },
  template: '<App/>'
})
