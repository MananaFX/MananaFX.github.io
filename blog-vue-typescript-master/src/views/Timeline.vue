<template>
  <div class="timeline left">

    <el-form :width="isMobile ? '90%' : '50%'" >
      <el-form-item label="时间" prop="date">
          <el-date-picker
              v-model="state.timeStamp"
              type="date"
              placeholder="选一个日期吧"
              style="width: 100%"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
          />
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button @click="getData">查找</el-button>
          <el-button @click="resetTime">重置</el-button>
          <el-button @click="create">新建</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>


    <el-timeline>
<!--      id 顺序-->
<!--      state 颜色-->
<!--      title 标题-->
<!--      content 内容-->
      <el-timeline-item
          v-for="(l, i) in state.list"
          :key="l._id"
          :color="l.color"
          placement="top"
          :timestamp="l.timestamp"
          :size="l.size"
      >
            <el-card>
              <h4>{{l.title}}</h4>
              <p>{{l.content}}</p>
            </el-card>
      </el-timeline-item>
    </el-timeline>

    <el-dialog
        title="新增"
        :width="isMobile ? '100%' : '60%'"
        v-model="state.dialogVisible"
        @close="cancel"
        :show-close="true"
        :modal-append-to-body='false'
        center
    >
      <el-form :model="ruleForm"
               :label-width="isMobile ? '100%' : '50%'"
               label-position="top"
               ref="ruleFormRef"
               :rules="rules"
               :size="formSize">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"  size="small"/>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="ruleForm.content"
                    :autosize="{ minRows: 2, maxRows: 6 }"
                    type="textarea"
                    placeholder="Please input"/>
        </el-form-item>
        <el-form-item label="时间" prop="date">
          <el-col :span="11">
            <el-date-picker
                v-model="ruleForm.date"
                type="date"
                placeholder="选一个日期吧"
                style="width: 100%"
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="节点尺寸" prop = "size">
          <el-switch
              v-model="ruleForm.size"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="large"
              inactive-value="normal"
              active-text="增大"
              inactive-text="正常"
          />
          <br />
        </el-form-item>
        <el-form-item label="颜色选择" prop="color">
          <el-radio-group v-model="ruleForm.color" fill="#cf786f">
            <el-radio-button label="#edb18c">曼曼</el-radio-button>
            <el-radio-button label="#cf786f">Manana</el-radio-button>
            <el-radio-button label="#eac35e">nana</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="onReset(ruleFormRef)">重置表单</el-button>
        <el-button @click="state.dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click=submit(ruleFormRef)>Confirm</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
import LoadEnd from "../components/LoadEnd.vue";
import LoadingCustom from "../components/Loading.vue";
import {
  getScrollTop,
  getDocumentHeight,
  getWindowHeight,
  timestampToTime,
} from "../utils/utils";

import { Params, TimelineList} from "../types/index";
import request from '../utils/request';
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from 'element-plus'
export default defineComponent({
  name: "Timeline",
  components: {
    LoadEnd,
    LoadingCustom,
  },
  setup() {
    const state = reactive({
      dialogVisible: false,
      isLoadEnd: false,
      isLoading: false,
      list: [] as TimelineList[],
      total: 0,
      timeStamp: "",
      params: {
        pageNum: 1,
        pageSize: 10,
      } as Params,
    });
    const formSize = ref('default')
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      id:"",
      title: "",
      content: "",
      date:"",
      color:"",
      size:""
    })
    const rules = reactive<FormRules>({
      title: [
        { required: true, message: "请输入标题", trigger: "blur" },
      ],
      content: [
        { required: true, message: "请输入内容", trigger: "blur" },
      ],
      date: [
        { required: true, message: "请选择时间", trigger: "blur" },
      ],
      color: [
        { required: true, message: "请选择颜色", trigger: "blur" },
      ],

    });

    const formatTime = (value: string | Date): string => {
      return timestampToTime(value, true);
    };
    //
    // const handleSearch = async (): Promise<void> => {
    //   state.isLoading = true;
    //   const data: TimelinesData = await axios.create().get(`http://localhost:8080/timeline`, {
    //     params: state.params,
    //   });
    //   state.isLoading = false;
    //   console.log(data);
    //   state.list = [...state.list,...data.list];
    //   state.total = data.count;
    //   console.log(state);
    //   state.params.pageNum++;
    //   if (state.total === state.list.length) {
    //     state.isLoadEnd = true;
    //   }
    // };
    const getData = () =>{
      if(state.timeStamp == null)
        state.timeStamp = "";
      request({
        url: `https://奚黎曼.我爱你/api/timeline/page`, // json文件地址
        method: 'get',
        params:{
          pageSize: state.params.pageSize,
          pageNum: state.params.pageNum,
          timeStamp: state.timeStamp,
        }
      }).then((res)=>{
        console.log(res)
        state.total=res.records.length;
        state.list=res.records;
      })
    };
    const submit = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate((valid) => {
        if (valid) {
          request.post(
              'https://奚黎曼.我爱你/api/timeline/update',
              {
                id: state.total+1,
                title: ruleForm.title,
                content: ruleForm.content,
                timestamp: ruleForm.date,
                color: ruleForm.color,
                size: ruleForm.size
              }).then(res => {
            console.log(res);
          })
          console.log(ruleForm);
          ElMessage.success("提交成功！");
          state.dialogVisible=false;
          onReset(formEl);
        }else {
          return false;
        }
      })
    }

    const onReset = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.resetFields()
    }
    onMounted(() => {
      getData();
      window.onscroll = () => {
        if (getScrollTop() + getWindowHeight() > getDocumentHeight() - 100) {
          // 如果不是已经没有数据了，都可以继续滚动加载
          if (state.isLoadEnd === false && state.isLoading === false) {
            getData();
          }
        }
      };
    });

    const resetTime = () =>{
      state.timeStamp = "";
      getData();
    }
    const create = () =>{
      resetTime()
      state.dialogVisible= true;
    }
    return {
      state,
      formSize,
      ruleFormRef,
      rules,
      ruleForm,
      resetTime,
      onReset,
      formatTime,
      getData,
      submit,
      create,
    };
  }
});
</script>
<style lang="less" scoped>
.timeline {
  padding: 40px 0;
  .year {
    font-size: 34px;
    font-weight: bold;
    color: #000;
  }
  a {
    text-decoration: none;
  }

  .title {
    color: #333;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>

