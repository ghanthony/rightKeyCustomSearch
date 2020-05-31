<template>
  <div>
      <el-card>
        <div> {{title}} </div>
        <el-divider></el-divider>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            prop=”name“
            label="searchNameLabel"
            width='100'>
          </el-table-column>
           <el-table-column
            prop="url"
            label="searchUrlLabel"
            width='200'>
          </el-table-column>
        </el-table>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '右键搜索列表',
      searchNameLabel: '搜索链接名',
      searchUrlLabel: '搜索链接值（搜索词用%s代替）',
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
