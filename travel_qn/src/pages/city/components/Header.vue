<template>
    <div class="header">
        <router-link to='/'>
             <span class="iconfont back-icon header-back">&#xe624;</span>
        </router-link>
        <span>城市选择</span> 
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position :relative
        overflow :hidden
        height: .8rem
        line-height :.8rem
        text-align :center
        color:#fff
        background :$bgColor
        font-size :.32rem
        .header-back
            position :absolute
            left:.1rem
            color:#fff
</style>

