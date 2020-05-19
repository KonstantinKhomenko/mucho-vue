<template>
  <el-card class="block-wrap" v-if="userInfo">
    <div class="block" v-for="(prop, key) in userInfo" :key="key">
      {{ key }}: {{ prop }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "UserInfo",

  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.block-wrap {
  width: 550px !important;
  margin-top: 5px;

  .block {
    text-align: left;
    margin-bottom: 5px;
    padding: 5px;
  }
}

</style>
