import note1 from "./2.微机接口指令.md"
import note2 from "./3.端口地址译码技术.md"
import note3 from "./4.中断控制技术(8259A).md"
import note4 from "./5.计数器和定时电路（8254A）.md"
// md文件批量引入

// 创建md组件同时设置文章其他信息，单独导出使用
export const components = {
    note1: {
        name: note1,  //与url绑定且与import绑定
    },
    note2: {
        name: note2,  //与url绑定且与import绑定
    },
    note3: {
        name: note3,  //与url绑定且与import绑定
    },
    note4:{
        name: note4
    }
};
// 注册全部md组件
export const mdArticle2 = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].name);
    });
};
