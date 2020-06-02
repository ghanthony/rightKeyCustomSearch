<template>
  <el-card style="max-width: 840px">
    <li class="about_line"> {{author}} <a href="https://www.weibo.com/2627808625/profile?topnav=1&wvr=6" target="_blank">@青野侯</a></li>
    <li class="about_line">
      <a href="https://github.com/ghanthony/rightKeyCustomSearch/issues" target="_blank"> {{advice}} </a>
    </li>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      author: '作者',
      advice: '问题建议'
    }
  }
}
</script>

<style>
  .about_line{
    line-height: 2;
  }
</style>
