<template>

  <van-form @submit="geturl">
    <van-cell-group inset>
      <van-field
          v-model="url"
          id="itemvalue"
          name="url"
          label="视频链接："
          @click="clearitem"
          placeholder="请输入B站视频链接"
          :rules="[{ required: true, message: '请输入B站视频链接' }]"
      />

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>

    </div>



  </van-form>

  <div id="listshow">
      <div>
          <h4 >{{data.title}}</h4>
          <video controls autoplay
                 ref="myVideo"
                 width="400"
                 height="225"
                 :poster="data.image"
                 :src="data.src1">
          </video>
<!--         <button @click="dawnload(data.src1,('test_video'+Date.now()))">点击下载</button>-->
          <van-button  style="margin-left: 150px" type="primary" @click="dawnload(data.src1,('test_video'+Date.now()))" >下载</van-button>

      </div>

  </div>
</template>

<script setup>
import bilibili from "@/API/geibilibilivideos"
import {nextTick, onMounted} from 'vue'
import {reactive, ref} from "vue";
import {showNotify} from "vant";
const myVideo = ref(null);
let url=ref('')
let data=reactive({
    image:'',
    src1:'',
    title:''

})
function clearitem(){
   url.value=''
}
function dawnload(url,name){
    fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const a = document.createElement("a");
            const objectUrl = window.URL.createObjectURL(blob);
            a.download = name;
            a.href = objectUrl;
            a.click();
            window.URL.revokeObjectURL(objectUrl);
            a.remove();
        })
}


function stringToBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

  function geturl(){
  let a_url=url.value

      let index=a_url.indexOf('?')
     a_url=a_url.slice(0,index)
      a_url=stringToBase64(a_url)




   bilibili.geturl1(a_url)
        .then(res=>{

            if(res.code===1){
                console.log(res)
                document.getElementById('listshow').style.display = 'block';
                data.image=res.data.cover
                data.src1=res.data.list[0].url
                console.log(data.src1)
                data.title=res.data.title
                nextTick(res => {
                    myVideo.value.play();

                })



            }
            else {
                showNotify({
                    type: 'warning',
                    message: '输入链接名错误',
                    duration: 1000,
                    color:'#ad0000',
                    background: 0o00,
                    position:'top'

                });
                document.getElementById('listshow').style.display = 'none';
            }


    }).finally(function () {
      // 总是会执行

    });

  }

onMounted(()=>{


})
</script>

<style >
@media (min-width: 1024px) {

}
h4{
    font-family: PingFang SC,HarmonyOS_Medium,Helvetica Neue,Microsoft YaHei,sans-serif;
    font-weight: 500;
    padding-bottom: 0px;

}
</style>