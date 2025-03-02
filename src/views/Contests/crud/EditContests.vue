<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Title">
      <!-- :placeholder="[[contestRow[0].title]]" -->
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="Season">
      <!-- :placeholder="[[contestRow[0].season]]" -->
      <el-input v-model="form.season" />
    </el-form-item>
    <el-form-item label="Type">
      <el-input v-model="form.type" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Update</el-button>
      <!-- <el-button type="primary" @click="defineComponent.onCancel">Cancel</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import database from '@/apis/crud/database';
import { useStore } from '@/stores';
import { reactive } from 'vue'

const Store = useStore();



const form = reactive({
  // TODO: get the data of the selected row
  title: '',
  season: '',
  type: '',
})

export default {
  name: 'EditContests',

  data() {
    return {
      contestRow: [] as any[],
    };
  },

  async mounted() {
    this.whenCreated();
  },

  methods: {
    async whenCreated() {
      // Fetch contest data for this row when the component is created
      const { data: contestRow, error } = await database.methods.getContestByID(Store.chosenContestIDForEdit);
      console.log(contestRow);
      if (error) {
        console.error('Error fetching contests:', error);
      } else {
        this.contestRow = contestRow || [];
        // contestData = contestRow || [];
      };
    },
  }
}
</script>
<script lang="ts" setup>
// import { reactive } from 'vue'
// import supabase from '@/apis/supabase';
import List from '../List.vue';

// do not use same name with ref
// const form = reactive({
//   // TODO: get the data of the selected row
//   title: '',
//   season: '',
//   type: 'e.g.: Engineering',
// })


const onSubmit = () => {
  const submit = async () => {
    const { data: submission, error } = await database.methods.editContestRow(Store.chosenContestIDForEdit, form.title, form.season, form.type)
    return submission
  };
  submit()
  List.methods?.whenCreated()
}


// const onCancel = () => {
//   drawer.value = false
//   console.log('Cancel adding new contest.')
// }
</script>
