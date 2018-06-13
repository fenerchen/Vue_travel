
<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
             <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
                 <div class="item-img-wrapper">
                    <img class='item-img' :src="item.imgUrl" :alt="item.title">
                </div>
                <div class="item-info"> 
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p> 
                    <!-- <button class="item-button">查看详情</button> -->
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    data(){
        return {
      recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg',
                title:'三亚必游TOP10',
                desc:'玩转海岛热带雨林，感受独特黎苗文化',
                // lookDetail:'查看详情'
            },
            {
                id:'0010',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/a4/df8543b6b8506d.jpg_r_640x214_660e1e3a.jpg',
                title:'就是要看海',
                desc:'海上摩托，拖曳伞什么的爽歪歪了',
                // lookDetail:'查看详情'
            },
            {
                id:'0011',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/3d/f99f5c73b52c4d.jpg_r_640x214_4e60b24c.jpg',
                title:'寻找最佳潜水地',
                desc:'潜入梦幻海底，看鱼儿穿梭',
                // lookDetail:'查看详情'
            },
            {
                id:'0100',
                imgUrl:'http://img1.qunarzz.com/sight/source/1602/bf/a2ac57b8bfe7cd.jpg_r_640x214_406d4c7e.jpg',
                title:'城会玩儿游艇大趴',
                desc:'酷炫游艇派对，私人订制心跳回忆',
                // lookDetail:'查看详情'
            },
            {
                id:'0101',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',
                title:'小清新帆船出海',
                desc:'帆船出海体验，不一样的海上休闲',
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
        margin-top:.25rem
        display :flex
        flex-direction :column
        height: 3.44rem
        overflow :hidden
        .item-img-wrapper
            width :100%
            height:2.4rem
            .item-img
                height:100%
                width :100%
                // padding:.1rem
        .item-info
            padding:.2rem .2rem .1rem .2rem
            min-width :0
            flex:1
            display :flex
            justify-content :space-between
            flex-direction :column
            .item-title
                 font-size:.3rem
                 ellipsis()
                
            .item-desc
                font-size:.2rem
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

