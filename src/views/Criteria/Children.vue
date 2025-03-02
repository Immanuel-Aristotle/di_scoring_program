<template>
  <div class="about">
    <div class="header">
      <h1>List of Parent Criteria from the chosen contest</h1>
    </div>
    <div style="padding-bottom: 15px">
      <el-button type="primary" @click="addDrawer = true">Add a new contest</el-button>
    </div>
    <el-table :data="childCriteria" stripe border style="width: 100%">
      <el-table-column prop="Parent_Criteria.criteria_alphabet" label="Parent Criterion" width="180" fixed></el-table-column>
      <el-table-column prop="child_criterion_number" label="Criterion Number" width="180"></el-table-column>
      <el-table-column prop="criterion_title" label="Title" width="180"></el-table-column>
      <el-table-column prop="criterion_description" label="Description" width="360"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="editDrawer = true">Edit</el-button>
          <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">Delete</el-button>
          <!-- <el-button link type="info">Choose</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import database from '@/apis/crud/database';
import { useStore } from '@/stores';
const Store = useStore();

export default {
  name: 'ContestsList',

  data() {
    return {
      childCriteria: [] as any[],
    };
  },


  async created() {
    this.whenCreated()
  },

  methods: {
    async whenCreated() {
      // Fetch contests data when the component is created
      const { data: childCriteria, error } = await database.methods.getChildCriteria(Store.chosenParentCriteriaIDForNextLevel);
      console.log(childCriteria);
      if (error) {
        console.error('Error fetching contests:', error);
      } else {
        this.childCriteria = childCriteria || [];
      };
    },

    async deleteRow(index: number) {
      const deleteID = this.childCriteria[index].id;
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