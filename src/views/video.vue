<script setup>

import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import {showNotify} from "vant";


let city=ref();
const  constdata=reactive({
  "getcitydata":{
    "pubdate":'',
    "pubtime":'',
    "weather":[{
      "date":'',
      "info": {
        "dawn":'',
        "day":'',
        "night":''
      }
    }

    ]

  },
  "citylist":[]

});
onMounted(()=>{
  const url1='https://www.mxnzp.com/api/address/list?app_id=itsgutqaliw3ibrt&app_secret=Y3hKU3ZZK1FXOWJYMyt6SjgrZTY2dz09'
  axios.get(url1).then(response=> {

    // 处理成功情况
    console.log("获取数据成功")
    let citydata=response.data.data

    let citydata2=[]
    for(let i in citydata){
         // citydata2.push(citydata[i].name.substring(-1))
         if(citydata[i].name.slice(-1)==='省'){
           citydata2.push(citydata[i].pchilds)

         }
         else {
           constdata.citylist.push(citydata[i].name)
         }

    }


    for(let i=0;i<citydata2.length;i++){
      // console.log(citydata2[i][0].name)
       for (let j=0;j<citydata2[i].length;j++){

         constdata.citylist.push(citydata2[i][j].name)
 }


    }







  })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .finally(function () {
        // 总是会执行

      });

})
function citynamejudge(city){
   var flag=0
  for (let i in constdata.citylist)
  {
    if(constdata.citylist[i].includes(city))

       flag=1

  }
  return flag
}
function onSubmit(){
   let  city1=city.value
  if(citynamejudge(city1)){
    const  url='https://widget.cifuwu.com/weather?city='+city1

    axios.get(url).then(response=> {

      // 处理成功情况

      document.getElementById('listshow').style.display = 'block';

      const citydata=response.data.data
      constdata.getcitydata.pubdate=citydata.pubdate
      constdata.getcitydata.pubtime=citydata.pubtime
      constdata.getcitydata.weather=citydata.weather



    })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .finally(function () {
          // 总是会执行

        });


  }
  else {
    showNotify({
      type: 'warning',
      message: '输入城市名错误',
      duration: 1000,
      color:'#ad0000',
      background: 0o00,
       position:'top'

    });
    document.getElementById('listshow').style.display = 'none';
  }


}

</script>
<template>

  <!-- 可以使用 CellGroup 作为容器 -->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="city"
          name="city"
          label="城市："
          placeholder="请输入一个城市名如‘南昌‘"
          :rules="[{ required: true, message: '请输入一个城市名' }]"
      />

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>

    </div>



  </van-form>
  <van-list  id="listshow">
    发布日期：<span id="pubdate">{{constdata.getcitydata.pubdate}} </span><br>
    发布时间：<span id="pubtime">{{constdata.getcitydata.pubtime}}</span><br>
    <van-cell v-for="item in constdata.getcitydata.weather" :key="item"  >
      <van-divider class="text">时间:{{item.date}}</van-divider>
      <van-divider class="text">凌晨:{{item.info.dawn[1]}}</van-divider>
      <van-divider class="text">白天:{{item.info.day[1]}}</van-divider>
      <van-divider class="text" >晚上:{{item.info.night[1]}}</van-divider>
    </van-cell>

  </van-list>


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.text{
  font-size: 18px;
  color: #55a532;
}
#pubdate ,#pubtime{
  font-size: 25px;
  color: #b3d4fc;
  text-align: right;
}
#listshow{display:none }

</style>
