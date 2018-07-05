<template>
  <div class="content">
    <common-page></common-page>
    <ul class="tab-list">
      <li v-for="item in tabList"
          :key="item.id">{{item.name}}</li>
    </ul>
    <div class="list">

      <goods-component v-for="item in events"
                       :key="item.id"
                       :title="item.title"
                       :content="item.content"
                       :categoryName="item.category_name"
                       :img="item.image_hlarge"
                       :id="item.id"></goods-component>
      <loading v-show="show"></loading>
    </div>
  </div>
</template>

<script>
import commonPage from 'common/common/index'
import goodsComponent from 'common/common/goodsComponent'
import loading from 'common/common/loading'
import jsonp from 'jsonp'
import url from '@/apiConfig.js'
export default {
  name: 'indexHome',
  components: {
    commonPage,
    goodsComponent,
    loading
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
      }],
      events: [],
      show: true

    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      jsonp(url.getHomeInfo, { start: 0, count: 3 }, (err, data) => {
        if (err) {
          console.error(err.message)
        } else {
          console.log(data)
          this.events = data.events
          this.show = false
        }
      });
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
      padding $10 0
      font-size $font12
      color $fontColor
      margin $5

  .list
    padding $20
</style>
