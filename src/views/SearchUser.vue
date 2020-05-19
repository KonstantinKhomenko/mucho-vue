<template>
  <div class="user-details-wrap">
    <router-link to="/">
      <el-button type="primary" plain class="card">
        Home
      </el-button>
    </router-link>

    <FormSearch @submitForm="submitHandler" />

    <UserInfoTemplate :user-info="userInfo" />
  </div>
</template>

<script>
import FormSearch from "@/components/FormSearch";
import UserInfoTemplate from "@/components/UserInfoTemplate";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchUser",
  components: {
    FormSearch,
    UserInfoTemplate,
  },

  computed: {
    ...mapGetters("users", ["userInfo"]),
  },

  methods: {
    ...mapActions("users", ["fetchUserByName"]),
    submitHandler(userName) {
      this.fetchUserByName(userName);
    },
  },
};
</script>
