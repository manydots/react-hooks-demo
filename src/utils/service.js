import axios from 'axios';
// 创建axios实例
const service = axios.create({
  //baseURL:'',
  timeout: 5000, // 请求的超时时间
  headers: {
    //token: '',
  },
  transformRequest: [function(data) {
    //发送请求前处理request的数据
    //console.log(data)
    return data;
  }]
})

// request拦截器
service.interceptors.request.use(
  config => {
    //console.log(config)
    //发送请求之前，要做的业务
    return config;
  },
  error => {
    // 错误处理代码
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
    return response;
  },
  error => {
    //error.response
    //console.log(error.response.status)
    return Promise.reject(error);
    //return Promise.reject(error.response.status);
  }
)

export default service;