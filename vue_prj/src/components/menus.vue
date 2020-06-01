<template>
  <el-container>
    <el-header class="header">
      <h3>{{extensionName}}</h3>
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu router default-active="/" class="aside">
          <el-menu-item index="/">
            <i class="el-icon-search"></i>
            <span slot="title">{{navSearch}}</span>
          </el-menu-item>
          <el-menu-item index="help">
            <i class="el-icon-help"></i>
            <span slot="title">{{navHelp}}</span>
          </el-menu-item>
          <el-menu-item index="about">
            <i class="el-icon-user"></i>
            <span slot="title">{{navAbout}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      extensionName: '右键自定义搜索设置',
      navSearch: '搜索列表',
      navHelp: '使用帮助',
      navAbout: '关于'
    }
  },
  methods: {
  }
}
</script>

<style>
  .header {
    background-color: #20222A;
    color: white;
  }
  .aside {
    height: 90vh;
    min-height: 90%;
    margin: 5px;
    background-color: white;
  }
</style>
