<template>
  <div>
      <el-card style="max-width: 840px">
        <el-row>
          <el-col class="col" :span="24">{{searchExampleLabel}}</el-col>
        </el-row>
        <el-row :gutter="20" style="max-width: 800px">
          <el-col class="col" :span="4">
            <el-input
              readonly=true
              :value="searchExampleNameLabel"
              :disabled="true">
            </el-input>
          </el-col>
          <el-col class="col" :span="13">
            <el-input
              readonly=true
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
              @click="handleAdd()">
            </el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-dialog
        :title="searchOpTitleLabel"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
          <el-form :model="form" label-width="40px">
            <el-form-item :label="searchNameLabel">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item :label="searchUrlLabel">
              <el-input v-model="form.url" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="toOp()">确 定</el-button>
          </div>
        </el-dialog>
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
      searchOpTitleLabel: '',
      isOpTypeAdd: true,
      searchOpTitleAddLabel: '添加搜索项',
      searchOpTitleEditLabel: '编辑搜索项',
      dialogVisible: false,
      maxSearchNo: 10,
      overSizeAlert: '最多添加%s个搜索项',
      emptyParamAlert: '搜索项参数不能为空',
      tableData: [
        {
          name: '谷歌',
          url: 'http://www.google.com#q=%s'
        }, {
          name: '虾米找歌',
          url: 'http://www.xiami.com/search/song?key=%s'
        }
      ],
      form: {
        name: '',
        url: '',
        index: 0
      }
    }
  },
  methods: {
    handleEdit (index, row) {
      this.isOpTypeAdd = false
      this.searchOpTitleLabel = this.searchOpTitleEditLabel
      this.$set(this.form, 'name', row.name)
      this.$set(this.form, 'url', row.url)
      this.$set(this.form, 'index', index)
      this.showDialog()
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    },
    handleAdd () {
      this.isOpTypeAdd = true
      this.searchOpTitleLabel = this.searchOpTitleAddLabel
      this.showDialog()
    },
    toOp () {
      this.dialogVisible = false
      if (this.tableData.length >= this.maxSearchNo) {
        alert(this.overSizeAlert.replace('%s', this.maxSearchNo))
        return
      }
      if (!this.form.name || !this.form.url) {
        alert(this.emptyParamAlert)
        return
      }
      if (this.isOpTypeAdd) {
        this.tableData.push({name: this.form.name, url: this.form.url})
      } else {
        this.tableData.$set(this.tableData, this.form.index, {name: this.form.name, url: this.form.url})
      }
    },
    showDialog () {
      this.$set(this.form, 'name', '')
      this.$set(this.form, 'url', '')
      this.dialogVisible = true
    }
  }
}
</script>

<style>
  .col {
    padding-bottom: 20px;
  }
</style>
