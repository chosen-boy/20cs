<template>
  <van-tabbar v-model="active" route  @change="changetittle">
    <van-tabbar-item  v-for="(item,index) in props.tabbarconfig"
                     :name="item.name"
                     :to="item.path"
                     :class="(item.class)? item.class:item.icon"
                     :icon="(item.icon)? '':item.icon" >

      {{item.label}}</van-tabbar-item>

  </van-tabbar>
</template>

<script setup >
import {onMounted} from "vue";


const props = defineProps(['tabbarconfig'])
onMounted(()=>{

})
const  emit=defineEmits(['tabchange'])


function changetittle(e){

  emit('tabchange',e)

}
</script>

<style scoped>
iconfont:before{
  font-size: 22px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>