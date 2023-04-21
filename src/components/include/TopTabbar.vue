

<script setup >
import ConstData from "@/config/ConstData.json"
import {computed, onUpdated, ref} from "vue";
import router from "@/router";
const  props=defineProps(['tittle'])
const  localtittle=ref('home')
const  emits=defineEmits(['changetittle'])

function onClickLeft(){
   console.log("点击回到首页")
  localtittle.value='home'
  router.push("/")
  emits('changetittle','home')
}
onUpdated(()=>{
  console.log("更新")
  localtittle.value=props.tittle
})
const isnothome=computed(()=>{
  return !(props.tittle=='home')
})


</script>
<template>

  <van-nav-bar
      :title="ConstData.TopTabbar[localtittle]"
      :left-text="isnothome?'返回':''"
      :left-arrow="isnothome"
      @click-left="onClickLeft"
  />



</template>

<style scoped>
 component{
   color: #181818;
 }
</style>