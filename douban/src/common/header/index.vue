<template>
  <div class="header-bar">
    <img :src="imgUrl"
         alt=""
         srcset="">
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      imgUrl: 'imgs/douban-app-logo.png'
    }
  }
}
</script>

<style scoped lang="stylus">
.header-bar
  height 1.333333rem
  line-height 1.333333rem
  background-color #eee
</style>
