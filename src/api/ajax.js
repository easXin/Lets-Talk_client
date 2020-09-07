// return a promise
import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  if (type === 'GET') {

    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    // data=val&data=val&
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  // domain.com?aaa=bbb&ccc=ddd
    return axios.get(url)
  } else {

    return axios.post(url, data)
  }
}
