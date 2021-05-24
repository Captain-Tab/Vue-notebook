<template>
  <div>
    <h1>{{ greeting }}大头兄弟</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Login extends Vue {
  name = "Login"

  private greeting = "hello, here is the login page"
}
</script>

<style scoped lang="less">
</style>
