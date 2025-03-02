<template>
  <el-row class="login" justify="center" align="middle">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Sign Up</span>
          <el-button type="primary" class="signup" @click="redirectLogIn">Go Log In</el-button>
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
        <el-form ref="ruleFormRef" :model="signUpForm" status-icon :rules="rules" label-width="60px"
          class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input placeholder="Your username" v-model="signUpForm.username" />
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input placeholder="Your email" type="email" v-model="signUpForm.email" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input placeholder="Your password" v-model="signUpForm.password" type="password" autocomplete="off"
              show-password />
          </el-form-item>
          <el-form-item label="Token" prop="token">
            <el-input :autosize="{ minRows: 1, maxRows: 3 }" type="textarea"
              placeholder="Please enter the token provided by the administrator in order to register. Your token will determine your user role."
              v-model="signUpForm.token" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Sign Up</el-button>
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
</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toggleDark, isDark } from '@/stores/dark'
import { ElMessageBox, type FormInstance, type FormRules } from 'element-plus'
import supabase from '@/apis/supabase'  // Import supabase client

const ruleFormRef = ref<FormInstance>()
const router = useRouter()

import { validateEmail, validateEmpty } from '@/apis/client/login'

const signUpForm = reactive({
  username: '',
  email: '',
  password: '',
  token: ''
})



const rules = reactive<FormRules>({
  // el-plus rule validation forms
  username: [{ validator: validateEmpty, trigger: 'blur' }],
  email: [{ validator: validateEmpty, trigger: 'blur' }, { validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validateEmpty, trigger: 'blur' }],
  token: [{ validator: validateEmpty, trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  // Modify validate callback to return a Promise<void> instead of Promise<false | undefined>
  formEl.validate(async (valid): Promise<void> => {
    if (valid) {
      // Use Supabase to log in the user
      const { username, email, password, token } = signUpForm;

      const { data, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
          options: {
            data: {
              username: username,
              // determines the user to be admin, AMC, appraiser, or a team
              token: token
            }
          }
        }
      )

      if (error) {
        console.error('Sign up failed:', error.message)
        return
      }
      ElMessageBox.alert('Please go and check your email for verification', 'Title', {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: 'OK'
      })

    } else {
      console.log('error submit!')
      return // Ensure no false or undefined is returned
    }
  })
}

const redirectLogIn = () => {
  router.push('/login')
}
</script>
