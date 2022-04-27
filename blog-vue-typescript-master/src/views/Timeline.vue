<template>
  <div class="timeline left">

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
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="名字">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" />
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="选一个日期吧"
                style="width: 100%"
            />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker
                v-model="form.date2"
                placeholder="选一个时间吧"
                style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="large尺寸">
          <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0"
          />
          <br />
        </el-form-item>
        <el-form-item label="颜色选择">
          <el-radio-group v-model="form.color">
            <el-radio :label="3">Option A</el-radio>
            <el-radio :label="6">Option B</el-radio>
            <el-radio :label="9">Option C</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >Confirm</el-button
        >
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
export default defineComponent({
  name: "Timeline",
  components: {
    LoadEnd,
    LoadingCustom,
  },
  setup() {
    const dialogVisible = ref(true)
    const state = reactive({
      isLoadEnd: false,
      isLoading: false,
      list: [] as TimelineList[],
      total: 0,
      params: {
        pageNum: 1,
        pageSize: 10,
      } as Params,
    });
    const form = reactive({
      title: "",
      content: "",
      date1:"",
      date2:"",
      timestamp: "",
      color: "",
      size: ""
    });

    const formatTime = (value: string | Date): string => {
      return timestampToTime(value, true);
    };
    //
    // const handleSearch = async (): Promise<void> => {
    //   state.isLoading = true;
    //   const data: TimelinesData = await axios.create().get(`/timeLineList.json`, {
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
      request({
        url: `/timeLineList.json`, // json文件地址
        method: 'get',
      }).then((res)=>{
        console.log(res)
        state.total=res.list.length;
        state.list=res.list;
      })
    };
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

    return {
      dialogVisible,
      state,
      form,
      formatTime,
      getData,
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

