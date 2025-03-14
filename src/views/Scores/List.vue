<template>
  <div class="header">
    <h1>Scores</h1>
  </div>
  <el-input v-model="search" placeholder="Search by team name" style="margin-bottom: 20px; width: 300px" />
  <el-table :data="filteredScores" stripe border style="width: 100%">
    <el-table-column fixed prop="receiving_team" label="Receiving Team" width="180"></el-table-column>
    <!-- <el-table-column prop="score_type" label="Score Type" width="180"></el-table-column> -->
    <el-table-column prop="score_number" label="Score Number" width="180"></el-table-column>
    <el-table-column prop="criterion_of_the_score" label="Criterion of the Score" width="180"></el-table-column>
    <el-table-column prop="Child_Criteria.criterion_title" label="Child Criteria" width="180"></el-table-column>
    <el-table-column fixed="right" label="Operations" width="180">
      <template #default="scope">
        <!-- <el-button link type="primary" size="small"
            @click.prevent="handleEdit(scope.$index), editDrawer = true">Edit</el-button>
          <el-button link type="danger" size="small"
            @click="handleDeleteButton(scope.$index), deleteDrawer = true;">Delete</el-button>
          <el-button link type="info" @click.prevent="chooseContest(scope.$index)">Choose</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import database from '@/apis/crud/database'
import { ElMessage } from 'element-plus'
import type { Score } from '@/apis/crud/database';

const scores = ref<Score[]>([])
const search = ref('')

const filteredScores = computed(() => {
  if (!search.value) return scores.value
  return scores.value.filter((score) =>
    score.receiving_team.toLowerCase().includes(search.value.toLowerCase())
  )
})

const getScores = async () => {
  const { data, error } = await database.methods.getScores()
  if (error) {
    ElMessage.error('Failed to fetch scores: ' + error.message)
    scores.value = []
    return
  }
  scores.value = data
}

onMounted(() => {
  getScores()
})
</script>