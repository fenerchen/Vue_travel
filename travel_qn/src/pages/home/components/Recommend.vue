<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
             <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
                    <img class='item-img' :src="item.imgUrl" :alt="item.title">
                <div class="item-info"> 
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p> 
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data(){
        return {
      recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_200x200_4ab5da75.jpg',
                title:'三亚海上观光巴士',
                desc:'浪漫三亚首站，浪漫的海洋主题乐园浪漫三亚首站',
                // lookDetail:'查看详情'
            },
            {
                id:'0010',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1412/e9/d5c72454d47eda983bd4e857c9c361d8.water.jpg_200x200_5870d2ca.jpg',
                title:'分界洲岛',
                desc:'奇妙三亚，体会人生的极限',
                // lookDetail:'查看详情'
            },
            {
                id:'0011',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png',
                title:'亚龙湾热带天堂森林公园',
                desc:'亚龙湾热带天堂森林公园，感受人与自认和谐相处的奇缘',
                // lookDetail:'查看详情'
            },
            {
                id:'0100',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1411/d8/eec44461ecfd83df9c1669e7846b1c53.water.jpg_200x200_c2941eec.jpg',
                title:'蜈支洲岛',
                desc:'欢乐戏水，畅游海底，浪漫的海洋之旅，你还在等什么',
                // lookDetail:'查看详情'
            },
            {
                id:'0101',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1411/fe/faed12617349c5614f4b51f5eb991da8.water.jpg_200x200_6a28ad75.jpg',
                title:'槟榔谷黎苗文化区',
                desc:'槟榔谷黎苗文化区，小伙们都来过的地方',
                // lookDetail:'查看详情'
            },
            {
                id:'0110',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1802/ef/ef88e4b2fec1f385a3.img.jpg_200x200_217e7a83.jpg',
                title:'亚特兰蒂斯失落的空间水族馆',
                desc:'浪漫三亚首站，浪漫的海洋主题乐园浪漫三亚首站',
                // lookDetail:'查看详情'
            },
            ],
        }
      
    }
}
</script>
<style lang='stylus' scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        background :#eee
        margin-top:.2rem
        line-height:.8rem
        text-indent:.2rem
    .item 
        margin-top:.2rem
        display :flex
        height: 1.9rem
        overflow :hidden
        .item-img
            height:1.7rem
            width :1.7rem
            padding:.1rem
        .item-info
            padding:.2rem .1rem .1rem .1rem
            min-width :0
            flex:1
            display :flex
            justify-content :space-around
            flex-direction :column
            .item-title
              font-size:.35rem
              font-weight :bold
              ellipsis()
              
            .item-desc
                color:#999
                ellipsis()
            .item-button
                background :#ff9300
                border-radius :.06rem
                width:1.6rem
                color:#fff  
    ul :first-child
        margin-top:0rem
</style>
