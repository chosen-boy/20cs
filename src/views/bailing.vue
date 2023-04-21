<script  setup>
import {onMounted, reactive, ref} from "vue";

import router from "@/router";
import newsapi from "@/API/new"

let   constdata=reactive({
  "images" :[

  ],
  "newsdatalist":[]


})
let loading=ref(false)
const  error=ref(false)



function   onLoad(){

}
onMounted(()=>{

  GetData()
  Getimage()

})
function  GetData(){
    loading.value=true
  newsapi.getTopicList().then(res=>{
      constdata.newsdatalist=res.data
  }).finally(function () {
          // 总是会执行
          loading.value=false
        });

}
function  Getimage(){
  loading.value=true

  newsapi.getFocusList().then(res=>{
      constdata.images=res.data

  })
}
function getNewsDetails(obj){
  //
  router.push(
      {
        path:'newdetail',
        query:{
          id:obj.id
        }
      }
  )
}

</script>

<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item,index) in constdata.images " :key="index" >
      <van-image
         width="400"
         height="225"
          :src="item.thumb"></van-image>
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
        <van-image :src="item.thumb"  style="width: 100px;height: 70px"></van-image>
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
