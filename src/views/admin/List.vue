<template>
  <div class="about">
    <h1>List of Contests</h1>
    <el-table :data="contestsData" stripe border style="width: 100%">
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="season" label="Season" width="180"></el-table-column>
      <el-table-column prop="type" label="Type" width="180"></el-table-column>
      <!-- <el-table-column prop="created_at" label="Created At" width="180"></el-table-column> -->
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
// import { getContests } from '@/apis/crud/database'; // Import the API function
import supabase from '@/apis/supabase';
export default defineComponent({
  name: 'ContestsList',

  setup() {
    const getContests = async (start: number = 0, end: number = 9) => {
      let { data: Contest, error } = await supabase
        .from('Contest')
        .select('title,season,type');
        // .range(start, end);
      console.log(Contest);

      if (error) {
        console.error("Error fetching contests:", error);
        return { data: [], error };
      }
      return { Contest, error: null };
    }
    // State to hold fetched data
    let contestsData;
    // console.log(contestsData);

    // Fetch contests data on component mount
    const fetchContests = async () => {
      const { data, error } = await getContests();
      if (error) {
        console.error('Error fetching contests:', error);
      } else {
        console.log(data);
        contestsData = data;
      }
    };

    // Call fetchContests when the component is mounted
    onMounted(fetchContests);
    console.log(contestsData);
    return {
      contestsData,
    };
  },
});
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
