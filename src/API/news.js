import service from "../../util/request";

export function  getFocusList(){
    return service({
        url:'https://www.mxnzp.com/api/news/list?typeId=518&page=2&app_id=itsgutqaliw3ibrt&app_secret=Y3hKU3ZZK1FXOWJYMyt6SjgrZTY2dz09',
        method:"get"

    })
}

export function getArticleContents(id){
    return service({
        url:'https://www.mxnzp.com/api/news/details?newsId='+id+'&app_id=itsgutqaliw3ibrt&app_secret=Y3hKU3ZZK1FXOWJYMyt6SjgrZTY2dz09',
        method:"get"

    })
}
export  default {
    getFocusList:(...arg)=>getFocusList(...arg),

    getArticleContents:(...arg)=>getArticleContents(...arg)
}
