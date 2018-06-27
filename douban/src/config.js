/*
 * @Author: jiaxinying 
 * @Date: 2018-06-22 18:07:14 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-06-22 18:28:00
 * 写入api
 */
//使用豆瓣
const BASEURL = 'https://api.douban.com/v2/book/'

const DATASET = {
  // 今日佳作
  getIndex: BASEURL + '/index/bestgoods',
  // 商品数据
  getDetail: BASEURL + 'detail'
}
