
<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
             <li class="item border-bottom" v-for='item of weekendList' :key='item.id'>
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
    props:{
        weekendList:Array
    },
    data(){
        return {
        }
      
    }
}
</script>
<style lang='stylus' scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        background :#eee
        // margin-top:.2rem
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

