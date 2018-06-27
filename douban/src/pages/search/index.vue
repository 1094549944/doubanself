<template>
  <div>
    <div class="search-header">
      <van-search v-model="value"
                  show-action
                  @search="onSearch">
        <div slot="action"
             @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="search-block">
      <ul class="block-list">
        <li v-for="item in blockList"
            :key="item.id">
          <p v-bind:style="{color:item.color}">{{item.name}}</p>
          <p class="desc"
             v-bind:style="{color:item.smallColor}">{{item.desc}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      value: '',
      blockList: [{
        id: '1',
        name: '电影',
        desc: '影院热映',
        color: 'rgb(35, 132, 232)',
        smallColor: '#999'
      }, {
        id: '2',
        name: '电视',
        desc: '正在热播',
        color: 'rgb(122, 106, 219)',
        smallColor: '#999'
      }, {
        id: '3',
        name: '图书',
        desc: '畅销排行',
        color: 'rgb(230, 70, 126)',
        smallColor: '#999'
      }, {
        id: '4',
        name: '同城',
        desc: '周末活动',
        color: 'rgb(35, 132, 232)',
        smallColor: '#999'
      }, {
        id: '5',
        name: '小组',
        desc: '志趣相投',
        color: 'rgb(42, 184, 204)',
        smallColor: '#999'
      }, {
        id: '6',
        name: '音乐',
        desc: '新碟榜',
        color: 'rgb(244, 143, 46)',
        smallColor: '#999'
      }, {
        id: '7',
        name: '阅读',
        desc: '电子书',
        color: 'rgb(159, 120, 96)',
        smallColor: '#999'
      }, {
        id: '8',
        name: '游戏',
        desc: '虚拟世界',
        color: 'rgb(87, 116, 197)',
        smallColor: '#999'
      }, {
        id: '9',
        name: '应用',
        desc: '玩手机',
        color: 'rgb(89, 108, 221)',
        smallColor: '#999'
      }, {
        id: '10',
        name: '广播',
        desc: '友邻动态',
        color: 'rgb(225, 100, 77)',
        smallColor: '#999'
      }, {
        id: '11',
        name: 'FM',
        desc: '红心歌单',
        color: 'rgb(64, 207, 169)',
        smallColor: '#999'
      }, {
        id: '12',
        name: '市集',
        desc: '购买原创',
        color: 'rgb(66, 189, 86)',
        smallColor: '#999'
      }]
    }
  },
  methods: {
    onSearch () {
      console.log('a')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.search-header
  background $searchColor
  padding 0 $20

.block-list
  background $contentColor
  display flex
  flex-wrap wrap
  font-size $font16
  align-items center

  li
    width 33%
    text-align center
    padding-top $20
    padding-bottom $20
    font-size $font24

  .desc
    padding-top $10
    font-size $font8
</style>
