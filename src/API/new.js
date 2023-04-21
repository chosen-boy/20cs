import service from "../../util/request";
const baseurl="http://t.pasp.cn/newsapp/webservices/"
// const baseurl1="http://t.pasp.cn/newsapp/webservices/"
export function  getFocusList(){
    return service({
        url:baseurl+"getFocusList/?type=json",
        method:"get"

    })
}
export function getTopicList(){
    return service({
        url:baseurl+"getTopicList/?type=json",
        method:"get"

    })
}
export function getArticleContents(id){
    return service({
        url:baseurl+"getArticleContents/?type=json&id="+id,
        method:"get"

    })
}
export  default {
    getFocusList:(...arg)=>getFocusList(...arg),
    getTopicList:(...arg)=>getTopicList(...arg),
    getArticleContents:(...arg)=>getArticleContents(...arg)
}
