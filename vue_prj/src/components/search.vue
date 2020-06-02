<template>
  <div>
      <el-card style="max-width: 840px">
        <el-row>
          <el-col class="col" :span="24">{{searchExampleLabel}}</el-col>
        </el-row>
        <el-row :gutter="20" style="max-width: 800px">
          <el-col class="col" :span="4">
            <el-input
              readonly="true"
              :value="searchExampleNameLabel"
              :disabled="true">
            </el-input>
          </el-col>
          <el-col class="col" :span="13">
            <el-input
              readonly="true"
              :value="searchExampleUrlLabel"
              :disabled="true">
            </el-input>
          </el-col>
        </el-row>
        <el-row  style="max-width: 800px;">
          <el-table :data="tableData" header-align="center">
            <el-table-column
              prop="name"
              :label="searchNameLabel"
              width='133px'>
            </el-table-column>
            <el-table-column
              prop="url"
              :label="searchUrlLabel"
              width='483px'>
            </el-table-column>
            <el-table-column
              prop="url"
              fixed="right"
              :label="searchOpLabel"
              width='183px'>
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="primary"
                  icon="el-icon-edit"
                  @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button
                  size="small"
                  type="danger"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.$index, scope.row)"></el-button>
                <el-button
                  size="small"
                  type="info"
                  icon="el-icon-sort"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-row>
          <el-col class="col" :span="24">
            <el-button
              icon="el-icon-plus"
              style="width: 100%; border-radius: 0px; margin-top : -1px; border-style: dotted"
              @click="handleAdd()"></el-button>
          </el-col>
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
      searchOpLabel: '操作',
      tableData: [
      ]
    }
  },
  methods: {
    handleEdit () {

    },
    handleDelete () {
    },
    handleAdd () {
    }
  }
}
</script>

<style>
  .col {
    padding-bottom: 20px;
  }
</style>
