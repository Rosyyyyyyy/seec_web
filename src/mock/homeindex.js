let Mock = require('mockjs')
let dayjs = require('dayjs')
// aa 拦截
let arr = [{
	date: '2022-05-02',
	name: '贺沈阳',
	address: '上海市普陀区金沙江路 1518 弄'
}, {
	date: '2022-05-04',
	name: '王八蛋',
	address: '上海市普陀区金沙江路 1517 弄'
}, {
	date: '2022-05-01',
	name: '姚德浩',
	address: '上海市普陀区金沙江路 1519 弄'
}, {
	date: '2022-05-03',
	name: '不要脸',
	address: '上海市普陀区金沙江路 1516 弄'
}]
 // 数据请求
Mock.mock('/api/all', 'get', (options) => {
	console.log(options) //{url:"/api/aa",type:'get',body:null}
	return {
		status:200,
		message:'success',
		tabledata:arr
	}
})
// 增加数据
Mock.mock('/api/add', 'post', (options) => {
	console.log('31', options)
	let body = JSON.parse(options.body)
	console.log(body)
	body.date = dayjs(new Date(body.date)).format('YYYY-MM-DD')
	arr.push(body)
	return {
		status: 200,
		message: "success",
		data: arr
	}
})
// 删除
// '/api/delete?index=0'
Mock.mock(/\/api\/delete\?index=\d/, 'delete', (options) => {
	console.log('ab第十行', options)
	let url = options.url
	let index = url.split('=')[1]
	console.log(index)
	let newArr = arr.splice(index,1)
	console.log(arr) // 删除后的数据
	return {
		status: 200,
		message: "删除成功",
		data: arr
	}
})
// 修改
Mock.mock('/api/updata', 'put', (options) => {
	console.log('55', options)
	let body = JSON.parse(options.body)
	console.log(body)
	let {date,name,address,index} = body
	arr[index].date = date
	arr[index].name = name
	arr[index].address = address
	return {
		status: 200,
		message: "success",
		data: arr
	}
})