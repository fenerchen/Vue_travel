import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // name: 'HelloWorld',
      component: Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {//:id表示动态路由，前面是/detail/，后面的路径部分放在id里
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
    
  ]
})
