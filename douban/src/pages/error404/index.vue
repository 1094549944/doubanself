<template>
  <div class='content-page'>
    <div>
      <p>404</p>
      <p>
        您要访问的页面不存在
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'error404'
}
</script>

<style scoped>
.content-page {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 16px;
}
.content-page div p {
  text-align: center;
  padding: 0.16rem 0;
}
</style>
