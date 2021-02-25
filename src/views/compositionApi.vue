<template>
  <h3>compositionApi</h3>
  <div>年龄：{{age}}</div>
  <div>
    person
    <div>姓名：{{name}}</div>
    <div>性别：{{gender}}</div>
  </div>
</template>

<script lang="ts">
//ref-基础类型 ,reactive-引用类型
// vue3通过proxy对数据进行封装，触发模板的更新
import {ref, reactive, toRefs, isProxy} from 'vue'

export default {
  name: "compositionApi",
  mounted() {
  },
  //created实例被完全初始化之前
  setup() {
    /**********************ref***********************/
    let age = ref<number>(1)
    console.log(19, age) //变成这种Proxy({age: 1})形式
    setTimeout(_=>{
      age.value = 0
    },1000)
    /**********************reactive***********************/
    interface Person {
      name: string,
      gender: string
    }

    let person = reactive<Person>({
      name: 'aaa',
      gender: 'male' 
    })
    let num:number = 1
    console.log(37, isProxy(num))
    console.log(33, person) //Proxy{name: 'lufangzhou', gender:'male'}
    //person.name = 'bbb'
    setTimeout(()=>{
      person.name = 'bbb'
    },1000)
    //解构
    //toRefs , 原本是proxy({name: 'lufangzhou', gender:'male'})
    //可以用来为源响应式对象上的 property 性创建一个 ref。然后可以将 ref 传递出去，从而保持对其源 property 的响应式连接。
    /*console.log(47, {...toRefs(person)})
    const {name, gender} = toRefs(person)
    console.log(49, name, gender)*/
    return {
      age,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>