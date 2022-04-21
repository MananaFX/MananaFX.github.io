<template>
  <div
      title="登录"
  >
    <el-form>
      <el-formItem
          label="账号"
          :label-width="state.formLabelWidth"
      >
        <el-input
            v-model="state.params.name"
            placeholder="账号"
            autocomplete="off"
        >
        </el-input>
      </el-formItem>
      <el-formItem
          label="密码"
          :label-width="state.formLabelWidth"
      >
        <el-input
            type="password"
            placeholder="密码"
            v-model="state.params.password"
            autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-button type="primary" round
                 @click="handleOk">登录
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "Login",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    handleFlag: {
      type: String,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["ok", "cancel"],
  setup(props, context) {
    const router = useRouter();
    const state = reactive({
      dialogDodel: props.visible,
      btnLoading: false,
      loading: false,
      formLabelWidth: props.isMobile ? "40px" : "60px",
      params: {
        name: "",
        password: "",
        photo: "",
        token: "1",
      }
    });
    const submit = async (): Promise<void> => {  //提交
      let data: any = "";
      state.btnLoading = true;
      window.localStorage.setItem("token", "why")
      //window.localStorage.removeItem('token')
      state.btnLoading = false;
      context.emit("ok", false);
      ElMessage({
        message: "操作成功",
        type: "success",
      });
      await router.push({
        path: "/"
      })
    };

    const handleOk = (): void => {
      const reg = new RegExp(
          "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); //正则表达式
      // if (!state.params.email) {
      //   ElMessage({
      //     message: "邮箱不能为空！",
      //     type: "warning",
      //   });
      //   return;
      // } else if (!reg.test(state.params.email)) {
      //   ElMessage({
      //     message: "请输入格式正确的邮箱！",
      //     type: "warning",
      //   });
      //   return;
      // }
      if (!state.params.password) {
        ElMessage({
          message: "密码不能为空！",
          type: "warning",
        })
        return;
      } else if (!state.params.name) {
        ElMessage({
          message: "用户名不能为空！",
          type: "warning",
        });
        return;
      }
      if(state.params.name != "MananaFX"){
        ElMessage({
          message: "用户名错误！",
          type: "warning",
        });
        return;
      }
      if(state.params.password != "121008"){
        ElMessage({
          message: "密码错误！",
          type: "warning",
        });
        return;
      }
      // if (props.handleFlag === "register") {
      //   if (!state.params.password) {
      //     ElMessage({
      //       message: "密码不能为空！",
      //       type: "warning",
      //     });
      //     return;
      //   } else if (!state.params.name) {
      //     ElMessage({
      //       message: "用户名不能为空！",
      //       type: "warning",
      //     });
      //     return;
      //   }
      //   const re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      //   if (state.params.phone && !re.test(state.params.phone)) {
      //     ElMessage({
      //       message: "请输入正确的手机号!",
      //       type: "warning",
      //     });
      //     return;
      //   }
      // }
      submit();
    }; //表单校验

    const cancel = (): boolean => {
      context.emit("cancel", false);
      return false;
    };

    watch(props, (val, oldVal) => {
      state.dialogDodel = val.visible;
    });

    return {
      router,
      state,
      handleOk,
      submit,
      cancel,
    };
  },
});

</script>

<style scoped>

</style>