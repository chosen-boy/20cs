import service from "../../util/request";
const baseurl="https://www.mxnzp.com/api/qrcode/create/single?content="
export function getcontent(content){
    return service({
        url:baseurl+content+"&size=500&type=0&app_id=itsgutqaliw3ibrt&app_secret=Y3hKU3ZZK1FXOWJYMyt6SjgrZTY2dz09",
        method:"get"

    })
}
export  default {
    getcontent:(...arg)=>getcontent(...arg)
}