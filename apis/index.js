// 请求方法管理

//请求的方法
import base from './base' //引入配置文件
import ajax from './http' //引入封装的方法
/*
    以下封装的函数一定要有return值！！

*/
const api = {
	/*
		获取商品
    */
	getGoods() {
		return ajax.get(base.goods)
	},
	/*
	首页
   */
	getIndex() {
		return ajax.get(base.index)
	}
}

export default api
