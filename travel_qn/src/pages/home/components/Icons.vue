<template>
<div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
         <swiper-slide class="swiper-item" v-for="(page,index) of pages" :key='index' >
            <div class="icons">
                <div class="icon" v-for='item of page' :key='item.id'>
                    <div class="icon-content">
                        <img :src="item.imgUrl" alt="item.imgAlt" class="icon-img">
                        <p class="icon-describe">{{item.imgAlt}}</p>
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
  data(){
      return{
          swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',  
               
            },
          imgList1:[
              {
                id:'0',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                imgAlt:"踏青赏花"
              },
               {
                id:'1',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                imgAlt:"必游榜单"
              },
               {
                id:'2',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                imgAlt:"动植物园"
              },
               {
                id:'3',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png",
                imgAlt:"Q+精选"
              },
               {
                id:'4',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                imgAlt:"一日游"
              },
               {
                id:'5',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
                imgAlt:"公园"
              },
               {
                id:'6',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                imgAlt:"名胜古迹"
              },
               {
                id:'7',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                imgAlt:"热门景点"
              },
               {
                id:'8',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                imgAlt:"踏青赏花"
              },
               {
                id:'9',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                imgAlt:"必游榜单"
              }
          ],
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
    margin-bottom:-.25rem !important
    width:6px
    height :6px
.icons 
    // border:1px solid
    width: 100%;
    overflow: hidden;
    // height: 0;
    // 站位
    // padding-bottom: 50%;
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
