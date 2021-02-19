<template>
  <div class="p-layout">
    <leftNavbar></leftNavbar>
    <div class="right-content">
      <div class="top-nav">

      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="ts">
import leftNavbar from '@v/layout/components/leftNavbar.vue'
export default {
  name: "layout",
  components: {
    leftNavbar
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.p-layout {
  height: calc(100vh - 121px);
  border: solid 1px $positive;
  box-sizing: border-box;

  .right-content {
    border: solid 1px red;
  }

  @include vertical-center;
  justify-content: space-between;
}
</style>
<style lang="scss">
.p-layout {
  .el-menu {
    height: 100%;
    width: 200px;
  }
}
</style>