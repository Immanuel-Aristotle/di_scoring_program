<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="Season">
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
import { reactive, onMounted, onActivated } from 'vue';

const Store = useStore();
import List from '../List.vue';
import { onClickOutside } from '@vueuse/core';

// do not use same name with ref
// const form = reactive({
//   // TODO: get the data of the selected row
//   title: '',
//   season: '',
//   type: 'e.g.: Engineering',
// })

export default {
  name: 'EditContests',

  setup() {
    // Reactive form data
    const form = reactive({
      title: '',
      season: '',
      type: '',
    });

    // Reactive contestRow array
    const contestRow = reactive<any[]>([]);

    // Fetch data when the component is mounted
    onMounted(async () => {
      await whenCreated();
    });

    // onClickOutside(
    // )


    // Fetch function
    async function whenCreated() {
      const { data, error } = await database.methods.getContestByID(Store.chosenContestIDForEdit);
      if (error) {
        console.error('Error fetching contests:', error);
      } else {
        contestRow.push(...(data || [])); // Populate contestRow reactively
        if (contestRow.length > 0) {
          form.title = contestRow[0].title || '';
          form.season = contestRow[0].season || '';
          form.type = contestRow[0].type || '';
        }
      };
    };
    const onSubmit = () => {
      const submit = async () => {
        const { data: submission, error } = await database.methods.editContestRow(Store.chosenContestIDForEdit, form.title, form.season, form.type)
        return submission
      };
      submit()
      List.methods?.whenCreated()
    }

    return { form, contestRow, whenCreated, onSubmit };
  },
};
</script>
