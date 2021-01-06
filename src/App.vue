<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    <div style="display: flex;align-items: center;justify-content: center;margin-top: 20px">
      <router-link
          v-for="(i,index) in routerList"
          :key="i.name"
          :to="i.path">
        <span style="font-size: 20px;">{{ i.name }}</span>
        <span style="margin: 0 20px">|</span>
      </router-link>
    </div>
  </div>
  <router-view/>
</template>

<script lang="ts">
import router from "@/router"
import {ref, reactive} from 'vue'

export default {
  name: "computed",
  setup() {
    /*const a = ref<number>(1)
    const b = ref<number>(1)*/
    const routerList: any[] = reactive(router.options.routes)
    return {
      routerList
      /* a,
       b*/
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
