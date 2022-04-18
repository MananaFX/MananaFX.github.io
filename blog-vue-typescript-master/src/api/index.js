import request from '../utils/request';; // 引入封装的axios实例
// 获取本地json数据
export const getJsonDataApi = () => {
    return request({
        url: `/static/list.json`, // json文件地址
        method: 'get',
    });
};

