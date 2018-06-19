<!--Home是一个页面，有很多组件组成 -->
<template>
<!-- 模板只有一个根 -->
<div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :imgList1='iconList'></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
</div>
    
</template>
<script>
//引入组件，这是一个局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: "Home",
  data(){
    return {
       lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  components:{
    //注册局部组件
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
   computed: {
     ...mapState(['city'] )
  },
  methods:{
    getHomeInfo (){
      axios.get('api/index.json?city='+this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
        res=res.data
        if(res.ret&&res.data){
          const data=res.data
          // this.city=data.city
          this.swiperList=data.swiperList
          this.iconList=data.iconList
          this.recommendList=data.recommendList
          this.weekendList=data.weekendList
        }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
};
</script>
<style>

</style>

 <!-- 单页面应用，在每次跳页的时候不是请求hrml文件，而是通过js动态把当前的内容清除掉
    然后把该显示的内容再显示在该页面上。有点：切换快。缺点：首屏时间慢，Seo差。首屏展示需要请求html和js，
    只有两个请求都收到了，才显示页面。搜索引擎识别html不识别js，所以在seo排名中不靠前 -->
    <!-- 多页面应用，每次页面的跳转都会请求html。首屏时间快，页面返回html就可显示，SEO搜索引擎优化效果好，
    搜索引擎识别html，会给页面权重排名。但是，页面切换慢，因为每个页面都也请求
     -->

