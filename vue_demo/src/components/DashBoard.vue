
<template>
  <div class="hello">
  </div>
</template>

<script>
import { fetchMsg } from '@/api/index'
export default {
  name: 'DashBoard',
  data () {
    return {
      msg: null
    }
  },
  created () {
    fetchMsg().then(res => {
      this.msg = res || null
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
