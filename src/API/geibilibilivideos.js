import service from "../../util/request";
const baseurl="https://www.mxnzp.com/api/bilibili/video?url="
export function geturl1(url){
    return service({
        url:baseurl+url+"&app_id=itsgutqaliw3ibrt&app_secret=Y3hKU3ZZK1FXOWJYMyt6SjgrZTY2dz09",
        method:"get"
    })
}
export  default {
    geturl1:(...arg)=>geturl1(...arg)

}