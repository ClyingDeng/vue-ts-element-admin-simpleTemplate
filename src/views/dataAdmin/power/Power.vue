<template>
  <div class="power">
    <div class="anfang">
      <div class="afTitle">
        <p>值班力量1</p>
        <el-button type="primary" plain class="afedit" @click="efEdit"
          >编辑</el-button
        >
      </div>
      <el-row :gutter="40" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-people">
              <div class="iconfont iconpolice-car card-panel-icon"></div>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">早班</div>
              <count-to
                :start-val="0"
                :end-val="anfang.zb"
                :duration="2600"
                class="card-panel-num"
              />
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-money">
              <div class="iconfont iconfpolice card-panel-icon"></div>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">晚班</div>
              <count-to
                :start-val="0"
                :end-val="anfang.wb"
                :duration="3200"
                class="card-panel-num"
              />
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-message">
              <div class="iconfont iconpolice card-panel-icon"></div>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">夜班</div>
              <count-to
                :end-val="anfang.yb"
                :duration="3000"
                class="card-panel-num"
              />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="duty">
      <div class="afTitle">
        <p>值班力量2</p>
        <el-button type="primary" plain class="afedit" @click="dutyAdd"
          >添加</el-button
        >
      </div>
      <el-table
        :data="dutyData"
        border
        :header-cell-style="{ 'background-color': '#ccc', color: '#333' }"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="name" label="姓名" min-width="25%">
        </el-table-column>
        <el-table-column prop="area" label="地址" min-width="25%">
        </el-table-column>
        <el-table-column prop="mobile" label="联系方式" min-width="25%">
        </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="25%">
          <template slot-scope="scope">
            <el-button @click="FormEdit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button @click="FormDelete(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="curPage"
        @current-change="pageChange"
        :page-size="2"
        :total="total"
      >
      </el-pagination>
    </div>
    <div class="dialog">
      <el-dialog
        center
        :visible.sync="isafEdit"
        title="编辑"
        :close-on-click-modal="false"
      >
        <el-form ref="anfang" :model="anfang" label-width="80px">
          <el-form-item
            prop="zb"
            label="早班"
            :rules="[
              { required: true, message: '该项不能为空', trigger: 'blur' },
              { type: 'number', message: '该项必须为数字值' },
            ]"
          >
            <el-input v-model.number="anfang.zb"></el-input>
          </el-form-item>
          <el-form-item
            prop="wb"
            label="晚班"
            :rules="[
              { required: true, message: '该项不能为空', trigger: 'blur' },
              { type: 'number', message: '该项必须为数字值' },
            ]"
          >
            <el-input v-model.number="anfang.wb"></el-input>
          </el-form-item>
          <el-form-item
            prop="yb"
            label="夜班"
            :rules="[
              { required: true, message: '该项不能为空', trigger: 'blur' },
              { type: 'number', message: '该项必须为数字值' },
            ]"
          >
            <el-input v-model.number="anfang.yb"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="editBeforeClose">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="isDeleteDialog"
      width="30%"
      center
      :before-close="deleteBeforeClose"
      :close-on-click-modal="false"
    >
      <span>您确认删除该条信息吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteBeforeClose">取 消</el-button>
        <el-button type="primary" @click="confirmDelete">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加值班人员 -->
    <el-dialog
      title="添加值班人员"
      :visible.sync="addPowerVisible"
      :before-close="addBeforeClose"
      :close-on-click-modal="false"
    >
      <el-form :model="addInfo" ref="addInfo">
        <el-form-item
          label="姓名"
          label-width="120px"
          prop="name"
          :rules="[{ required: true, message: '姓名不能为空' }]"
        >
          <el-input v-model="addInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="地址"
          label-width="120px"
          prop="area"
          :rules="[{ required: true, message: '地址不能为空' }]"
        >
          <el-input v-model="addInfo.area" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          label-width="120px"
          prop="mobile"
          :rules="[{ required: true, message: '联系方式不能为空' }]"
        >
          <el-input v-model="addInfo.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addBeforeClose">取 消</el-button>
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 值班力量编辑 -->
    <el-dialog
      title="编辑"
      :visible.sync="idEditDialog"
      :before-close="editBeforeClose"
      :close-on-click-modal="false"
    >
      <el-form :model="editInfo" ref="editInfo">
        <el-form-item
          label="姓名"
          label-width="80px"
          prop="name"
          :rules="[{ required: true, message: '姓名不能为空' }]"
        >
          <el-input v-model="editInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="地址"
          label-width="80px"
          prop="area"
          :rules="[{ required: true, message: '地址不能为空' }]"
        >
          <el-input v-model="editInfo.area" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          label-width="80px"
          prop="mobile"
          :rules="[{ required: true, message: '联系方式不能为空' }]"
        >
          <el-input v-model="editInfo.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editBeforeClose">取 消</el-button>
        <el-button type="primary" @click="editConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" scoped src='./Power.ts'></script>
<style lang="scss" scoped src='./Power.scss'></style>
<style lang="scss">
</style>
