<template>
    <div ref="container">
       <headerview title='客户选择' :showRightbtn="false" :click-left="closePopup"></headerview>
         <div class="MarginTop10"></div>
         <div  id="searchBody">
             <!-- <van-cell title="客户选择">
                 <template slot="title">
                     <div> -->
                        <van-cell-group>
                            <van-cell v-for="(item,index) in dataList" :key="index" :title="item.text" @click="handleSelectedEven(item)" is-link />
                        </van-cell-group>
                         <div v-html="setSearchBodyHeigth"></div>  

                     <!-- </div>
                 </template>
             </van-cell> -->
             
         </div>
          <van-tabbar id="footerSearch">
                              <van-tabbar-item>
                                    <van-search   
                                                v-model="value"
                                                placeholder="请输入搜索关键词"
                                                show-action
                                                @focus="handleFocus()"
                                                shape="round"
                                                @clear="handleClear"
                                                @search="onSearch"
                                                >
                                                <div slot="action" @click="onSearch">搜索</div>
                                    </van-search>
                         </van-tabbar-item>
                        </van-tabbar>
    </div>
</template>

<script>
import headerview from '_c/header'
import { setTimeout } from 'timers';
export default {
    name:'indexBarSelect',
    components:{headerview},
     data() {
        return {
            container: null,
            setSearchBodyHeigth:'',
            isSearching:false,
            value:'',//待搜索值
            dataList:[],//
        }
     },
     props:{
         dataSource:{
             type:Array,
             default: () => []
         }
     },
  watch:{
      value(oldValue,newValue){
          if(newValue==''){
             this.dataList = this.dataSource
          }
      },
      dataSource(oldValue,newValue){
          this.dataList = newValue
      }
  },
  beforeUpdate(){
        //console.log('updating....')
      if(!this.isSearching && this.dataList.length != this.dataSource.length){
           this.dataList = this.dataSource
      }
  },
  updated(){
    
  },
  mounted(){
      this.container = this.$refs.container;
     this.$nextTick(()=>{
              this.marginFloatTop()
         })
  },
  methods:{
      //清除输入框，数据回填
      handleClear(){
          this.dataList = this.dataSource
      },
       marginFloatTop(){
         let _self =this
         let searchBodyHeight = (window.innerHeight || document.body.clientHeight)
         let headerH = document.getElementById('appheaderM').offsetHeight
         let footerH = document.getElementById('footerSearch').offsetHeight
         let leftHeigth = Number(searchBodyHeight - headerH-footerH) -10
          _self.setSearchBodyHeigth =`<style>#searchBody{height: ${leftHeigth}px;overflow: scroll}</style >`
  
        },
      handleFocus(){
          //console.log('handleFocus...')
        //   this.isSearching=true
        //   this.dataList=this.dataSource.slice(0,5) //slice 返回一个新的数组
      },
      onSearch(){
         this.marginFloatTop()
         let _self =this
         this.isSearching=true
         let tempList =[]
          if(this.value !='' && this.value.length >0){
             tempList = this.dataSource.filter(item=>{
             return item.text.indexOf(_self.value)!=-1
          })
          }else{
             tempList= this.dataSource
          }
         this.dataList=tempList
        //  setTimeout(()=>{
        //      this.isSearching=false
        //  },1000)
         
      },
      onCancel(){},
      closePopup(){
         this.$emit('closePopup')
      },
      //选择值 触发事件
      handleSelectedEven(item){
          //debugger
          this.$emit('handleSelectedEven',item)
      }
  }
  
}
</script>

<style>

.vanSearchInput{
    position: fixed;
    bottom: 0;
    left: 0;
}

</style>
