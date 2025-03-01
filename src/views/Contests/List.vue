<template>
  <div class="about">
    <div class="header">
      <h1>List of Contests</h1>
    </div>
    <div style="padding-bottom: 15px">
      <el-button type="primary" @click="addDrawer = true">Add a new contest</el-button>
    </div>
    <el-table :data="Contests" stripe border style="width: 100%">
      <el-table-column fixed prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="season" label="Season" width="180"></el-table-column>
      <el-table-column prop="type" label="Type" width="180"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="editDrawer = true">Edit</el-button>
          <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">Delete</el-button>
          <el-button link type="info">Choose</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer v-model="addDrawer" title="Add a new contest">
      <!-- TODO: One question about the use of child elements: How to close the drawer using buttons provided in the imported element. -->
      <addContests />
    </el-drawer>
    <el-drawer v-model="editDrawer" title="Edit the chosen contest">
      <editContests />
    </el-drawer>
    <el-drawer v-model="deleteDrawer" title="Edit the chosen contest">
      <editContests />
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import addContests from './crud/AddContests.vue';
import editContests from './crud/EditContests.vue';
// import { defineComponent } from 'vue';
import database from '@/apis/crud/database';

export default {
  name: 'ContestsList',

  data() {
    return {
      Contests: [] as any[],
    };
  },


  async created() {
    this.whenCreated()
  },

  methods: {
    async whenCreated() {
      // Fetch contests data when the component is created
      const { data, error } = await database.methods.getContests();
      console.log(data);
      if (error) {
        console.error('Error fetching contests:', error);
      } else {
        this.Contests = data || [];
      };
    },
    onCancel() {
      editDrawer.value = false;
    },
    async deleteRow(index: number) {
      const deleteID = this.Contests[index].id;
      const { error } = await database.methods.deleteByID('Contests', deleteID)
      if (error) {
        console.error('Error deleting the selected data:', error);
      } else {
        console.log('Successfully delete the item from table.');
        this.whenCreated()
      }
    }
  },
};
</script>
<script setup lang="ts">
const addDrawer = ref(false);
const editDrawer = ref(false);
const deleteDrawer = ref(false);
</script>





<style>
/* div .header {
text-align: center;
} */
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
