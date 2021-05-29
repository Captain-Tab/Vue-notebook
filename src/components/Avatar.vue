<template>
  <span :title="user.userName">{{ text }}</span>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Avatar extends Vue {
  name = "Avatar"

  // user information
  private  user = {
    userName: 'test'
  }
  // test variable
  private text = 'Tab'

}
</script>

<style scoped lang="less">
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #f2b81c;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
}
</style>
