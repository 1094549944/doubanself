<template>
  <div>
    <div class="loading">
      <img src="../../assets/imgs/loading_green.gif"
           alt="loading">
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      img: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.loading
  margin-top $20
  text-align center

  img
    width $100
</style>

