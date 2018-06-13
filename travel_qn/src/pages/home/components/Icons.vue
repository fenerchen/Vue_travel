<template>
<div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
         <swiper-slide class="swiper-item" v-for="(page,index) of pages" :key='index' >
            <div class="icons">
                <div class="icon" v-for='item of page' :key='item.id'>
                    <div class="icon-content">
                        <img :src="item.imgUrl" alt="item.desc" class="icon-img">
                        <p class="icon-describe">{{item.desc}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
    
</template>
<script>

export default {
  name: "HomeIcons",
  props:{
      imgList1:Array
  },
  data(){
      return{
          swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',  
               
            },
      }
  },
  computed:{
      //相当于pages:function(){}
      pages(){
          const pages=[]
          this.imgList1.forEach((item,index)=>{
              const page=Math.floor(index/8)
            //   创建子数组
              if(!pages[page]){
                  pages[page]=[]
              }
              //把元素放进数组
              pages[page].push(item)
          })
          return pages
      }
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.wrapper >>>.swiper-pagination-bullet-active
        background #00b4db !important
        
.wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet  
    margin-bottom:-.15rem !important
    width:6px
    height :6px
.icons 
    // border:1px solid
    width: 100%;
    overflow: hidden;
    // height: 0;
    // 站位
    padding-bottom: 50%;
    // height :50%
    display:flex
    flex-wrap:wrap
    // justify-content:space-between
    // background: red
    padding-bottom:.25rem
    .icon 
        width: 25%
        height:50%
        display :flex
        flex-direction :column
        justify-content:center
        text-align :center
        margin-top:0.15rem
        // border:1px solid
        .icon-img
            width:70%;
            // height:60%
        .icon-describe
            // font-size:10px
            margin-top:0.1rem
            ellipsis()
</style>
