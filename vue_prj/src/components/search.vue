<template>
  <div>
      <el-card>
        <el-row>
          <el-col class="col" :span="24">{{searchExampleLabel}}</el-col>
        </el-row>
        <el-row :gutter="20" style="max-width: 800px">
          <el-col class="col" :span="3">
            <el-input
              readonly="true"
              :value="searchExampleNameLabel"
              :disabled="true">
            </el-input>
          </el-col>
          <el-col class="col" :span="12">
            <el-input
              readonly="true"
              :value="searchExampleUrlLabel"
              :disabled="true">
            </el-input>
          </el-col>
        </el-row>
        <el-row  style="max-width: 800px">
        <el-table :data="tableData" header-align="center">
          <el-table-column
            class=""
            prop="name"
            :label="searchNameLabel"
            width='100px'>
          </el-table-column>
          <el-table-column
            prop="url"
            :label="searchUrlLabel"
            width='350px'>
          </el-table-column>
           <el-table-column
            prop="url"
            width='350px'>
          </el-table-column>
        </el-table>
        </el-row>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchExampleLabel: '在右键菜单中加入自定义的搜索链接，点击后可跳转搜索当前鼠标选中的词，链接中搜索词请用%s代替。样例：',
      searchExampleNameLabel: '微博找人',
      searchExampleUrlLabel: 'http://s.weibo.com/user/%s&Refer=SUer_box',
      searchNameLabel: '名字',
      searchUrlLabel: '链接',
      tableData: [{
        name: '百度',
        url: 'www.baidu.com'
      }, {
        name: '百度',
        url: 'www.baidu.com'
      }

      ]
    }
  }
}
</script>

<style>
  .col {
    padding-bottom: 20px;
  }
</style>
