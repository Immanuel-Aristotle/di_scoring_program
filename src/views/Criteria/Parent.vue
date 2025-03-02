<template>
  <div class="about">
    <div class="header">
      <h1>List of Parent Criteria from the chosen contest</h1>
    </div>
    <div style="padding-bottom: 15px">
      <el-button type="primary" @click="addDrawer = true">Add a new parent criterion</el-button>
    </div>
    <el-table :data="parentCriteria" stripe border style="width: 100%">
      <el-table-column prop="Contests.season" label="Season" width="180" fixed></el-table-column>
      <el-table-column prop="criteria_alphabet" label="Alphabet" width="180"></el-table-column>
      <el-table-column prop="criteria_title" label="Title" width="180"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="editDrawer = true">Edit</el-button>
          <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">Delete</el-button>
          <el-button link type="info" @click.prevent="chooseParentCriteria(scope.$index)">Choose</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import database from '@/apis/crud/database';
import router from '@/router/index';

import { useStore } from '@/stores';
const Store = useStore();

export default {
  name: 'ContestsList',

  data() {
    return {
      parentCriteria: [] as any[],
    };
  },


  async created() {
    this.whenCreated()
  },

  methods: {
    async whenCreated() {
      // Fetch contests data when the component is created
      const { data: parentCriteria, error } = await database.methods.getParentCriteria(Store.chosenContestIDForNextLevel);
      console.log(parentCriteria);
      if (error) {
        console.error('Error fetching contests:', error);
      } else {
        this.parentCriteria = parentCriteria;
      };
    },
    chooseParentCriteria(index: number) {
      const chosenID = this.parentCriteria[index].id;
      Store.setParentCriteriaIDNextLevel(chosenID);
      router.push({ name: 'childCriteriaList' });
      console.log("Set ParentCriteriaIDNextLevel to " + chosenID + "and route");
      // console.log("Successfully choose the given parent criteria and route.")
    },
    async deleteRow(index: number) {
      const deleteID = this.parentCriteria[index].id;
      const { error } = await database.methods.deleteByID('Parent_Criteria', deleteID)
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