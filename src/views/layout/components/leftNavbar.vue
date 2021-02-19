<template>
  <div class="p-left-navbar">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航3</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "leftNavbar",
  setup(){
    /**********************导航事件***********************/
    const handleOpen = (key, keyPath)=> {
      console.log('open', key, keyPath)
    }
    const handleClose = (key, keyPath)=> {
      console.log('close', key, keyPath)
    }
    return {
      handleOpen,
      handleClose
    }
  }
}
</script>

<style scoped lang="scss">
.p-left-navbar{
  height: 100%;
}
</style>