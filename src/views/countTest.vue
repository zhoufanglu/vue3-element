<template>
  <div class="p-countTest">
    <h1>x坐标为 {{ x }}</h1>
    <h1>double x坐标为{{doubleX}}</h1>
    <h1 @click="add">count is {{ count }}, double is{{ double }}</h1>
  </div>
</template>
<script lang="ts">
import {ref, reactive} from 'vue'
import {useCounter} from "@/views/js/counter"
import {useMouse} from "@/views/js/mouse"

export default {
  name: 'countTest',
  setup() {

    const {add, count, double} = useCounter()
    const {x, double:doubleX } = useMouse()
    //console.log(17, doubleX)

    return {
      add, count, double,
      x,doubleX
    }
  }
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
