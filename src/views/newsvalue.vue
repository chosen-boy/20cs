<script setup>


import  newsapi from "@/API/news"

import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import TopTabbar from "@/components/include/TopTabbar.vue";
import ConstData from "@/config/ConstData.json";


const route=useRoute();
let  news=route.query.id
let temp=reactive({data:{}})



onMounted(()=>{
  newsapi.getArticleContents(news).then(res=>{
            temp.data=res.data
           console.log(temp.data)
     document.querySelector('.content').innerHTML=temp.data.content


  }).finally(function () {
    // 总是会执行



  });
})

</script>
<template>

  <div class="about">

     <h2 style="text-align: center ;color: black;font-size: 22px">{{temp.data.title}} </h2>
     <h5 style="font-size: 15px;text-align: right"> 发布时间:{{temp.data.ptime}} </h5>

<!--    <van-image-->
<!--        width="400"-->
<!--        height="225"-->
<!--        :src="temp.data.images">-->

<!--      </van-image>-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in temp.data.images " :key="index" >
              <van-image
                      width="400"
                      height="225"
                      :src="item.imgSrc"></van-image>
          </van-swipe-item>

      </van-swipe>
<!--      <div v-for="(item,index) in temp.data.images " :key="index" >-->
<!--          <van-image-->
<!--                  width="400"-->
<!--                  height="225"-->
<!--                  :src="item.imgSrc"></van-image>-->

<!--      </div>-->

    <div style="color:#0077aa;font-size: 25px;" class="content van-hairline--surround"> </div>

  </div>










</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
