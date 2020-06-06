<template>
  <el-card style="max-width: 840px" class="help">
    <li class="about_line">{{help1}}</li>
    <img
      style="width: 450px; height: auto"
      :src='help1pic'>
    <li class="about_line">{{help2}}</li>
    <img
      style="width: 450px; height: auto"
      :src='help2pic'>
    <li class="about_line">{{help3}}</li>
    <img
      style="width: 450px; height: auto"
      :src='help3pic'>
    <li class="about_line">{{help4}}
      <ul>
        <li>{{search1}}</li>
        <li>{{search2}}</li>
        <li>{{search3}}</li>
        <li>{{search4}}</li>
        <li>{{search5}}</li>
      </ul>
    </li>
  </el-card>
</template>

<script>
import pic1 from '@/assets/help1.png'
import pic2 from '@/assets/help2.png'
import pic3 from '@/assets/help3.png'

export default {
  data () {
    return {
      help1pic: pic1,
      help2pic: pic2,
      help3pic: pic3,
      help1: '添加搜索项后，在正常页面浏览时选中文本，点击右键选中合适的搜索项搜索即可跳转',
      help2: '点击插件栏中的图标可以进入设置页面添加、删除、排序搜索项，修改后一定要点击保存按钮，登录谷歌账号设置会自动同步',
      help3: '搜索项url如何得到？以淘宝为例，当你搜索完之后，地址栏中会包含你搜索关键词的url，将关键词改为%s即可',
      help4: '推荐搜索项',
      search1: '网易云找歌 https://music.163.com/#/search/m/?s=%s&type=1',
      search2: '豆瓣电影 http://s.taobao.com/search?q=%s',
      search3: '豆瓣找书 https://search.douban.com/book/subject_search?search_text=%s',
      search4: '微博找人 http://s.weibo.com/user/%s&Refer=SUer_box',
      search5: '淘宝找货 http://s.taobao.com/search?q=%s'
    }
  }
}
</script>

<style>
  .help{
    font-size: 14px;
  }
</style>
