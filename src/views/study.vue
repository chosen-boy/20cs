<script setup>
import {onMounted, reactive, ref} from "vue";
import  gets from "@/API/getcontent"
let content=ref('')
const show = ref(false);
let check=reactive({
  img:''
})
onMounted(()=>{



})
function  onSubmit(){

  let content1=content.value
  show.value = true;

  gets.getcontent(content1).then(res=>{
      if(res.code===1){
        check.img=res.data.qrCodeUrl
        console.log(res)
        document.getElementById('listshow').style.display = 'block';
      }


  }).finally(function () {

    // 总是会执行

  });

}

</script>
<template>
  <div class="about">


    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="content"
            name="content"
            label="内容："
            placeholder="请输入你想存放的内容"
            :rules="[{ required: true, message: '请输入你想存放的内容' }]"
        />

      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>

      </div>



    </van-form>
    <div id="listshow" >
      <van-popup v-model:show="show" :style="{ padding: '44px' }">
        <van-image
            width="300"
            height="225"
            :src="check.img"
        >

        </van-image>

      </van-popup>


    </div>

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
#listshow{
  display: none;
}
</style>
