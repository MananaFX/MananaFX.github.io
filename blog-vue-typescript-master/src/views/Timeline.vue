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
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
import service from "../utils/https";
import urls from "../utils/urls";
import LoadEnd from "../components/LoadEnd.vue";
import LoadingCustom from "../components/Loading.vue";
import {
  getScrollTop,
  getDocumentHeight,
  getWindowHeight,
  timestampToTime,
} from "../utils/utils";

import { Params, TimelineList, TimelinesData } from "../types/index";
import { getJsonDataApi } from "../api/index";
import request from '../utils/request';
export default defineComponent({
  name: "Timeline",
  components: {
    LoadEnd,
    LoadingCustom,
  },
  setup() {
    const state = reactive({
      isLoadEnd: false,
      isLoading: false,
      list: [] as TimelineList[],
      total: 0
    });

    const formatTime = (value: string | Date): string => {
      return timestampToTime(value, true);
    };

    // const handleSearch = async (): Promise<void> => {
    //   state.isLoading = true;
    //   const data: TimelinesData = await service.get(urls.getTimeAxisList, {
    //     params: state.params,
    //   });
    //   state.isLoading = false;
    //
    //   state.list = [...state.list, ...data.list];
    //   state.total = data.count;
    //   state.params.pageNum++;
    //   if (state.total === state.list.length) {
    //     state.isLoadEnd = true;
    //   }
    // };
    const getData = () =>{
      request({
        url: `/static/list.json`, // json文件地址
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
      state,
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

