<template>
  <div>
    <div class="search-hader"></div>
    <div class="search-block">
      <ul class="block-list">
        <li class="item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
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
  }
}
</script>

<style scoped lang="stylus">
</style>
