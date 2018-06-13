<template>
    <div class="search">
        <input type="text" placeholder="输入搜索城市名字或拼音" class="search-input">
    </div>
</template>

<script>

export default {
    name:'CitySearch'
    
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

</style>

