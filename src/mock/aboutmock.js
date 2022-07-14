let Mock = require('mockjs')
// aa 拦截
let arr = ['1','2','3','4']
// api/aa
// Mock.mock('/api/aa','get',(options)=>{
// 	console.log(options) //{url:"/api/aa",type:'get',body:null}
// 	return arr
// })
// 正则
Mock.mock(/\/api\/acd/,'get',(options)=>{
	console.log('acd',options) //{url:"/api/aa",type:'get',body:null}
	return arr
})
Mock.mock('/api/asd','post',(options)=>{
	console.log('asd第十行',options)
	return {
		status:200,
		message:"success",
		data:arr
	}
})