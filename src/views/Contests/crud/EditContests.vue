<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="Season">
      <el-input placeholder="e.g." v-model="form.season" />
    </el-form-item>
    <el-form-item label="Type">
      <el-input v-model="form.type" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <!-- <el-button type="primary" @click="defineComponent.onCancel">Cancel</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import supabase from '@/apis/supabase';
import List from '../List.vue';

// do not use same name with ref
const form = reactive({
  // TODO: get the data of the selected row
  title: '',
  season: '',
  type: 'e.g.: Engineering',
})

const onSubmit = () => {
  const submit = async () => {
    const { data: submission, error } = await supabase
      .from('Contest')
      .insert([
        { title: form.title, season: form.season, type: form.type },
      ])
      .select()
    if (error) {
      console.error('Error submitting a new data to the database:', error);
    } else {
      console.log('A new data submitted!');
      return submission
    };
  }
  submit()
  List.method.whenCreated()
}

// const onCancel = () => {
//   drawer.value = false
//   console.log('Cancel adding new contest.')
// }
</script>
