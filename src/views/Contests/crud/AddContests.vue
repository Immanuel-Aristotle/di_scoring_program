<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Title">
      <el-input placeholder="往事探险" v-model="form.title" />
    </el-form-item>
    <el-form-item label="Season">
      <el-input placeholder="e.g. 2024-2025" v-model="form.season" />
    </el-form-item>
    <el-form-item label="Type">
      <el-input placeholder="e.g.: Engineering" v-model="form.type" />
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
  type: '',
})

const onSubmit = () => {
  const submit = async () => {
    const { title, season, type } = form;
    const { data: submission, error } = await supabase
      .from('Contests')
      .insert([
        { title: title, season: season, type: type },
      ])
      .select()
    if (error) {
      console.error('Error submitting a new data to the database:', error);
      return
    } else {
      console.log('A new data submitted!');
    };
    return submission
  }
  submit()
  List.methods?.whenCreated()
}

// const onCancel = () => {
//   drawer.value = false
//   console.log('Cancel adding new contest.')
// }
</script>
