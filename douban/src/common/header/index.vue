<template>
  <div class="header-bar">
    <div class="logo"> 豆瓣</div>
    <div class="span-item">
      <span v-for="item in tabList"
            :key="item.id"
            v-bind:style="{color:item.color}">{{item.name}}
      </span>
      <span class="iconfont icon-search"
            @click="searchShowFun">&#xe720;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {
      imgUrl: '',
      tabList: [{
        id: '1',
        name: '电影',
        color: 'rgb(35, 132, 232)'
      }, {
        id: '2',
        name: '图书',
        color: 'rgb(159, 120, 96)'
      }, {
        id: '3',
        name: '广播',
        color: 'rgb(228, 168, 19)'
      }, {
        id: '4',
        name: '小组',
        color: 'rgb(42, 184, 204)'
      }]
    }
  },
  methods: {
    searchShowFun () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.header-bar
  height $100
  background-color $BgColor
  display flex
  font-size $fontSizeSmall
  justify-content space-between
  align-items center

  .logo
    color $dbColor

  .span-item
    display flex
    justify-content center
    align-items center

    span
      padding 0 $10 0 0

    .icon-search
      font-size $fontSizemiddle
      padding-left $10
      color $dbColor
</style>
