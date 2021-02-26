<template>
  <div class="p-color-demo">
    <div class="color-panel">
      <div class="color-left-panel">
        <span
            v-for="i in leftColorList"
            :key="i"
            :style="{backgroundColor: i}"
        ></span>
      </div>

      <div
          class="color-column"
          :style="{boxShadow: `${i} 0 0 10px`}"
          v-for="i in colorTempleteList"
          :key="i"
      >
        {{ i }}
        <span
            :style="{backgroundColor: i}"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 做一个拖动颜色分类的demo
 */
import {reactive, ref} from 'vue'

export default {
  name: "index",
  setup() {

    interface ColorItem {
      color: string,
      number: number,
      index: number
    }

    const colorTempleteList: Array<string> = reactive<Array>(['#ff0000', '#2600ff', '#f6d200', '#020000', '#E6C3C3'])

    const numberList: Array<number> = Array.from(new Array(10), (i, index) => {
      return randomNum(0, 100)
    })

    const leftColorList: Array<string> = reactive<Array>(Array.from(numberList, i => {
      return getColor(i)
    }))

    //生成从minNum到maxNum的随机数
    function randomNum(minNum: number, maxNum: number): number {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    }

    //根据数字获取颜色
    function getColor(num: number): string {
      return colorTempleteList[Math.ceil(num / 20) - 1]
    }

    return {
      colorTempleteList,
      leftColorList
    }
  }
}
</script>

<style scoped lang="scss">
.p-color-demo {
  @include vertical-center;

  .color-panel {
    @include vertical-center;
    align-items: start;

    .color-column {
      box-sizing: border-box;
      width: 200px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;

      > span {
        box-sizing: border-box;
        height: 40px;
        width: 100%;
      }
    }

    .color-left-panel {
      border: solid 1px black;
      @extend .color-column;

      > span {
        box-shadow: #2cff00 0 0 10px; //四周
      }
    }
  }
}

</style>