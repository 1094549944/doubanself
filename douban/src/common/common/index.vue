<template>
  <div>
    <header-bar></header-bar>
    <search></search>
    <footer-bar></footer-bar>

  </div>
</template>

<script>
import HeaderBar from 'common/header/index'
import FooterBar from 'common/footer/index'
import Search from 'common/search/index'
export default {
  name: 'common',
  components: {
    HeaderBar,
    Search,
    FooterBar
  }
}
</script>

<style scoped>
</style>
