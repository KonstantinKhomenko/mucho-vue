<template>
  <el-form
    ref="addItemForm"
    :model="formData"
    label-width="120px"
    :rules="rules"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="formData.email"></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="password">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "FormLogin",
  data: () => ({
    formData: {
      email: "",
      password: "",
    },

    rules: {
      email: [
        {
          required: true,
          message: "Please input email address",
          trigger: "blur",
        },
        {
          type: "email",
          message: "Please input correct email address",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "Please input password",
          trigger: "blur",
        },
      ],
    },
  }),

  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          const data = {
            ...this.formData,
            id: Date.now(),
          };
          this.$emit("success", data);
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>
