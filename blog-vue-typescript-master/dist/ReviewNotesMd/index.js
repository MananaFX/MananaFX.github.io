import note1 from "./3.端口地址译码技术.md"
// md文件批量引入

// 创建md组件同时设置文章其他信息，单独导出使用
export const components = {
    note1: {
        name: note1,  //与url绑定且与import绑定
    }
};
// 注册全部md组件
export const mdArticle2 = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].name);
    });
};
