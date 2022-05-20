<template>
  <div class="toLoveStory left">
    <el-container >
      <el-header>
        <el-row :gutter="24" justify="center">
          <div class="top-title">
            <span>距离22-08-04 还有</span>
          </div>
        </el-row>
        <el-row :gutter="24" justify="center">
          <el-col :span="24">
            <Countdown deadline="2022-08-04 00:00:00" :timeElapsed="itsTime"/>
          </el-col>
        </el-row>
        <el-row :gutter="24" justify="center">
        <el-button-group>
          <el-button type="success" round
                     @click="openGift()">打开礼物
          </el-button>
          <el-button type="primary" round
                     @click="haveaLook()">{{param.bottom}}
          </el-button>
        </el-button-group>
      </el-row>
      </el-header>
      <el-main>
      </el-main>
    </el-container>
    <el-dialog
        v-model="dialogVisible"
        title="小馒头"
        width="30%"
        :before-close="handleClose"
    >
      <span>接下来你将看到，nana是怎么冥思苦想完成这份520礼物的，当然这只是一部分~点击确认你将打开一段倍速录制的视频，很快就可以看完啦~我爱你！也很珍惜你，真的！</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="openWeb"
        >确认</el-button
        >
      </span>
      </template>
    </el-dialog>
    <el-dialog
        v-model="PasswordVisible"
        title="下次不要那么迫不及待点确定"
        width="30%"
        :before-close="handleClose"
    >

      <el-form>
        <el-form-item>
          <span>难道我忘记告诉你密码了吗，这太可惜了。因为我也忘记了，不过下面这几个人或许知道，你要不挑一个人问问。友情提示，选你最爱的那个人。你不会一开始就选我吧？</span>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="param.person" fill="#cf786f">
            <el-radio-button label="nana">nana</el-radio-button>
            <el-radio-button label="江涵">江涵</el-radio-button>
            <el-radio-button label="杨狗">杨狗</el-radio-button>
            <el-radio-button label="正确答案">你的宝贝nana</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="givePassword">不选了，我知道密码了</el-button>
        <el-button type="primary" @click="judge"
        >我最爱的是</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

import {Countdown} from 'vue3-flip-countdown'
import {reactive, ref} from "vue"
import { ElMessage } from "element-plus";
import { ElNotification } from 'element-plus'

export default {
  name: "toLoveStory",
  components:{
    Countdown,
  },
  setup(){
    const centerDialogVisible = ref(false);
    const dialogVisible = ref(false);
    const PasswordVisible =ref(false);
    const param = reactive({
      ifOpen : false,
      person : "",
      tips: "",
      bottom: "点击按钮，为爱加速"
    })
    const nowDate = new Date();
    const date = {
      year: nowDate.getFullYear(),
      month: nowDate.getMonth()+1,
      date: nowDate.getDate(),
      hour: nowDate.getHours(),
      minute: nowDate.getMinutes(),
    }
    const openGift= () => {
      if(date.month === 8 && date.date === 4 ){
        param.bottom = "密码呢？"
        if(param.ifOpen === false){
          itsTime();
        } else {
          PasswordVisible.value = true;
        }
      }else{
        ElMessage.error('不可以哦，时间还没到！');
      }
    }
    const itsTime = () =>{
      ElMessage.success('你好呀，曼曼！');
      dialogVisible.value = true;
    }
    const back = () =>{
      router.push({
        name: "Home",
      })
    }
    const haveaLook = () =>{
      if(param.bottom !== "点击按钮，为爱加速"){
        if(param.ifOpen === true){
          ElMessage.info('要是人生也能重来该多好')
        } else if(window.localStorage.getItem("changeWeb")){
          ElMessage.info('或许你也可以听一下那首歌？')
        }
      }else{
        ElMessage.success('加速中...')
      }

    }
    const openWeb = () =>{
      window.open("https://www.aliyundrive.com/s/4FUK1o234ni",'_blank');
      dialogVisible.value = false;
      param.ifOpen = true;
      const token = window.localStorage.getItem("changeWeb");
      if (!token) {
        window.localStorage.setItem("changeWeb", "alreadyChange")
      }else {
        window.localStorage.removeItem("changeWeb")
      }

    }
    const givePassword = () =>{
      PasswordVisible.value = false ;
    }
    const judge = () =>{
      const notice = {
        title : "Wrong!",
        message: "",
        type: "warning"
      }
      if(param.person === "nana"){
        notice.message = "恭喜你，你离正确答案进了一步！"
      }else if(param.person === "江涵"){
        notice.message = "很开心，你那么爱江涵~~~"
      }else if(param.person === "杨狗"){
        notice.message = "?????????你真会选啊，我已经自动发微信给杨狗了，我痛哭着祝福你们！呜呜呜呜"
        notice.type = "error"
      }else if(param.person === "正确答案"){
        notice.title = "就是我！"
        notice.message = "密码是：e38j ，也不知道你是不是一下选中我的，哼！看在你最爱我的份上，不和你一般见识!"
        notice.type = "success"
        param.bottom = "其他礼物在哪？";
        param.ifOpen = false;
        PasswordVisible.value = false;
      }else {
        notice.message = "给点面子！选一个吧！"
      }
      ElNotification({
        title: notice.title,
        message: notice.message,
        type: notice.type,
      })
    }
    return{
      centerDialogVisible,
      dialogVisible,
      param,
      PasswordVisible,
      nowDate,
      date,
      judge,
      givePassword,
      openGift,
      itsTime,
      back,
      haveaLook,
      openWeb,
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