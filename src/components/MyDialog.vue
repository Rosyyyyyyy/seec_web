<template>
	<div>
		<!-- 表单 -->
		<el-dialog title="修改" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="日期" :label-width="formLabelWidth">
					<el-date-picker v-model="form.date" type="date">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="姓名" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="form.address" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancelFn">取 消</el-button>
				<el-button type="primary" @click="confirmFn">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		name:'myDialog',
		props:[
			'form',
			'dialogFormVisible',
			'formLabelWidth'
		],
		methods:{
			cancelFn(){
				this.$emit('mycancel')
			},
			confirmFn(){
				this.$emit('confirmFn_my')
				// confirmFn_my 事件名 click mousedown
			}
		}
	}
</script>

<style>
</style>