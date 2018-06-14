<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of citiesAlphabet" :key='key'
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
        :ref='key'>{{key}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        citiesAlphabet:Object
    },
    data(){
        return{
            touchStatus:false,
            startY:0,
            //函数节流实现
            timer:null
         
            // listTarget:{}
        }
    },
    //页面数据更新时，执行该钩子
    updated(){
        this.startY=this.$refs['A'][0].offsetTop
        // console.log(this.startY)
    },
    computed:{
        letters(){
            const letters=[]
            for(let i in this.citiesAlphabet){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLetterClick(e){
            this.changColor(e.target)
            this.$emit('change',e.target.innerText)
           
        },
        handleTouchStart(e){
            this.touchStatus=true
            // console.log(3)
        },
        //被选中的字母缩引，更改字母颜色
        changColor(ele){
            if(this.listTarget){
                this.listTarget.style.color='#00bcd4'
            }
            this.listTarget=ele
            // console.log(this.listTarget.style.height)
            this.listTarget.style.color='green'
        },
        handleTouchMove(e){
             if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                    const touchY=e.touches[0].clientY
                    const letterIndex=Math.floor((touchY-this.startY-76)/22)
                    if(letterIndex>=0&&letterIndex<this.letters.length){
                        this.changColor(this.$refs[this.letters[letterIndex]][0])
                        this.$emit('change',this.letters[letterIndex])
                    }
                },16)
            }
        },
        handleTouchEnd(e){
            this.touchStatus=false
            
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display :flex
        flex-direction :column
        justify-content center;
        position :absolute
        top:1.58rem
        right:0
        bottom :0
        width:.4rem
        .item
            line-height :.44rem
            text-align :center;
            color :$bgColor
        
</style>

