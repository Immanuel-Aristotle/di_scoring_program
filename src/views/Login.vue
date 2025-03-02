<template>
  <el-row class="login" justify="center" align="middle">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>用户登录</span>
          <el-button type="primary" class="signup" @click="handleSignUp">Sign Up</el-button>
          <div class="dark-icon" @click="toggleDark()">
            <el-icon>
              <Moon v-if="isDark" />
              <Sunny v-else />
            </el-icon>
          </div>
        </div>
      </template>
      <div>
        <!--
          el provider: Element-plus 
          ref: https://element-plus.org/zh-CN/component/form.html#form-%E8%A1%A8%E5%8D%95
         -->
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px"
          class="demo-ruleForm">
          <!-- <el-form-item label="用户名" prop="username">
            <el-input v-model.number="ruleForm.username" />
          </el-form-item> -->
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="ruleForm.email" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </el-row>
</template>

<style scoped>
.login {
  position: absolute;
  top: 20%;
  bottom: 60%;
  width: 100%;
}

.box-card {
  width: 450px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dark-icon {
  font-size: 20px;
  cursor: pointer;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

/* .signup {
  float: right
} */
</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toggleDark, isDark } from '@/stores/dark'
import type { FormInstance, FormRules } from 'element-plus'
import supabase from '@/apis/supabase'  // Import supabase client
import { useUserStore } from '@/stores/user'
import { useStore } from '@/stores'
const UserStore = useUserStore();

const ruleFormRef = ref<FormInstance>()
const router = useRouter()

const validateEmpty = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('The value should not be empty.'))
  } else {
    callback()
  }
}

const validateEmail = (rule: any, email: string, callback: any) => {
  const ifValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!ifValid) {
    callback(new Error('The email is not valid'))
  } else {
    callback()
  }
};

const ruleForm = reactive({
  // username: '',
  email: '',
  password: ''
})

const rules = reactive<FormRules>({
  // username: [{ validator: validateEmpty, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validateEmpty, trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  // Modify validate callback to return a Promise<void> instead of Promise<false | undefined>
  formEl.validate(async (valid): Promise<void> => {
    if (valid) {
      // Use Supabase to log in the user
      const { email, password } = ruleForm
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        console.error('Login failed:', error.message)
        return
      }

      // Successfully logged in
      console.log('User logged in:', data.user)
      UserStore.setUser(data.user);
      console.log(UserStore.user)
      
      router.push('/') // Redirect to home/dashboard after login
    } else {
      console.log('error submit!')
      return // Ensure no false or undefined is returned
    }
  })
}

const handleSignUp = () => {
  router.push('/signup')
}
</script>
