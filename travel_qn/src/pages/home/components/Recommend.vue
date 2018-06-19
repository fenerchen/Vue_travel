<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
        <router-link tag='li' class="item border-bottom" v-for='item of recommendList' :key='item.id' :to="'/detail/'+item.id">
                    <img class='item-img' :src="item.imgUrl" :alt="item.title">
                <div class="item-info"> 
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p> 
                    <button class="item-button">查看详情</button>
                </div>
             </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        recommendList:Array
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
            border-bottom :.001rem solid #eee
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
