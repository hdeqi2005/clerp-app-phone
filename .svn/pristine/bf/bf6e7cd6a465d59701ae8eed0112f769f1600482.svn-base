<template>
	<van-popup v-model="show"  position="bottom">
		<van-picker
		  show-toolbar
		  :columns="defaultColumns"
		  @cancel="show=false"
		  @confirm="confirm"
		>
			<div slot="title">
				<van-field
				v-model="searchContent"
				clearable
				right-icon="search"
				placeholder="请输入搜索内容"
				@click-right-icon="dataSearch"
				@change="dataSearch"
				/>
			</div>
		</van-picker>
	</van-popup>
</template>

<script>
	
	export default{
		name:'searchPicker',
		data(){
			return{
				show:this.value,
				defaultColumns:[],
				searchContent:''
			}
		},created(){
			this.defaultColumns = JSON.parse(JSON.stringify(this.columns));
		},watch:{
			value(n,o){
				this.show = n;
			},
			show(n,o){
				this.$emit('input',n);
			},columns:{
				handler(n,o){
					this.defaultColumns = n;
				},
				deep:true
			}
		},props:{
			value:{
				type:Boolean,
				default:false
			},
			columns:{
				type:Array,
				default:[]
			},
			search:{
				type:Boolean,
				default:true
			}
		},methods:{
			dataSearch(){
				let temp = [];
				this.columns.forEach((item,index)=>{
					if(item.text.indexOf(this.searchContent) != -1 || item.value.indexOf(this.searchContent) != -1){
						temp.push(item);
					}
				});
				this.defaultColumns  = temp;
			},confirm(item){
				this.$emit('confirm',item);
			}
		}
	}
	
</script>

<style>
</style>
