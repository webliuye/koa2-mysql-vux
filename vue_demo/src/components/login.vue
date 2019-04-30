<template>
  <div class="login-back">
    <div class="login-main">
      <div></div>
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        v-model="username"
      ></mt-field>
      <mt-field
        label="密码"
        type="password"
        placeholder="请输入密码"
        v-model="password"
      ></mt-field>
      <div class="btns">
        <mt-button
          type="primary"
          size="large"
          @click="login"
        >登录</mt-button>
        <mt-button
          size="large"
          @click="goRegister"
        >
          注册
        </mt-button>
      </div>
    </div>

  </div>
</template>

<script>
import { login } from '@/api/index'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goRegister () {
      this.$router.push({ path: '/register' })
    },
    login () {
      login({ username: this.username, password: this.password }).then(res => {
        console.log(res)
        this.$router.push({ path: '/' })
      }).catch(err => {
        this.MessageBox('错误', err.message)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-back {
  width: 100%;
  height: 100vh;
  color: #333;
  overflow: hidden;
  .login-main {
    background: #fff;
    width: 100%;
    height: auto;
    margin-top: 50%;
    .btns {
      margin-top: 16px;
      .mt-button {
        margin-top: 16px;
      }
    }
  }
}
</style>