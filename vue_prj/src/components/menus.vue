<template>
  <el-container>
    <h1>{{extensionName}}</h1>
    <el-divider></el-divider>
    <el-menu default-active="/">
      <el-menu-item index="/search">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="/help">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      extensionName: '右键自定义搜索设置'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
