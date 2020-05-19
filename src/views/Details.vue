<template>
  <div class="details-wrap">
    <router-link class="link" to="/list">
      <el-button type="primary" size="small" plain>
        Back
      </el-button>
    </router-link>

    <router-link class="link" to="/">
      <el-button type="primary" plain>
        Home
      </el-button>
    </router-link>

    <UserInfoTemplate :user-info="userInfo" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserInfoTemplate from "@/components/UserInfoTemplate";

export default {
  name: "Details",
  components: {
    UserInfoTemplate,
  },

  data: () => ({
    userInfo: {},
  }),

  computed: {
    ...mapGetters("users", ["userId", "usersList"]),
  },

  methods: {
    updateUser() {
      this.currentUser(this.usersList, this.userId);
    },
    currentUser(users, id) {
      this.userInfo = this.usersList.find((user) => user.id == id);
    },
  },

  watch: {
    userId: "updateUser",
  },

  mounted() {
    this.currentUser(this.usersList, this.userId);
  },
};
</script>
