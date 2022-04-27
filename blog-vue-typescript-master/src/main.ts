import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from "./router";
import service from "./utils/https";
import urls from "./utils/urls";
import Countdown from 'vue3-flip-countdown'
import request from "./utils/request.js";
import "github-markdown-css";
// 代码高亮
import "highlight.js/styles/github.css";
// markdown样式
import { mdArticle1 } from "/public/MananaFXMd/index";
import { mdArticle2 } from "/public/ReviewNotesMd/index";
import {
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElMessage,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElLoading,
    ElTimeline,
    ElTimelineItem,
    ElCard,
    ElTag,
    ElIcon,
    ElCollapseTransition,
    ElDatePicker,
    ElSwitch,
    ElRadio,
    ElRadioGroup,
    ElTimePicker
} from 'element-plus';

const app = createApp(App)
// app.mixin(mixin);

app.component(ElButton.name, ElButton);
app.component(ElDialog.name, ElDialog);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElDatePicker.name, ElDatePicker);
app.component(ElTimePicker.name, ElTimePicker);
app.component(ElSwitch.name,ElSwitch);
app.component(ElRadio.name,ElRadio);
app.component(ElRadioGroup.name,ElRadioGroup);
app.component(ElInput.name, ElInput);
app.component(ElMessage.name, ElMessage);
app.component(ElMenu.name, ElMenu);
app.component(ElMenuItem.name, ElMenuItem);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElDropdownMenu.name, ElDropdownMenu);
app.component(ElTimeline.name, ElTimeline);
app.component(ElTimelineItem.name, ElTimelineItem);
app.component(ElDropdownItem.name, ElDropdownItem);
app.component(ElDropdown.name, ElDropdown);
app.component(ElCard.name, ElCard);
app.component(ElTag.name, ElTag);
app.component(ElIcon.name, ElIcon);
app.component(ElCollapseTransition.name, ElCollapseTransition);

app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$loading = ElLoading.service;
// app.config.globalProperties.productionTip = false;
app.config.globalProperties.$https = service;
app.config.globalProperties.$urls = urls;
app.config.globalProperties.request = request

app.use(store, key)
app.use(router)
app.use(Countdown)
app.use(mdArticle1)
app.use(mdArticle2)
app.mount('#app');
