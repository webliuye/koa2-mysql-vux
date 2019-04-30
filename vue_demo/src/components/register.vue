<template>
  <div>
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      :state="userState"
      v-model="username"
    ></mt-field>
    <mt-field
      label="邮箱"
      placeholder="请输入邮箱"
      type="email"
      v-model="email"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="password"
    ></mt-field>
    <mt-button
      size="large"
      type="primary"
      @click="to_register"
    >
      确定
    </mt-button>
    <mt-button
      size="large"
      @click="to_login"
    >
      登录
    </mt-button>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { register } from '@/api/index'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      phone: '',
      userState: ''
    }
  },
  methods: {
    to_register () {
      // 调用接口
      const params = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      register(params).then(res => {
        MessageBox({ title: '成功', showCancelButton: false, showConfirmButton: false })
        this.to_login()
      }).catch(err => {
        MessageBox('错误提示', err.message)
      })
    },
    to_login () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
</style>