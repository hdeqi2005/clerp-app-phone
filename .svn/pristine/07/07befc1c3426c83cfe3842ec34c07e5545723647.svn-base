<template>
	<div id="app">
		<headerview :title='pageTitle' :showRightbtn="false"></headerview>
		<van-tabs v-model="active">
			<van-tab title="成品入库">
				<div>
					<van-cell-group>
						<scannerField label="工单号:" v-model="boxIn.formItem.bi_WorkNo" @onBlur="boxInGetOrderInfo"></scannerField>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="班别:" v-model="boxIn.formItem.bi_Group" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="数量:" v-model="boxIn.formItem.bi_InQty" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="客户名:" v-model="boxIn.formItem.ct_Desc" label-align="right" :disabled="true" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="产品名:" v-model="boxIn.formItem.bi_ProdName" label-align="right" :disabled="true" />
								</van-cell-group>
							</van-col>
						</van-row>
						<van-field label="规格:" v-model="boxIn.formItem.Specs" label-align="right" :disabled="true" />
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="箱型:" v-model="boxIn.formItem.bp_CBoxID" label-align="right" :disabled="true" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸质:" v-model="boxIn.formItem.bp_PArtID" label-align="right" :disabled="true" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="楞别:" v-model="boxIn.formItem.bp_ArtLB" label-align="right" :disabled="true" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="工单数:" v-model="boxIn.formItem.bp_ProQty" label-align="right" :disabled="true" />
								</van-cell-group>
							</van-col>
						</van-row>
					</van-cell-group>
					<div style="padding:0.5rem;" v-if="this.boxIn.dataIsLoadding">
						<van-button type="primary" size="large" @click="boxInAspSaveBoxIn">入仓</van-button>
					</div>
				</div>
			</van-tab>
			<van-tab title="成品出库">
				<div>
					<van-cell-group>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="车牌:" v-model="boxOut.formItemText.bd_CarNo" label-align="right" readonly>
										<van-icon slot="button" name="plus" @click="getCarInfo()" />
									</van-field>
									<searchPicker v-model="boxOut.car.show" :columns="boxOut.car.items" @confirm="carConfirm"></searchPicker>
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="跟车员:" v-model="boxOut.formItemText.bd_Follower" label-align="right">
										<van-icon slot="button" name="plus" @click="getFollowerInfo" />
									</van-field>
									<searchPicker v-model="boxOut.follower.show" :columns="boxOut.follower.items" @confirm="followerConfirm"></searchPicker>
								</van-cell-group>
							</van-col>
						</van-row>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="装车员:" v-model="boxOut.formItemText.bd_Loador" label-align="right">
										<van-icon slot="button" name="plus" @click="getLoaderInfo()" />
									</van-field>
									<searchPicker v-model="boxOut.loader.show" :columns="boxOut.loader.items" @confirm="loaderConfirm"></searchPicker>
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="发货员:" v-model="boxOut.formItemText.bd_SenderID" label-align="right">
										<van-icon slot="button" name="plus" @click="getSenderInfo()" />
									</van-field>
									<searchPicker v-model="boxOut.sender.show" :columns="boxOut.sender.items" @confirm="senderConfirm"></searchPicker>
								</van-cell-group>
							</van-col>
						</van-row>
						
						<scannerField label="订单号:" v-model="boxOut.formItem.bi_OrderNo"></scannerField>
						
						<van-field label="数量:" type="number" v-model="boxOut.formItem.bi_OrderQty" label-align="right" >
							<van-button type="primary" slot="button" size="small" @click="boxOutGetOrderInfo">查找</van-button>
						</van-field>
						
					</van-cell-group>
					
					<v-table :title-row-height="24" :row-height="20" title-bg-color="#3296fae0" id="dt_deliveryquery" ref="dt_deliveryquery"
					 is-vertical-resize style="width:100%;" is-horizontal-resize :columns="boxOut.tableColumns" :table-data="boxOut.tableData"
					 :show-vertical-border="true" even-bg-color="#f4f4f4" row-hover-color="#eee" row-click-color="#edf7ff"/>
					
					<div style="padding:0.5rem;">
						<van-button type="primary" size="large" @click="aspSaveBoxOutTemp">出库</van-button>
					</div>
				</div>
			</van-tab>
			<van-tab title="半成品入库">
				<div>
					<van-cell-group>
						<scannerField label="工单号:" v-model="boxInc.formItem.hp_bi_WorkNo" @onBlur="boxIncGetOrderInfo" @scannerSuccess="boxIncGetOrderInfo"></scannerField>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="工序:" v-model="boxInc.formItem.hp_wpl_Id" label-align="right">
									</van-field>
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="机台:" v-model="boxInc.formItem.hp_mo_ID" label-align="right">
									</van-field>
								</van-cell-group>
							</van-col>
						</van-row>
						
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="班别:" v-model="boxInc.formItem.hp_tt_Code" label-align="right">
									</van-field>
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="数量:" ref="boxInc_qty" v-model="boxInc.formItem.Qty" label-align="right">
									</van-field>
								</van-cell-group>
							</van-col>
						</van-row>
						
						<van-field label="备注:" v-model="boxInc.formItem.Remark" label-align="right">
						</van-field>
						
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="客户名:" v-model="boxInc.formItem.ct_Desc" label-align="right" :disabled="true">
									</van-field>
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="产品名:" v-model="boxInc.formItem.bi_ProdName" label-align="right" :disabled="true">
									</van-field>
								</van-cell-group>
							</van-col>
						</van-row>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="规格:" v-model="boxInc.formItem.Specs" label-align="right" :disabled="true">
									</van-field>
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="工单数:" v-model="boxInc.formItem.bp_ProQty" label-align="right" :disabled="true">
									</van-field>
								</van-cell-group>
							</van-col>
						</van-row>
					</van-cell-group>
					
					<div style="padding:0.5rem;" v-if="boxInc.dataIsLoadding">
						<van-button type="primary" size="large" @click="aspSaveBoxHalfProdIn">入库</van-button>
					</div>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import baseMixin from '@/mixins'
	import {
		mapActions
	} from 'vuex'
	import {
		scannerField,
		searchPicker
	} from '_c/warehouse'
	export default {
		name: 'CompFactoryReport',
		mixins: [baseMixin],
		components: {
			scannerField,
			searchPicker
		},
		data() {
			return {
				pageTitle:'纸箱出入库',
				active: 0,
				boxIn: {
					formItem: {
						bi_WorkNo: '',
						bi_Group: '',
						bi_InQty: '',
						ct_Desc: '',
						bi_ProdName: '',
						Specs: '',
						bp_CBoxID: '',
						bp_PArtID: '',
						bp_ArtLB: '',
						bp_ProQty: ''
					},
					formItemInit: {
						bi_WorkNo: '',
						bi_Group: '',
						bi_InQty: '',
						ct_Desc: '',
						bi_ProdName: '',
						Specs: '',
						bp_CBoxID: '',
						bp_PArtID: '',
						bp_ArtLB: '',
						bp_ProQty: ''
					},
					dataIsLoadding: false
				},
				boxOut: {
					formItem: {
						bd_CarNo: '',
						bd_Follower: '',
						bd_Loador: '',
						bd_SenderID: '',
						bi_OrderNo: '',
						bi_OrderQty: ''
					},
					formItemText: {
						bd_CarNo: '',
						bd_Follower: '',
						bd_Loador: '',
						bd_SenderID: ''
					},
					formItemInit:{
						bd_CarNo: '',
						bd_Follower: '',
						bd_Loador: '',
						bd_SenderID: '',
						bi_OrderNo: '',
						bi_OrderQty: ''
					},
					car: {
						items: [],
						show: false
					},
					follower: {
						items: [],
						show: false
					},
					loader: {
						items: [],
						show: false
					},
					sender: {
						items: [],
						show: false
					},tableColumns:[
						{
							field: 'bc_No',
							title: '订单号',
							width: 80,
							isResize:true
						},{
							field: 'ct_Desc',
							title: '客户名称',
							width: 80,
							isResize:true
						},{
							field: 'bi_ProdName',
							title: '产品名称',
							width: 80,
							isResize:true
						},{
							field: 'bi_OrderQty',
							title: '数量',
							width: 80,
							isResize:true
						},{
							field: 'Specs',
							title: '规格',
							width: 80,
							isResize:true
						}
					],
					tableData:[]
				},boxInc:{
					formItem:{
						hp_wpl_Id:'',
						hp_mo_ID:'',
						hp_tt_Code:'',
						hp_bi_WorkNo:'',
						Qty:'',
						Remark:'',
						ct_Desc:'',
						bi_ProdName:'',
						Specs:'',
						bp_ProQty:''
					},
					formItemInit:{
						hp_wpl_Id:'',
						hp_mo_ID:'',
						hp_tt_Code:'',
						hp_bi_WorkNo:'',
						Qty:'',
						Remark:'',
						ct_Desc:'',
						bi_ProdName:'',
						Specs:'',
						bp_ProQty:''
					},
					dataIsLoadding:false
				}
			}
		},
		created() {},
		methods: {
			...mapActions(['boxScanOrderAction', 'aspSaveBoxInAction', 'findUserAction', 'findCarAction','aspSaveBoxOutTempAction','aspSaveBoxHalfProdInAction']),
			boxInGetOrderInfo() {
				if (this.boxIn.formItem.bi_WorkNo == '') {
					this.$toast('请输入或扫描工单号');
					return;
				}
				let data = {
					bi_WorkNo: this.boxIn.formItem.bi_WorkNo,
					Flag: 0
				}
				this.boxIn.dataIsLoadding = false;
				this.boxScanOrderAction(data).then(res => {
					if (res.list && res.list.length > 0) {
						Object.assign(this.boxIn.formItem, res.list[0]);
						this.boxIn.dataIsLoadding = true;
						return;
					}
					this.$toast('没有该工单对应的数据');
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				})
			},
			boxInAspSaveBoxIn() {
				if (this.boxIn.formItem.bi_WorkNo == '') {
					this.$toast('请输入或扫描工单号');
					return;
				}
				if (this.boxIn.formItem.bi_Group == '') {
					this.$toast('请输入班别');
					return;
				}
				if (this.boxIn.formItem.bi_InQty == '') {
					this.$toast('请输入数量');
					return;
				}
				let data = {
					bi_WorkNo: this.boxIn.formItem.bi_WorkNo,
					bi_Group: this.boxIn.formItem.bi_Group,
					bi_InQty: this.boxIn.formItem.bi_InQty
				}
				this.aspSaveBoxInAction(data).then(res => {
					if (res.list.length > 0) {
						if (res.list[0].ErrorStr && res.list[0].ErrorStr != '') {
							this.$dialog.alert({
								title: '提示',
								message: res.list[0].ErrorStr
							});
							return;
						}
						this.$dialog.alert({
							title: '提示',
							message: '入库成功'
						});
						this.boxIn.formItem = JSON.parse(JSON.stringify(this.boxIn.formItemInit));
						return;
					}
					this.$dialog.alert({
						title: '提示',
						message: '入库失败'
					});
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				})
			},
			boxOutGetBaseInfo(params) {
				return new Promise((resolve, reject) => {
					this.findUserAction(params).then(res => {
						resolve(res);
					}).catch(err => {
						this.$toast('获取数据失败:' + err);
						reject(err);
					})
				});
			},
			getCarInfo() {
				if (this.boxOut.car.items.length > 0) {
					this.boxOut.car.show = true;
					return;
				}
				this.findCarAction().then(res => {
					this.boxOut.car.items = res.list;
					this.boxOut.car.show = true;
				}).catch(err => {
					this.$toast('获取数据失败:' + err);
				})
			},
			carConfirm(item) {
				this.boxOut.formItem.bd_CarNo = item.value;
				this.boxOut.formItemText.bd_CarNo = item.text;
				this.boxOut.car.show = false;
			},
			getFollowerInfo() {
				if (this.boxOut.follower.items.length > 0) {
					this.boxOut.follower.show = true;
					return;
				}
				this.boxOutGetBaseInfo({
					workType: '5,18'
				}).then(res => {
					this.boxOut.follower.items = res.list;
					this.boxOut.follower.show = true;
				});
			},
			followerConfirm(item) {
				this.boxOut.formItem.bd_Follower = item.value;
				this.boxOut.formItemText.bd_Follower = item.text;
				this.boxOut.follower.show = false;
			},
			getLoaderInfo() {
				if (this.boxOut.loader.items.length > 0) {
					this.boxOut.loader.show = true;
					return;
				}
				this.boxOutGetBaseInfo({
					workType: '6,18'
				}).then(res => {
					this.boxOut.loader.items = res.list;
					this.boxOut.loader.show = true;
				});
			},
			loaderConfirm(item) {
				this.boxOut.formItem.bd_Loador = item.value;
				this.boxOut.formItemText.bd_Loador = item.text;
				this.boxOut.loader.show = false;
			},
			getSenderInfo() {
				if (this.boxOut.sender.items.length > 0) {
					this.boxOut.sender.show = true;
					return;
				}
				this.boxOutGetBaseInfo({
					workType: '2,18'
				}).then(res => {
					this.boxOut.sender.items = res.list;
					this.boxOut.sender.show = true;
				});
			},
			senderConfirm(item) {
				this.boxOut.formItem.bd_SenderID = item.value;
				this.boxOut.formItemText.bd_SenderID = item.text;
				this.boxOut.sender.show = false;
			},boxOutGetOrderInfo(){
				if(this.boxOut.formItem.bi_OrderNo == ''){
					return;
				}
				if(this.boxOut.formItem.bi_OrderQty == ''){
					this.$toast('请输入数量');
					return;
				}
				for(let i =0;i<this.boxOut.tableData.length ;i++){
					let item = this.boxOut.tableData[i];
					if(item.bc_No == this.boxOut.formItem.bi_OrderNo){
						this.boxOut.formItem.bi_OrderNo = '';
						this.$toast('订单已存在');
						return;
					}
				}
				let data = {
					bc_No:this.boxOut.formItem.bi_OrderNo,
					Flag:1
				}
				this.boxScanOrderAction(data).then(res => {
					if (res.list && res.list.length > 0) {
						let temp = res.list[0];
						temp.bi_OrderQty = this.boxOut.formItem.bi_OrderQty ;
						this.boxOut.tableData = [...this.boxOut.tableData,temp];
						return;
					}
					this.$toast('没有该订单号对应的数据');
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				})
			},aspSaveBoxOutTemp(){
				let noAry = [];
				let numAry = [];
				this.boxOut.tableData.forEach((item,index)=>{
					noAry.push(item.bc_No);
					numAry.push(item.bi_OrderQty);
				});
				if(noAry.length == 0 || numAry == 0 || noAry.length != numAry.length){
					this.$toast('数据不能为空,提交数据不完整');
					return;
				}
				let data = {
					 bd_CarNo : this.boxOut.formItem.bd_CarNo,
                     bd_Follower: this.boxOut.formItem.bd_Follower,
                     bd_Loador: this.boxOut.formItem.bd_Loador,
                     bd_SenderID: this.boxOut.formItem.bd_SenderID,
                     OrderQtyStr:numAry.toString(),
                     NoStr: noAry.toString()
				}
				this.aspSaveBoxOutTempAction(data).then(res => {
					if (res.list.length > 0) {
						if (res.list[0].ErrorStr && res.list[0].ErrorStr != '') {
							this.$dialog.alert({
								title: '提示',
								message: res.list[0].ErrorStr
							});
							return;
						}
						this.$dialog.alert({
							title: '提示',
							message: '出仓成功'
						});
						this.boxOut.formItem = JSON.parse(JSON.stringify(this.boxOut.formItemInit));
						this.boxOut.tableData = [];
						return;
					}
					this.$dialog.alert({
						title: '提示',
						message: '出仓失败'
					});
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				})
				
			},boxIncGetOrderInfo() {
				if (this.boxInc.formItem.hp_bi_WorkNo == '') {
					this.$toast('请输入或扫描工单号');
					return;
				}
				let data = {
					bi_WorkNo: this.boxInc.formItem.hp_bi_WorkNo,
					Flag: 0
				}
				this.boxInc.dataIsLoadding = false;
				this.boxScanOrderAction(data).then(res => {
					if (res.list && res.list.length > 0) {
						Object.assign(this.boxInc.formItem, res.list[0]);
						this.boxInc.dataIsLoadding = true;
						return;
					}
					this.$toast('没有该工单对应的数据');
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				})
			},aspSaveBoxHalfProdIn(){
				if(this.boxInc.formItem.hp_bi_WorkNo == ''){
					
				}
				if(this.boxInc.formItem.Qty == ''){
					this.$toast('请输入数量');
					this.$refs.boxInc_qty.focus();
					return;
				}
				let data = {
					hp_bi_WorkNo : this.boxInc.formItem.hp_bi_WorkNo,
				   hp_wpl_Id : this.boxInc.formItem.hp_wpl_Id,
				   hp_mo_ID : this.boxInc.formItem.hp_mo_ID,
				   hp_tt_Code : this.boxInc.formItem.hp_tt_Code,
				   Qty : this.boxInc.formItem.Qty,
				   Remark : this.boxInc.formItem.Remark
				}
				
				this.aspSaveBoxHalfProdInAction(data).then(res => {
					if (res.list.length > 0) {
						if (res.list[0].ErrorStr && res.list[0].ErrorStr != '') {
							this.$dialog.alert({
								title: '提示',
								message: res.list[0].ErrorStr
							});
							return;
						}
						this.$dialog.alert({
							title: '提示',
							message: '入仓成功'
						});
						this.boxInc.formItem = JSON.parse(JSON.stringify(this.boxInc.formItemInit));
						return;
					}
					this.$dialog.alert({
						title: '提示',
						message: '入仓失败'
					});
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				})
			}
		},
		filters: {}
	}
</script>

<style lang="less">
	// .van-field__label {
	// 	width: 13vw;
	// }
</style>
