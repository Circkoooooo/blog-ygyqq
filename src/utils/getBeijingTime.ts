import axios from 'axios'

export default () => {
	return axios('http://quan.suning.com/getSysTime.do').then(res => {
		console.log(res.data.sysTime2)
	})
}
