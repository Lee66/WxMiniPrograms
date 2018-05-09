import http from '../utils/http';
/**
 * 微信小程序关于我们
 */
const getAboutUsInfo = (params) => {
	params.url = `/mock/59c51d0fe0dc663341b54681/test/addressList#!method=get`;
	http(params);
};

//===============================order-center end===============================

/**
 * 导出函数
 */
export {
	getAboutUsInfo
}