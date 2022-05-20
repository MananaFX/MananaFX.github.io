<template>
  <div class="markdown-body">
    <!-- 文章详情页面 -->
    <div class="details">
      <!-- md文件组件 -->
      <component :is="parameter"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parameter: "", //文章对应组件名字
    };
  },
  mounted() {
    this.getParameters();
  },
  methods: {
    getParameters() {
      // 获取文章参数  点击跳转获取参数  或者 刷新页面从url中获取参数
      this.parameter =  this.$route.query.article_title;
      console.log(this.parameter);
    },
  }
};
</script>