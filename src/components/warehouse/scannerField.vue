<template>
	<van-field :label="label" v-model="fieldValue" label-align="right" @blur="onBlur" :clearable="clearable">
		<div slot="button">
			<van-icon size="3.733vw" name="scan" @click="scanner" />
			<slot></slot>
		</div>
	</van-field>
</template>

<script>
	import config from '@/config'
	export default {
		name:'scannerField',
		data() {
			return {
				fieldValue: this.value,
				scannerCount:0
			}
		},
		props: {
			label: {
				type: String
			},
			value: '',
			clearable: {
				type: Boolean,
				default: true
			}
		},watch:{
			fieldValue(n,o){
				this.$emit('input',n);
			},
			value(n,o){
				this.fieldValue = n;
			},scannerCount(n,o){
				this.$emit('scannerSuccess',this.fieldValue);
			}
		},
		methods: {
			onBlur() {
				this.$emit('onBlur',this.fieldValue);
			},
			scanner() {
				if (!config.isRunApp) {
					return;
				}
				let _self = this;
				let FNScanner = window.api.require('FNScanner');
				FNScanner.open({
					autorotation: true,
					isAlbum: true
				}, function(ret, err) {
					if(ret.eventType == 'success'){
						_self.fieldValue = ret.content;
						_self.scannerCount++;
					}else if(ret.eventType == 'fail'){
						_self.$toast('扫描失败');
					}
				});
			}
		}
	}
</script>

<style>
</style>
