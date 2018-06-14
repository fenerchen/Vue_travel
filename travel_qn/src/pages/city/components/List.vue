<template>
    <div class='list' ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="butn">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for='hotcity of hotCities' :key='hotcity.id'>
                        <div class="butn" @click='handleCLickcity'>{{hotcity.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for='(items,key) of cities' :key='key' :ref='key'>
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for='item of items' :key='item.id' @click='handleCLickcity'>{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
    name:'CityList',
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    mounted(){
        //获取要滚动的父元素，只滚动父元素的第一个孩子
        this.scroll=new BScroll(this.$refs.wrapper)
    },
     computed: {
    ...mapState({
      currentCity: 'city'
    })
   
  },
    methods:{
        handleCLickcity(e){
            // this.$store.dispatch('handleCLickcity',e.target.innerText)
            this.changeCity(e.target.innerText)
           // this.$store.commit('handleCLickcity',e.target.innerText)
            this.$router.push('/')
            
            // alert(e.target.innerText)
        },
         ...mapMutations(['changeCity'])
    },
    watch:{
        //letter变化就执行函数
        letter(){
            if(this.letter){
                //获取letter指向的部分
                const ele=this.$refs[this.letter][0]
//该部分进入视野
                this.scroll.scrollToElement(ele)
            }
            // console.log(this.letter)
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
             border-color:#ccc
        &:after
             border-color:#ccc
    .border-bottom
        &:before
             border-color:#ccc
        &:after
             border-color:#ccc
    .list
        position :absolute
        top:1.58rem
        left:0
        right:0
        bottom :0
        overflow :hidden
            
        .title
            line-height :.4rem
            background :#eee
            padding-left:0.2rem
            color:#666
            font-size :.26rem
        .button-list
                // width:100%
                overflow: hidden
                padding: .1rem .6rem .1rem .1rem
                
                .button-wrapper
                    float: left
                    width: 33%
                    .butn
                        margin: .1rem
                        padding: .1rem 0
                        text-align: center
                        border: .02rem solid #ccc
                        border-radius: .06rem
        .item-list
            .item 
                line-height :.76rem
                padding-left:.2rem


</style>
