<template>
  <div>
    <h3>element</h3>
    <div>a:{{ a }}</div>
    <div>b:{{ b }}</div>
    <div>a+b={{ addVal }}</div>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script lang="ts">
import {ref, computed} from 'vue'
import transformString from '@/views/js/transformString'

export default {
  name: "computed",
  setup() {
    const a = ref<number>(1)
    const b = ref<number>(1)
    const addVal: any = computed((): number => a.value + b.value)

    //const topicList:Array<Topic> = transformString()
    const topicList = transformString()
    console.log(23, topicList)
    
    let obj = {}
    function changeObj(obj1:any){
      obj1.name = '11'
      obj1 = {name: '22'}
    }
    changeObj(obj)
    console.log(32, obj)
    //console.log(33, obj.name)

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