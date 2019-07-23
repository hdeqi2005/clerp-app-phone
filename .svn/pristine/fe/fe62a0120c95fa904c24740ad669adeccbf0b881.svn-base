<template>
    <div>
         <van-row type="flex" justify="center">
                        <van-col span="6"><van-button @click="handleFilterData('week')" size="small" :type="currentFilterType=='week'? 'info': 'default'">周</van-button></van-col>
                        <van-col span="6"><van-button @click="handleFilterData('month')" size="small" :type="currentFilterType=='month'? 'info': 'default'">月</van-button></van-col>
                        <van-col span="6"><van-button @click="handleFilterData('season')" size="small" :type="currentFilterType=='season'? 'info': 'default'">季</van-button></van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    name:'filterBtn',
    props:{
        currentFilterType:{
            type:String,
            default:'week'
        }
    },
    data(){
        return{
            //currentFilterType:'week',
        }
    },
    methods:{
          //过滤数据BY  周 月 季
            handleFilterData(type){
                //debugger
               // this.currentFilterType = type
                this.$emit('handleFilterData',type)
            },
    }
}
</script>