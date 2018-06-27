<template>
  <div class="content">
    <common-page></common-page>
    <ul class="tab-list">
      <li v-for="item in tabList"
          :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import commonPage from 'common/common/index'
export default {
  name: 'indexHome',
  components: {
    commonPage
  },
  data () {
    return {
      tabList: [{
        id: '1',
        name: '影院热映'
      }, {
        id: '2',
        name: '我的'
      }, {
        id: '3',
        name: '豆瓣时间'
      }, {
        id: '4',
        name: '使用豆瓣App'
      }]
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'

.content
  .tab-list
    display flex
    flex-wrap wrap
    padding 0 $20
    align-items center
    justify-content center
    font-size $font16
    background $contentColor
    margin-top $20

    li
      width 4rem
      text-align center
      background $BgColor
      margin 0.053333rem
      padding $10 0
      font-size $font12
      color $fontColor
</style>
