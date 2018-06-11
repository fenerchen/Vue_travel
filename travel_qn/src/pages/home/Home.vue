<template>
<!-- 模板只有一个根 -->
<div>
    <!--使用router 跳转 -->
    <!-- <router-link to='/list'>列表页</router-link> -->
    HEELO
</div>
    <!-- 单页面应用，在每次跳页的时候不是请求hrml文件，而是通过js动态把当前的内容荣清除掉
    然后把该显示的内容再显示在该页面上。有点：切换快。缺点：首屏时间慢，Seo差。首屏展示需要请求html和js，
    只有两个请求都收到了，才显示页面。搜索引擎识别html不识别js，所以在seo排名中不靠前 -->
    <!-- 多页面应用，每次页面的跳转都会请求html。首屏时间快，页面返回html就可显示，SEO搜索引擎优化效果好，
    搜索引擎识别html，会给页面权重排名。但是，页面切换慢，因为每个页面都也请求
     -->
</template>
<script>
export default {
  name: "Home"
};
</script>
<style>
.home {
  font-size: 50px;
}
</style>


