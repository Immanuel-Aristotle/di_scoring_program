<template>
  <div class="about">
    <h1>List of users</h1>
  </div>
  <!-- <el-table :data="Users" stripe border style="width: 100%">
    <el-table-column prop="role`" label="Title" width="180" fixed></el-table-column>
    <el-table-column prop="season" label="Season" width="180"></el-table-column>
    <el-table-column prop="type" label="Type" width="180"></el-table-column>
    <el-table-column fixed="right" label="Operations" width="180">
    </el-table-column>
  </el-table> -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts">
import database from '@/apis/crud/database';
const Users = database.methods.getUsers();

export default{
  
}
</script>