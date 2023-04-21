<script  setup>
import {onMounted, reactive, ref} from "vue";

import router from "@/router";
import newsapi from "@/API/news"

let   constdata=reactive({

    "newsdatalist":[],
    "imaglist":[]


})
let loading=ref(false)
const  error=ref(false)



function   onLoad(){

}
onMounted(()=>{

    GetData()


})
function  GetData(){
    loading.value=true
    newsapi.getFocusList().then(res=>{
       //onsole.log(res)
        constdata.newsdatalist=res.data
        constdata.newsdatalist.forEach(item=>{

            constdata.imaglist.push(item.imgList[0])

        })
       // console.log((constdata.imaglist))

    }).finally(function () {
        // 总是会执行
        loading.value=false
    });

}

function getNewsDetails(obj){
    //
    router.push(
        {
            path:'newsvalue',
            query:{
                id:obj.newsId
            }
        }
    )
}

</script>

<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in constdata.imaglist " :key="index" >
            <van-image
                    width="400"
                    height="225"
                    :src="item"></van-image>
        </van-swipe-item>

    </van-swipe>
    <van-list
            v-model:loading="loading"
            v-model:error="error"
            error-text="请求失败，点击重新加载"
            @load="onLoad"
    >
        <van-cell v-for="item in constdata.newsdatalist" :key="item" :title="item.title"  @click="getNewsDetails(item)">
            <template #icon>
                <van-image :src="item.imgList[0]"  style="width: 100px;height: 70px"></van-image>
            </template>
        </van-cell>
    </van-list>

</template>

<style>
@media (min-width: 1024px) {

}

/*.my-swipe ,van-swipe-item {*/
/*  color: #fff;*/
/*  font-size: 20px;*/
/*  line-height: 150px;*/
/*  text-align: center;*/
/*  background-color: #39a9ed;*/
/*}*/
</style>
