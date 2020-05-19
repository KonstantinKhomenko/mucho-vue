<template>
  <div class="list-wrap">
    <el-card>
      The first 20 users Github
      <div
        @click="getInfo(key)"
        class="list"
        v-for="(prop, key) of loginsList"
        :key="key"
      >
        <router-link to="/details">
          <el-card class="card">{{ prop }}</el-card>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "List",

  methods: {
    ...mapActions("users", ["infoCurrentUser"]),
    getInfo(id) {
      this.infoCurrentUser(id);
    },
  },

  props: {
    loginsList: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrap {
  margin-top: 20px;
  text-align: left;

  .list {
    margin: 10px;
  }
}
</style>
