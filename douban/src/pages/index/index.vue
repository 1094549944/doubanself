<template>
  <div class="content">
    <common-page></common-page>
    <div></div>
  </div>
</template>

<script>
import commonPage from 'common/common/index'
export default {
  name: 'indexHome',
  components: {
    commonPage
  }
}
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'

.content
  background $searchColor
  padding 0 $20
</style>
