<script setup>


import  newsapi from "@/API/new"

import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";



const route=useRoute();
let  news=route.query.id
let temp=reactive({data:{}})



onMounted(()=>{
    newsapi.getTopicList(news).then(res=>{
        temp.data=res.data
        console.log(temp.data)



    }).finally(function () {
        // 总是会执行



    });
})

</script>
<template>

    <div class="about">

        <h2 style="text-align: center ;color: black;font-size: 22px">{{temp.data.title}} </h2>
        <h5 style="font-size: 15px;text-align: right"> 发布时间:{{temp.data.pubtime}} </h5>

            <van-image
                width="400"
                height="225"
                :src="temp.data.thumb">

              </van-image>

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
