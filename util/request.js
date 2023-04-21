import axios from "axios";

const service=axios.create({
    baseURL:'',
    timeout:60000,
    headers:{
        'Content-Type':'application/x-www-form-urlenconded'
    }
})
service.interceptors.request.use(config=>{
    return config
})
service.interceptors.response.use(response=>{
    return response.data
},error => {
    console.log("数据请求出错")
    return Promise.reject(error)
})
service.all=axios.all;
service.spread=axios.spread;
export  default  service