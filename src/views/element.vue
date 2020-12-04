<template>
  <div>
    <h3>element</h3>
    <div>a:{{a}}</div>
    <div>b:{{b}}</div>
    <div>a+b={{addVal}}</div>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script lang="ts">
  import {ref, computed} from 'vue'
  export default {
    name: "computed",
    setup(){
      const a = ref<number>(1)
      const b = ref<number>(1)
      const addVal:any = computed(():number=> a.value+b.value)
      return {
        addVal,
        a,
        b
      }
    }
  }
</script>

<style scoped>

</style>