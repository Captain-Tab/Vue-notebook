<template>
  <div id="app">
    <sidebar/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  components: {
    Sidebar
  },
})
export default class App extends Vue {
  name = "App"
}
</script>

<style scoped lang="less">
@import './assets/css/iconfont.css';
@import './assets/css/reset.css';

#app {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.btn {
  color: #666;
  font-size: 12px;
  padding: 2px 4px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px #ccc;
  border: none;
  cursor: pointer;
  display: inline-block;
}


</style>
