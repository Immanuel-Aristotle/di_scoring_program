<template>
  <div class="about">
    <h1>List of Contests</h1>
    <div style="padding-bottom: 15px">
      <el-button type="primary" @click="drawer = true">Add a new contest</el-button>
    </div>
    <el-table :data="contests" stripe border style="width: 100%">
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="season" label="Season" width="180"></el-table-column>
      <el-table-column prop="type" label="Type" width="180"></el-table-column>
      <!-- <el-table-column prop="created_at" label="Created At" width="180"></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small">Edit</el-button>
          <el-button link type="primary" size="small" @click="editDrawer = true">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer v-model="drawer" title="Add a new contest">
      <!-- TODO: One question about the use of child elements: How to close the drawer using buttons provided in the imported element. -->
      <addContests />
    </el-drawer>
    <el-drawer v-model="editDrawer" title="Edit the chosen contest">
      <editContests />
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import addContests from './crud/AddContests.vue';
import editContests from './crud/EditContests.vue';
import { defineComponent } from 'vue';
// import supabase from '@/apis/supabase';
import database from '@/apis/crud/database';

export default defineComponent({
  name: 'ContestsList',

  data() {
    return {
      contests: [] as any[]
    };
  },

  async created() {
    // Fetch contests data when the component is created
    const { data, error } = await database.methods.getContests();
    console.log(data);
    if (error) {
      console.error('Error fetching contests:', error);
    } else {
      this.contests = data || [];
    };
    this.getUsers();
  },


  methods: {
    async getUsers() {
      // const { data: { users }, error } = await supabase.auth.admin.listUsers();
      // console.log(users);
    }
  },
});
</script>
<script setup lang="ts">
const drawer = ref(false);
const editDrawer = ref(false);
</script>





<style>

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
