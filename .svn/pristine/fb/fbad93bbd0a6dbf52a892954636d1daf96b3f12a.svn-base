<template>
    <div>
          <van-icon color="#3296fa" name="calender-o" />
          <van-button type="default" @click="addNumOne">默认按钮</van-button>
            <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
            </van-cell-group>
            <van-icon name="close" />
             <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
             <van-image
                width="100"
                height="100"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-row>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                </van-row>

                <!-- <van-button type="primary" @click="showPopup">
  展示弹出层
</van-button> -->

<!-- <van-popup v-model="show">内容</van-popup> -->
    </div>
</template>

<script>
export default {
  props:{
      color:{
          type:String,
          default:''
      }
  },
  data() {
    return {
      count:0,
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    addNumOne(){
        this.count++
    }

  }
};
</script>