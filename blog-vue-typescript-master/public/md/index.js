import article1 from "./22.2.26-22.3.4 以前的备忘录.md";
import article2 from "./22.3.5 第一天.md";
import article3 from "./22.3.6 第二天.md";
import article4 from "./22.3.7 第三天.md";
import article5 from "./22.3.8 第四天.md";
import article6 from "./22.3.9 第五天.md";
import article7 from "./22.3.10 第六天.md";
import article8 from "./22.3.14 安慰曼曼.md";
import article9 from "./22.3.19 曼曼的日记本.md";
import article10 from "./22.3.25 可怜巴巴.md";
import article11 from "./22.3.28 巴巴警官.md";
import article12 from "./22.3.29 好好休息下吧.md";
import article13 from "./22.3.30 奇怪的代码.md";
import article14 from "./22.3.30 给曼曼的回信.md";
import article15 from "./22.3.31  nana日记.md";
import article16 from "./22.4.1 小故事.md";
import article17 from "./22.4.2 nana日记.md";
import article18 from "./22.4.3 为什么喜欢你.md";
import article19 from "./22.4.10 亲爱的哼哼.md";
import article20 from "./22.4.13 谁欺负你，我就狠狠咬他一口！.md";
import article21 from "./22.4.17 你是我的冰糖雪梨.md";

// md文件批量引入

// 创建md组件同时设置文章其他信息，单独导出使用
export const components = {
    article1: {
        name: article1,  //与url绑定且与import绑定
    },
    article2: {
        name: article2,
    },
    article3: {
        name: article3,
    },
    article4: {
        name: article4,
    },
    article5: {
        name: article5,
    },
    article6: {
        name: article6,
    },
    article7: {
        name: article7,
    },
    article8: {
        name: article8,
    },
    article9: {
        name: article9,
    },
    article10: {
        name: article10,
    },
    article11: {
        name: article11,
    },
    article12: {
        name: article12,
    },
    article13: {
        name: article13,
    },
    article14: {
        name: article14,
    },
    article15: {
        name: article15,
    },
    article16: {
        name: article16,
    },
    article17: {
        name: article17,
    },
    article18: {
        name: article18,
    },
    article19: {
        name: article19,
    },
    article20: {
        name: article20,
    },
    article21: {
        name: article21,
    }
};
// 注册全部md组件
export const mdArticle = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].name);
    });
};
