<template>
<div>
    <div class="search">
        <input v-model='keyword' type="text" placeholder="输入搜索城市名字或拼音" class="search-input">
    </div>
    <div   class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" v-for='item of list' :key='item.id' @click="handleCLickcity(item.name)">
                {{item.name}}
            </li>
            <li class="search-item border-bottom" v-show="hasNodata">
               没有找到数据
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
           keyword:'',
           list:[],
           timer:null
        }
        
    },
    computed:{
        hasNodata(){
            return !this.list.length
        }
    },
     mounted(){
        //获取要滚动的父元素，只滚动父元素的第一个孩子
        this.scroll=new BScroll(this.$refs.search)
    },
    methods:{
        handleCLickcity(city){
            
         this.changeCity(city)
            //search更改城市后，跳转到首页
            this.$router.push('/')
        },
          ...mapMutations(['changeCity'])
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    })
                }
                this.list=result
            },100)
        }
    }
    
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        background :$bgColor
        height :.72rem
        width:100%
        display:flex
        justify-content :center
        align-items :flex-start
        // line-height :.72rem
        .search-input
            box-sizing:border-box
            width:96%
            height :90%
            border-radius :.05rem
            text-align :center
            color:#666
            padding:0 .1rem 0 .1rem
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
    
</style>

