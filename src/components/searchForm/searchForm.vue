<template>
    <div class="container">
           <van-row  class="body">
                    <van-cell :border="false" title="查询" >
                        <template slot="title">
                              <van-cell-group>
                                  <van-field
                                    v-model="searchForm.startDate"
                                    required
                                    clearable
                                    label="起始日期"
                                    @focus="handlefocus('start')"
                                    placeholder="请输入起始日期"
                                    @click-right-icon="$toast('请输入起始日期')"
                                  >
                                  <template slot="right-icon">
                                    <van-icon color="#3296fa" name="calender-o" />
                                  </template>
                                  </van-field>

                                  <van-field
                                    v-model="searchForm.endDate"
                                     @focus="handlefocus('end')"
                                    label="结束日期"
                                    placeholder="请输入结束日期"
                                    required
                                   @click-right-icon="$toast('请输入结束日期')"
                                  >
                                  <template slot="right-icon">
                                    <van-icon color="#3296fa" name="calender-o" />
                                  </template>
                                  </van-field>
                                </van-cell-group>
                        </template>
                    </van-cell>
                   <van-popup
                    v-model="showGetContainer"
                    get-container="body"
                    :style="{ width:'60%',padding: '30px 50px' }"
                  >
                    <van-datetime-picker
                      v-model="currentDate"
                      type="date"
                      :min-date="minDate"
                      :max-date="maxDate"
                      :formatter="formatter"
                      @confirm="handleConfirm"
                      @cancel="handleCancel"
                    />
                  </van-popup>
                    <van-cell :center="true"  :border="false" title="确认" >
                        <template slot="title">
                          <van-button size="large" hairline round type="info">确 认</van-button>
                        </template>
                   </van-cell>
            </van-row>
    </div>
</template>

<script>
export default {
  name:'searchForm',
  data(){
    return {
      showGetContainer:false,
      isSelectedEndDate:false,
      currentDate: new Date(),
      searchForm:{
        startDate:'',
        endDate:''
      },
      minDate: new Date(2017, 0, 1),
      maxDate: new Date(),
    }
  },
  methods:{
     //格式化 起始/结束 选择日期格式
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    handlefocus(type){
       document.activeElement.blur();//屏蔽默认键盘弹出；
       this.isSelectedEndDate=true
      if(type=='start'){
          this.isSelectedEndDate=false
      }
      this.showGetContainer=true
    },
      //确认日期
    handleConfirm(value) {
      //debugger
      let currentYear = value.getFullYear();
      let currentMonth = value.getMonth();
      let currentDay = value.getDate();
      if (Number(currentMonth) + 1 < 10) {
        currentMonth = "0" + (Number(currentMonth) + 1);
      } else {
        currentMonth = Number(currentMonth) + 1;
      }
      let tempDate = currentYear + "-" + currentMonth + "-" + currentDay;
      if (this.isSelectedEndDate) {
        this.searchForm.endDate = tempDate;
      } else {
        this.searchForm.startDate = tempDate;
      }
      this.showGetContainer = false;
    },
    //取消日期
    handleCancel() {
      this.showGetContainer = false;
    },
  }
}
</script>