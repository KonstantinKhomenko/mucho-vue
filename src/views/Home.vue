<template>
  <div class="home">
    <div id="nav">
      <router-link to="/login">
        <el-card class="card">
          Login
        </el-card>
      </router-link>

      <router-link to="/list">
        <el-card class="card">
          Users list
        </el-card>
      </router-link>

      <router-link to="/search">
        <el-card class="card">
          Search user by name
        </el-card>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 20px;
}
</style>
