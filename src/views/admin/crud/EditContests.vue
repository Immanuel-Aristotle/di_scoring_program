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
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button type="primary" @click="onCancel">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import supabase from '@/apis/supabase';
import { ref } from 'vue';
const drawer = ref(false)

// do not use same name with ref
const form = reactive({
  // TODO: get the data of the selected row
  title: '',
  season: 'e.g.: 2023',
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
    return submission
  }
  submit()
  console.log('A new contest submitted!')
}

const onCancel = () => {
  drawer.value = false
  console.log('Cancel adding new contest.')
}
</script>
