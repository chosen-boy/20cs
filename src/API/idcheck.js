import service from "../../util/request";
const baseurl="https://widget.cifuwu.com/idcard/"
export function  searchidcard(id){
    return service({
        url:baseurl+id,
        method:"get"

    })
}
export  default {
    searchidcard:(...arg)=>searchidcard(...arg)
}