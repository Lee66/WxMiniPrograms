import { API_HOST } from '../build/init';
console.log(API_HOST)

function http(opts) {
  wx.request({
    url:`${API_HOST}${opts.url}`,
    method: opts.method || 'GET',
    data: opts.data,
    header: opts.header || {},
    success: function (res) {
      if (res && res.statusCode === 200) {
        opts.success && opts.success(res.data)
      } else {
        opts.fail && opts.fail(res);
      }
    },
    fail: function (res) {
      opts.fail && opts.fail(res);
    },
    complete: function () {
      if (opts.complete) {
        opts.complete();
      } else {
      }
    }
  });
}
export default http
