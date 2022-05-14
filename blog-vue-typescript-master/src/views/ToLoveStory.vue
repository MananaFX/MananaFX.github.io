<template>
  <div class="toLoveStory left">
    <el-container >
      <el-header>
        <el-row :gutter="24" justify="center">
          <div class="top-title">
            <span>等待，会开出最美的花</span>
          </div>
        </el-row>
        <el-row :gutter="24" justify="center">
          <el-col :span="24">
            <Countdown deadline="2023-01-21 00:00:00" :timeElapsed="itsTime"/>
          </el-col>
        </el-row>
        <el-row :gutter="24" justify="center">
        <el-button-group>
          <el-button type="success" round
                     @click="openGift()">打开礼物
          </el-button>
          <el-button type="primary" round
                     @click="haveaLook()">加速三秒
          </el-button>
        </el-button-group>
      </el-row>
      </el-header>
      <el-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import {Countdown} from 'vue3-flip-countdown'
import {ref} from "vue"
import { ElMessage } from "element-plus";

export default {
  name: "toLoveStory",
  components:{
    Countdown,
  },
  setup(){
    const centerDialogVisible = ref(false);
    const openGift= () => {
      ElMessage.error('不可以哦，时间还没到！');
    }
    const itsTime = () =>{

    }
    const back = () =>{
      router.push({
        name: "Home",
      })
    }
    const haveaLook = () =>{
      ElMessage.success('加速中...')
    }
    return{
      centerDialogVisible,
      openGift,
      itsTime,
      back,
      haveaLook,
    }
  }
}
</script>

<style scoped>
.top-title {
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>