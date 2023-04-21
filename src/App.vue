<script setup>
import { RouterLink, RouterView } from 'vue-router'

import FootTabbar from "@/components/include/footTabbar.vue";
import TopTabbar from "@/components/include/TopTabbar.vue";
import {ref} from "vue";
import ConstData from "@/config/ConstData.json"
const tabbarconfig=ConstData[" tabbarconfig"]
defineProps({
  messige:String
})
const currentpage=ref("home")

function  changecurrentpage(e){
  currentpage.value=e
}
</script>

<template>


<top-tabbar  :tittle="currentpage"  @changetittle="changecurrentpage" ></top-tabbar>

  <router-view  />

<foot-tabbar  :tabbarconfig="tabbarconfig" @tabchange="changecurrentpage"></foot-tabbar>
</template>

<style scoped>



@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
