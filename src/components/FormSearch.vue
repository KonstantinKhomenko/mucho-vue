<template>
  <div class="form-wrap">
    <el-form ref="searchUserForm">
      <el-form-item>
        <el-input
          placeholder="Please input user name on Github"
          v-model="input"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormSearch",

  data: () => ({
    input: "",
  }),

  methods: {
    onSubmit() {
      this.$emit("submitForm", this.input);
    },
  },
};
</script>

<style scoped>
.form-wrap {
  margin-top: 30px;
  margin: 50px auto 0 auto;
}
</style>
