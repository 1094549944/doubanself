<template>
  <div class="item border-bottom"
       :id="id">
    <div class="item-content
       ">
      <p class="item-content-title
       ">{{title}}</p>
      <p class="item-content-desc">
        {{content|contentStr}}
      </p>
      <p class="author
       ">
        <span>by {{categoryName}}</span>
      </p>
    </div>
    <img class="item-img"
         v-lazy="img"
         alt="
       ">
  </div>
</template>

<script>
import { subStr } from '@/filter/contentFilter'
export default {
  name: 'goodsComponent',
  props: ['title', 'content', 'categoryName', 'img', 'id'],
  filters: {
    contentStr (content) {
      return subStr(content)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.item
  display flex
  padding-bottom $40
  overflow hidden

  .item-content
    flex 1
    padding-right $10

  .border-bottom, &:before
    border-color #ccc

  .item-img
    width $120 !important
    height $120 !important

  .item-content-title
    font-size 17px
    font-weight 500
    text-align justify
    line-height 1.5
    margin-bottom $20
    color #494949
    display -webkit-box
    overflow hidden
    -webkit-box-orient vertical
    -webkit-line-clamp 2

  .item-content-desc
    text-align justify
    color #aaa
    font-size $font12
    line-height 1.5
    display -webkit-box
    overflow hidden
    -webkit-box-orient vertical
    -webkit-line-clamp 3

  .author
    padding-top $10
    font-size $font12
    color #ccc
</style>
