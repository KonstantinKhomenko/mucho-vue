<template>
  <div class="users-list-wrap">
    <router-link to="/">
      <el-button type="primary" plain>
        Home
      </el-button>
    </router-link>
    <List :loginsList="loginsUsers" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import List from "@/components/List";

export default {
  name: "UsersList",
  components: {
    List,
  },

  computed: {
    ...mapGetters("users", ["usersList"]),
    loginsUsers() {
      return this.usersList.reduce((acc, user) => {
        acc[user.id] = user.login;
        return acc;
      }, {});
    },
  },

  methods: {
    ...mapActions("users", ["fetchUsersList"]),
  },

  mounted() {
    this.fetchUsersList();
  },
};
</script>
