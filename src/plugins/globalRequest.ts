import { message } from 'antd';
import { extend } from 'umi-request';
import { history } from 'umi';
import { stringify } from 'querystring';

/**
 * 配置 request 请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否携带cookie
  prefix: process.env.NODE_ENV === 'production' ? 'http://ucenter-back.absolutecode.art' : undefined,
  //requestType: 'form',
});

/**
 * 全局请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url = ${url}`);
  return {
    url,
    options: {
      ...options,
      headers: {},
    },
  };
});

/**
 * 全局响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();
  if (res.code === 0) {
    return res.data;
  }
  if (res.code === 40100) {
    message.error('请先登录');
    history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: location.pathname,
        }),
      });
  } else {
    message.error(res.description)
  }
  return res.data;
});

export default request;

