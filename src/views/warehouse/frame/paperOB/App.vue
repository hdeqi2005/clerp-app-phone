<template>
	<div id="app">
		<headerview title='原纸出退仓' :showRightbtn="false"></headerview>
		<van-tabs v-model="active">
			<van-tab title="出仓">
				<div>
					<van-cell-group>
						<scannerField label="指令:" v-model="paperOutFormItems.instruct" @onBlur="paperOutInstructBlur" @scannerSuccess="paperOutInstructBlur"></scannerField>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="线别:" v-model="paperOutFormItems.line" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="班别:" v-model="paperOutFormItems.group" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="发料:" v-model="paperOutFormItems.outUser" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="领料:" v-model="paperOutFormItems.inUser" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<scannerField label="卷号:" v-model="paperOutFormItems.coil" @onBlur="getOutPaperInfo" @scannerSuccess="getOutPaperInfo"></scannerField>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸类:" :disabled="true" v-model="paperOutFormItems.paperType" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="克重:" :disabled="true" v-model="paperOutFormItems.gram" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸度:" :disabled="true" v-model="paperOutFormItems.paperWidth" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="重量:" :disabled="true" v-model="paperOutFormItems.ewt"
									 label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="24">
								<van-field label="备注:" v-model="paperOutFormItems.desc" label-align="right" />
							</van-col>
						</van-row>

					</van-cell-group>
					<div style="padding:0.5rem;" v-if="paperOutBtnShow">
						<van-button type="primary" size="large" @click="paperOut">出仓</van-button>
					</div>
				</div>
			</van-tab>
			<van-tab title="退仓">
				<div>
					<van-cell-group>
						<scannerField label="指令:" v-model="paperBackFormItems.instruct" @onBlur="paperBackInstructBlur()"  @scannerSuccess="paperBackInstructBlur"></scannerField>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="线别:" v-model="paperBackFormItems.line" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="班别:" v-model="paperBackFormItems.group" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="发料:" v-model="paperBackFormItems.outUser" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="领料:" v-model="paperBackFormItems.inUser" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>
						<scannerField label="卷号:" v-model="paperBackFormItems.coil" @onBlur="getBackPaperInfo()" @scannerSuccess="getBackPaperInfo"></scannerField>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸类:" :disabled="true" v-model="paperBackFormItems.paperType" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="克重:" :disabled="true" v-model="paperBackFormItems.gram" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸度:" :disabled="true" v-model="paperBackFormItems.paperWidth" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="重量:" v-model="paperBackFormItems.ewt" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="24">
								<van-field label="备注:" v-model="paperBackFormItems.desc" label-align="right" />
							</van-col>
						</van-row>

					</van-cell-group>
					<div style="padding:0.5rem;" v-if="paperBackBtnShow">
						<van-button type="primary" size="large" @click="paperBack">退仓</van-button>
					</div>
				</div>
			</van-tab>
			<van-tab title="存库查询">
				<div>
					<van-cell-group>
						<van-field label="制造商:" v-model="paperStoreItem.Vend" label-align="right" />
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸类:" v-model="paperStoreItem.Type" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="仓位:" v-model="paperStoreItem.Station" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>
						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="纸度:" v-model="paperStoreItem.Width" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="克重:" v-model="paperStoreItem.Gram" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>
						<van-field label="卷号:" v-model="paperStoreItem.Coil" label-align="right" clearable>
							<van-button slot="button" type="primary" size="small" @click="paperStoreSearch">查询</van-button>
						</van-field>
						
						<v-table :title-row-height="20" :row-height="20" title-bg-color="#3296fae0" id="dt_deliveryquery" ref="dt_deliveryquery"
						 is-vertical-resize style="width:100%;" is-horizontal-resize :columns="paperStoreColumns" :table-data="paperStoreTableData"
						 :show-vertical-border="true" even-bg-color="#f4f4f4" row-hover-color="#eee" row-click-color="#edf7ff">
						</v-table>
					</van-cell-group>

					</v-table>
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
	import scannerField from '_c/warehouse'
	export default {
		name: 'CompFactoryReport',
		mixins: [baseMixin],
		components: {
			scannerField
		},
		data() {
			return {
				errorContent: '加载失败...',
				active: 0,
				paperOutFormItems: {
					instruct: '', //指令
					line: '', //线别
					group: '', //班别
					outUser: '', //发料
					inUser: '', //领料,
					coil: '', //卷号
					paperType: '暂无', //纸类
					gram: '0', //克重
					paperWidth: '暂无', //纸度
					ewt: '', //重量
					desc: '' //备注
				},
				paperBackFormItems: {
					instruct: '', //指令
					line: '', //线别
					group: '', //班别
					outUser: '', //发料
					inUser: '', //领料,
					coil: '', //卷号
					paperType: '暂无', //纸类
					gram: '0', //克重
					paperWidth: '暂无', //纸度
					ewt: '', //重量
					desc: '' //备注
				},
				paperOutFormInit: {
					instruct: '', //指令
					line: '', //线别
					group: '', //班别
					outUser: '', //发料
					inUser: '', //领料,
					coil: '', //卷号
					paperType: '暂无', //纸类
					gram: '0', //克重
					paperWidth: '暂无', //纸度
					ewt: '', //重量
					desc: '', //备注
				},
				paperStoreItem: {
					Vend: '', //工单号
					Type: '',
					Station: '',
					Width: '',
					Gram: '',
					Coil: ''
				},
				paperStoreColumns:[{
					field: 'ss_Station',
					title: '仓位',
					width: 40,
					isResize:true
				},{
					field: 'v_desc',
					title: '制造商',
					width: 50,
					isResize:true
				},{
					field: 'ss_SPaperType',
					title: '纸类',
					width: 40,
					isResize:true
				},{
					field: 'ss_Width',
					title: '纸宽',
					width: 40,
					isResize:true
				},{
					field: 'ss_Gram',
					title: '克重',
					width: 40,
					isResize:true
				},{
					field: 'ss_Ewt',
					title: '重量',
					width: 40,
					isResize:true
				},{
					field: 'ss_Coil',
					title: '卷号',
					width: 80,
					isResize:true
				}],
				paperStoreTableData:[],
				operStatus: '',
				paperOutBtnShow: false,
				paperBackBtnShow:false
			}
		},
		watch: {
			operStatus(n, o) {

			}
		},
		created() {},
		methods: {
			...mapActions(['spGetSPaperStoreForPDAAction', 'aspExeuteSPaperSimpleAutoScanAction','spSPaperStoreQueryForPDAAction']),
			getOutPaperInfo() {
				this.paperOutBtnShow = false;
				this.getPaperInfo(this.paperOutFormItems.coil).then(res => {
					if(res.length > 0){
						let paperInfo = res[0];
						this.paperOutFormItems.paperType = paperInfo.ss_SPaperType;
						this.paperOutFormItems.gram = paperInfo.ss_Gram;
						this.paperOutFormItems.paperWidth = paperInfo.ss_Width;
						this.paperOutFormItems.ewt = paperInfo.ss_Ewt;
						this.operStatus = paperInfo.LastState;
						this.paperOutBtnShow = true;
						if (paperInfo.LastState == 'O') { //当前退仓
							this.$nextTick(() => {
								this.$refs.ewt_input.focus;
							});
						}
						return;
					}
					this.paperOutFormItems.coil = '';
				});
			},getBackPaperInfo() {
				this.paperBackBtnShow = false;
				this.getPaperInfo(this.paperBackFormItems.coil).then(res => {
					if(res.length > 0){
						let paperInfo = res[0];
						this.paperBackFormItems.paperType = paperInfo.ss_SPaperType;
						this.paperBackFormItems.gram = paperInfo.ss_Gram;
						this.paperBackFormItems.paperWidth = paperInfo.ss_Width;
						this.paperBackFormItems.ewt = paperInfo.ss_Ewt;
						this.paperBackBtnShow = true;
						/* this.$nextTick(() => {
							this.$refs.ewt_input.focus;
						}); */
						return;
					}
					this.paperBackFormItems.coil = '';
				});
			},
			getPaperInfo(coil) {
				if (coil == '') {
					return;
				}
				let data = {
					Coil: coil,
					Flag: 0
				};
				let _self = this;
				return new Promise((resolve, reject) => {
					this.spGetSPaperStoreForPDAAction(data).then(res => {
						res = res.list;
						if(res.length == 0){
							this.$dialog.alert({
								title: '提示',
								message: '当前卷号不存在',
							});
						}
						resolve(res);
					}).catch(err => {
						this.errorContent = '暂无数据';
						this.$toast('获取数据失败:' + err);
					});
				});
			},
			getInstruct(value) {
				if (value == '') {
					this.$toast('请输入或扫描指令');
					return;
				}
				let instruct = value.split('+');
				if (instruct.length < 5) {
					this.$toast('数据解析失败，参数个数不够');
					return;
				}
				let data = {
					line:instruct[1],
					group:instruct[2],
					inUser:instruct[4],
					outUser:instruct[3]
				}
				return data;
			},paperOutInstructBlur(value){
				let data = this.getInstruct(this.paperOutFormItems.instruct);
				if(data){
					Object.assign(this.paperOutFormItems,data);
					this.paperOutFormItems.instruct = '';
				}
			},paperBackInstructBlur(value){
				let data = this.getInstruct(this.paperBackFormItems.instruct);
				if(data){
					Object.assign(this.paperBackFormItems,data);
					this.paperBackFormItems.instruct = '';
				}
			},
			paperOBRequest(data,text) {
				this.$toast.loading({
					mask: true,
					message: '提交中...'
				});
				return new Promise((resolve, reject) => {
					this.aspExeuteSPaperSimpleAutoScanAction(data).then(res => {
						this.$toast.clear();
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
								message: text + '成功'
							});
							resolve(res);
							return;
						}
						this.$dialog.alert({
							title: '提示',
							message: text + '失败'
						});
					}).catch(err => {
						this.errorContent = '暂无数据';
						this.$toast('获取数据失败:' + err);
						this.$toast.clear();
						reject();
					})
				})
			},
			findGoods() {

			},
			paperOut() {
				if (this.paperOutFormItems.coil == '') {
					this.$toast('请输入或扫描卷号');
					return;
				}
				let data = {
					Line: this.paperOutFormItems.line,
					Group: this.paperOutFormItems.group,
					Oper: 'admin',
					Flag: 'out',
					Coil: this.paperOutFormItems.coil,
					OutUseID: this.paperOutFormItems.outUser,
					InUseID: this.paperOutFormItems.inUser,
					Wt: this.paperOutFormItems.ewt,
					OperDate_IN_date: new Date().format('yyyy-MM-dd hh:mm:ss'),
					ErrorStr_OUT_varchar: ''
				}
				this.paperOBRequest(data,'出仓').then(res => {
					this.paperOutFormItems = JSON.parse(JSON.stringify(this.paperOutFormInit));
					this.paperOutBtnShow = false;
				})
			},
			paperBack() {
				if (this.paperBackFormItems.coil == '') {
					this.$toast('请输入或扫描卷号');
					return;
				}
				let data = {
					Line: this.paperBackFormItems.line,
					Group: this.paperBackFormItems.group,
					Oper: 'admin',
					Flag: 'back',
					Coil: this.paperBackFormItems.coil,
					OutUseID: this.paperBackFormItems.outUser,
					InUseID: this.paperBackFormItems.inUser,
					Wt: this.paperBackFormItems.ewt,
					OperDate_IN_date: new Date().format('yyyy-MM-dd hh:mm:ss'),
					ErrorStr_OUT_varchar: ''
				}
				this.paperOBRequest(data,'退仓').then(res => {
					this.paperBackFormItems = JSON.parse(JSON.stringify(this.paperOutFormInit));
					this.paperBackBtnShow = false;
				});
			},paperStoreSearch(){
				this.$toast.loading({
					mask: true,
					message: '搜索中...'
				});
				this.spSPaperStoreQueryForPDAAction(this.paperStoreItem).then(res => {
					this.$toast.clear();
					res = res.list;
					this.paperStoreTableData = res;
				}).catch(err => {
					this.$toast.clear();
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				});
			}
		},
		filters: {}
	}
</script>

<style lang="less">
	.van-field__label {
		width: 13vw;
	}
	.van-button--small {
		height: 6vw;
		line-height: 6.467vw;
	}
</style>
