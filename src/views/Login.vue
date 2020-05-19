<template>
  <div class="wrap">
    <router-link to="/">
      <el-button type="primary" plain class="card">
        Home
      </el-button>
    </router-link>

    <FormLogin @success="showAlert" class="form-wrap" />

    <el-alert v-if="alert" title="success" type="success" show-icon
      >{{ userData }}
    </el-alert>
  </div>
</template>

<script>
import FormLogin from "../components/FormLogin";

export default {
  name: "Home",
  components: {
    FormLogin,
  },

  data: () => ({
    alert: false,
    userData: {},
  }),

  methods: {
    showAlert(data) {
      this.userData = data;
      this.alert = true;

      setTimeout(() => {
        this.alert = false;
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  .form-wrap {
    margin: 50px auto 0 auto;
  }
}
</style>
