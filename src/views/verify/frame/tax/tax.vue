<template>
	<div id="app">
		<headerview :title='pageTitle' :showRightbtn="false"></headerview>
		<van-pull-refresh v-model="isLoading" @refresh="searchPOData">
			<van-panel v-for="(item,index) in specPriceItems" :key="index" class="purchases-panel">
				<div slot="header" class="purchases-header" @click="searchPODetail(index)">
					<div>
						{{item.co_CustName}}-￥{{item.co_SPecPrice}}
					</div>
					<div>
						<van-icon name="arrow" color="#949494" />
					</div>
				</div>
				<div>
					<div class="purchases-content">
						<span>订单编号:{{item.co_No}}</span>
						<span>客户名称:{{item.co_CustName}}</span>
					</div>
					<div class="purchases-content">
						<span>纸质:{{item.co_ArtId}}</span>
						<span>愣别:{{item.co_ArtLB}}</span>
					</div>
					<div class="purchases-content">
						<span>{{item.co_Date}}</span>
						<span style="color: red;">未审批</span>
					</div>
				</div>
			</van-panel>
		</van-pull-refresh>

		<van-popup class="bg-color-body" v-model="popupShow" position="left" :style="{ height: '100%',width:'100%'}">
			<headerview title='特价详情' :showRightbtn="false" :click-left="()=>{popupShow=false}"></headerview>
			<van-cell-group id='tax-van-cell-group'>
				<van-cell title="" />
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 订单编号: <span class="colSpanValue" v-text="detailItems.co_No"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 原　　价: <span class="colSpanValue" ></span>
							</van-col>
							<van-col span="12">
							 特　　价: <span class="colSpanValue" v-text="`￥${detailItems.co_SPecPrice}`"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
				
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 优　　惠: <span class="colSpanValue" ></span>
							</van-col>
							<van-col span="12">
							 优惠利率: <span class="colSpanValue" ></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
			
				<van-cell>	
					<template slot="title">
						<van-row>
							<van-col span="12">
							 纸　　质: <span class="colSpanValue" v-text="detailItems.co_ArtId"></span>
							</van-col>
							<van-col span="12">
							 愣　　别: <span class="colSpanValue" v-text="detailItems.co_ArtLB"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
			
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 纸　　长: <span class="colSpanValue" v-text="detailItems.co_CSize_l"></span>
							</van-col>
							<van-col span="12">
							 纸　　宽: <span class="colSpanValue" v-text="detailItems.co_CSize_w"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
				
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 数　　量: <span class="colSpanValue" v-text="detailItems.co_Qty"></span>
							</van-col>
							<van-col span="12">
							 订单日期: <span class="colSpanValue" v-text="formatData(detailItems.co_Date)"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
				
				<!-- <van-cell title="订单编号:" :value="(getOrderNo(detailItems.co_No))" />
				<van-cell title="客户名称:" :value="`${detailItems.co_CustName}`"  />
				<van-cell title="原　　价:" value="" />
				<van-cell title="特　　价:" :value="`￥${detailItems.co_SPecPrice}`" />
			    <van-cell title="优　　惠:" value="" />
				<van-cell title="优惠利率:" value="" />
				<van-cell title="纸　　质:" :value="detailItems.co_ArtId"  />
				<van-cell title="愣　　别:" :value="detailItems.co_ArtLB" />
				<van-cell title="纸　　长:" :value="detailItems.co_CSize_l"  />
				<van-cell title="纸　　宽:" :value="detailItems.co_CSize_w" />
				<van-cell title="数　　量:" :value="detailItems.co_Qty"  />
				<van-cell title="订单日期:" :value="detailItems.co_Date" /> -->
			</van-cell-group>
			<div class="purchases-detail-btn-area">
				<van-button type="info" size="large" @click="popupExplainShow=true;formItems.approveState=1">同意</van-button>
				<van-button type="default" size="large" @click="popupExplainShow=true;formItems.approveState=0">不同意</van-button>
			</div>
		</van-popup>

		<van-dialog v-model="popupExplainShow" title="审批说明" show-cancel-button @confirm="approvePaperSpecPrice()">
			<van-field v-model="formItems.approvalExplain" type="textarea" placeholder="请输入审批说明" rows="3" autosize />
		</van-dialog>
	</div>
</template>
<script>
	import baseMixin from '@/mixins'
	import {
		mapActions
	} from 'vuex'
	export default {
		name: 'CompFactoryReport',
		mixins: [baseMixin],
		components: {
			
		},
		data() {
			return {
				pageTitle:'特价审批',
				currentIndex:0,
				isLoading:false,
				popupShow: false,
				popupExplainShow: false,
				specPriceItems: [],
				kindName: '',
				singlePrice: 0,
				detailItems:{},
				formItems: {
					coId: '',
					approvalExplain: '',
					approveState: 0
				}
			}
		},
		filters:{
			 fNumberToString: function (value) {
				if (!value) return ''
				value = value.toString()
			    return 'No.'+value+''
			}
		},
		created() {
			this.searchPOData();
		},
		methods: {
			//變更訂單號，防止數據換成導致多行
			getOrderNo(_orderNo){
			  // console.log('_orderNo'+_orderNo)
			   return _orderNo+''
			},
			...mapActions(['searchSpecPriceAction', 'approvePaperSpecPriceAction']),
			searchPOData() {
				this.searchSpecPriceAction().then(res => {
					this.specPriceItems = res.data;
					this.isLoading = false;
					 if(this.specPriceItems.length==0){
						this.errorContent='暂无数据'
						}
					//console.log(res);
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
					this.isLoading = false;
				})
			},
			searchPODetail(index) {
			//	console.log('currentIndex'+this.currentIndex)
				// this.currentIndex =index
				// if(this.detailItems==null){
				// 	return
				// }
				this.detailItems = this.specPriceItems[index];
				//console.log('tax detailItems'+JSON.stringify(this.detailItems))
				this.popupShow = true;
				this.formItems.coId = this.detailItems.ID1;
				this.formItems.approvalExplain = '';
				//console.log('after copy inde'+this.currentIndex)
			},
			approvePaperSpecPrice() {
				if(this.formItems.approveState==0 && this.formItems.approvalExplain==''){
					this.$toast('请填写备注')
					return
				}
				this.approvePaperSpecPriceAction(this.formItems).then(res => {
					this.$toast('审批成功');
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('执行失败:' + err);
				});
			}
		},
		filters: {
			timeClear: function(value) {
				if (value) {
					return value.replace('00:00:00', '');
				}
				return value;
			}
		}
	}
</script>

<style lang="less">
.MarginTop10{
              margin-top:10px;
  }
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		// text-align: center;
		// color: #2c3e50;
		//background-color: #E4E4E4;
	}

	.purchases-content,
	.purchases-header {
		font-size: 12px;
		justify-content: space-between;
		display: flex;
		padding: 7px 14px;
	}

	.purchases-content span {
		color: #949494;
	}

	.purchases-panel {
		 margin-bottom: 5px;
	}

	.purchases-header {
		border-bottom: 1px dashed #E4E4E4;
		font-size: 16px;
		line-height: 18px;
		padding: 7px 14px;
	}

	.purchases-detail-btn-area {
		display: flex;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	.vanCellValue{
		text-align: left;
	}
	#tax-van-cell-group .van-cell__value {
    // position: relative;
    // overflow: hidden;
    // color: #969799;
     text-align: left; 
    // vertical-align: middle;
}
.colSpanValue{
   color: #969799;
}
</style>
