import request from '@/util/request'

export function fetchMsg () {
  return request({
    url: '/api/string',
    method: 'get'
  })
}

export function register (params) {
  return request({
    url: '/api/register',
    method: 'post',
    data: params
  })
}
export function login (params) {
  return request({
    url: '/api/login',
    method: 'get',
    params
  })
}
