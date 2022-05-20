import note1 from "./2.微机接口指令.md"
import note2 from "./3.端口地址译码技术.md"
import note3 from "./4.中断控制技术(8259A).md"
import note4 from "./5.计数器和定时电路（8254A）.md"
import note5 from "./6. DMA技术（8237A）.md"
import note6 from "./7.并行通信及其接口电路（8255A）.md"
import note7 from "./8.串行接口（8251A）.md"
import note8 from "./4.中断控制技术(8259A)习题.md"
import note9 from "./5.计数器和定时电路（8254A）习题.md"
import note10 from "./6.DMA技术（8237A）习题.md"
import note11 from "./7.并行通信及其接口电路（8255A）习题.md"
import note12 from "./8.串行接口（8251A）习题.md"
import note13 from "./4.中断控制题目(8259A)选择题.md"
import note14 from "./考试范围.md"
import note15 from "./1.8086习题.md"
import note16 from "./9.数模和模数转换.md"
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
    },
    note5:{
        name: note5
    },
    note6:{
        name: note6
    },
    note7:{
        name: note7
    },
    note8:{
        name: note8
    },
    note9:{
        name: note9
    },
    note10:{
        name: note10
    },
    note11:{
        name: note11
    },
    note12:{
        name: note12
    },
    note13:{
        name: note13
    },
    note14:{
        name: note14
    },
    note15:{
        name: note15
    },
    note16:{
        name: note16
    }
};
// 注册全部md组件
export const mdArticle2 = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].name);
    });
};
