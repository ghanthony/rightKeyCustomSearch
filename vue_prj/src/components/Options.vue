<template>
  <button v-on:click="btnClick()" type="success" round>圆角按钮</button>
</template>

<script>
export default {
  name: 'Options',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    btnClick: function () {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ')
      chrome.tabs.create({active: true, url: 'http://movie.douban.com'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
