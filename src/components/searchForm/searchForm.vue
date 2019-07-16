<template>
    <div class="container">
           <van-row  class="body">
                    <van-cell :border="false" title="查询" >
                        <template slot="title">
                              <van-cell-group>
                                  <van-field
                                    v-model="loginForm.startDate"
                                    required
                                    clearable
                                    label="起始日期"
                                    right-icon="question-o"
                                    placeholder="请起始日期"
                                    @click-right-icon="$toast('请起始日期')"
                                  >
                                  <template slot="left-icon">
                                    <van-icon color="#3296fa" name="contact" />
                                  </template>
                                  </van-field>

                                  <van-field
                                    v-model="loginForm.endDate"
                                    label="结束日期"
                                    placeholder="请输入结束日期"
                                    required
                                    right-icon="question-o"
                                   @click-right-icon="$toast('请起始日期')"
                                  >
                                  <template slot="left-icon">
                                    <van-icon color="#3296fa" name="lock" />
                                  </template>
                                  </van-field>
                                </van-cell-group>
                        </template>
                    </van-cell>
                   
                    <van-cell :center="true"  :border="false" title="确认" >
                        <template slot="title">
                          <van-button size="large" hairline round type="info">确 认</van-button>
                        </template>
                   </van-cell>
            </van-row>
    </div>
</template>