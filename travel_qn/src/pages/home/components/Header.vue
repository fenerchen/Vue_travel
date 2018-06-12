<template>
<!-- 模板只有一个根 -->
<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
        </div>
    <div class="header-right">
        城市
        <span class="iconfont ico-arrow">&#xe61c;</span>
    </div>
</div>
   
</template>
<script>
// 1rem=html font-dize=50px,设计稿给出的尺寸是屏幕的尺寸，对于2倍屏的手机来说
//设计稿的100px==我们设置的css50px,也就是1rem。

export default {
  name: "Header"
};
</script>
<style lang='stylus' scoped>
// @代表src目录，在F:\web\Vue\qunar\travel_qn\build\webpack.base.conf.js中有配置
// 当引入css文件时，需要在@前面加一个~
    // @import '~@/assets/styles/varibles.styl'
    @import '~styles/varibles.styl'
    .header
        display :flex
        line-height:0.86rem
        background :$bgColor
        color:#fff
        .header-left
            width: .64rem
            float:left
            .back-icon
                font-size :.4rem
                text-align center
            
        .header-input
            flex:1
            margin-top:.12rem
            margin-left:.2rem
            line-height:.62rem
            height:.62rem
            background :#fff
            border-radius:.1rem
            color:#ccc
            padding-left:.2rem

        .header-right
            width:1.24rem
            text-align:center
            float:right
            .ico-arrow
               font-size:.24rem 
               margin-left :-.05rem

</style>


