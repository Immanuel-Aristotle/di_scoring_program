<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-header"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
    @select="handleSelect"
  >
    <div class="el-collapse-icon">
      <a @click="toggleCollapse()">
        <el-icon v-if="isCollapse">
          <Expand />
        </el-icon>
        <el-icon v-else>
          <Fold />
        </el-icon>
      </a>
    </div>
    <div class="breadcrumb">
      <Breadcrumb />
    </div>
    <div class="flex-grow" />
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/about"> 关于 </el-menu-item>
    <div class="dark-icon" @click="toggleDark()">
      <el-icon>
        <Moon v-if="isDark" />
        <Sunny v-else />
      </el-icon>
    </div>
    <el-sub-menu index="/">
      <template #title>
        <el-icon>
          <Avatar />
        </el-icon>
        {{ userStore.user?.username || 'Guest' }}
      </template>
      <!-- <el-menu-item index="/user">个人中心</el-menu-item> -->
      <el-menu-item @click="logOut" index="/login">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { toggleCollapse, isCollapse } from '@/stores/collapse'
import { toggleDark, isDark } from '@/stores/dark'
import Breadcrumb from '../Breadcrumb/Index.vue'
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

import supabase from '@/apis/supabase';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore();
const router = useRouter();

const logOut = async () => {
  userStore.clearUser();
  router.push('/login');
}
</script>

<style scoped>
.el-menu-header a {
  font-size: 14px;
  font-weight: 500;
}

.el-collapse-icon a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
  margin: 0 0 0 15px;
}

.breadcrumb {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0 0 0 15px;
}

.dark-icon {
  font-size: 20px;
  margin: 15px 15px 0 15px;
  cursor: pointer;
}

.flex-grow {
  flex-grow: 1;
}
</style>
