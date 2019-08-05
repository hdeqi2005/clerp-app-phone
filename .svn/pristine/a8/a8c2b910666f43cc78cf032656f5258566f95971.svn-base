<template>
	<div id="app">
		<headerview title='纸箱出入库' :showRightbtn="false"></headerview>
		<van-tabs v-model="active">
			<van-tab title="成品入库">
				<div>
					
				</div>
			</van-tab>
			<van-tab title="成品出库">
				<div>
					
				</div>
			</van-tab>
			<van-tab title="半成品入库">
				<div>
					
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import baseMixin from '@/mixins'
	import {mapActions} from 'vuex'
	import scannerField from '_c/warehouse'
	export default {
		name: 'CompFactoryReport',
		mixins: [baseMixin],
		components: {
			scannerField
		},
		data() {
			return {
				active:0
			}
		},
		created() {},
		methods: {
			...mapActions(['spScanOrderAction']),
		},
		filters: {}
	}
</script>

<style lang="less">
	.van-field__label {
		width: 13vw;
	}
</style>
