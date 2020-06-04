<template>
  <div>
      <el-card style="max-width: 840px">
        <el-row>
          <el-col class="col" :span="24">{{searchExampleLabel}}</el-col>
        </el-row>
        <el-row :gutter="20" style="max-width: 800px; padding-left:8px">
          <el-col class="col" :span="4">
            <el-tag type="info">{{searchExampleNameLabel}}</el-tag>
          </el-col>
          <el-col class="col" :span="13">
            <el-tag type="info">{{searchExampleUrlLabel}}</el-tag>
          </el-col>
        </el-row>
        <el-row  style="max-width: 800px;">
          <el-table :data="tableData" header-align="center" id='crTable' row-key="name">
            <el-table-column
              :label="searchNameLabel"
              width='133px'>
              <template slot-scope="scope">
                <el-tag
                  type='info'
                  effect="plain">
                  {{scope.row.name}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              :label="searchUrlLabel"
              width='483px'>
              <template slot-scope="scope">
                <el-tag
                  type='info'
                  effect="plain">
                  {{scope.row.url}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              :label="searchOpLabel"
              width='128px'>
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
              </template>
            </el-table-column>
            <el-table-column
              className='dragHandle'
              width='55px'>
              <template>
                <i class="el-icon-sort el-button el-button--small" style="margin-left: -5px"></i>
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
        width="30%">
          <el-form :model="form" label-width="40px">
            <el-form-item :label="searchNameLabel">
              <el-input type="text" v-model="form.name" autocomplete="off" maxlength="6" show-word-limit></el-input>
            </el-form-item>
            <el-form-item :label="searchUrlLabel">
              <el-input v-model="form.url" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">{{cancelStr}}</el-button>
            <el-button type="primary" @click="toAddOrEdit()">{{okStr}}</el-button>
          </div>
        </el-dialog>
  </div>
</template>

<script>
import Sortable from 'sortablejs'

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
      sameNameParamAlert: '搜索项不能同名',
      cancelStr: '取 消',
      okStr: '确 定',
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
  mounted () {
    this.rowDrop()
  },
  methods: {
    handleEdit (index, row) {
      this.isOpTypeAdd = false
      this.searchOpTitleLabel = this.searchOpTitleEditLabel
      this.$set(this.form, 'name', row.name)
      this.$set(this.form, 'url', row.url)
      this.$set(this.form, 'index', index)
      this.dialogVisible = true
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    },
    handleAdd () {
      this.isOpTypeAdd = true
      this.searchOpTitleLabel = this.searchOpTitleAddLabel
      this.$set(this.form, 'name', '')
      this.$set(this.form, 'url', '')
      this.dialogVisible = true
    },
    toAddOrEdit () {
      if (this.tableData.length >= this.maxSearchNo) {
        alert(this.overSizeAlert.replace('%s', this.maxSearchNo))
        return
      }
      if (!this.form.name || !this.form.url) {
        alert(this.emptyParamAlert)
        return
      }
      if (this.isOpTypeAdd) {
        const _this = this
        if (this.tableData.find((item) => (item.name === _this.form.name))) {
          alert(this.sameNameParamAlert)
          return
        }
        this.tableData.push({name: this.form.name, url: this.form.url})
      } else {
        this.$set(this.tableData, this.form.index, {name: this.form.name, url: this.form.url})
      }
      this.dialogVisible = false
    },
    rowDrop () {
      const tbody = document.getElementById('crTable').querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        handle: '.dragHandle',
        onEnd: evt => {
          const oldRow = _this.tableData[evt.oldIndex]
          _this.tableData.splice(evt.oldIndex, 1)
          console.log('evt.oldIndex ' + evt.oldIndex)
          _this.tableData.splice(evt.newIndex, 0, oldRow)
          console.log('evt.newIndex ' + evt.newIndex)
        }
      })
    }
  }
}
</script>

<style>
  .col {
    padding-bottom: 20px;
  }
  .dragHandle {
    cursor: move;
  }
</style>
