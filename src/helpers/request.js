import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://note-server.hunger-valley.com'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function request (url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type,
            validateStatus(status) {
                return (status >= 200 && status < 300) || status === 400
            }
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else  {
            option.data = data
        }
        axios(option).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            }else  {
                reject(res.data)
            }
        }).catch(err=> {
            console.log('error:', err)
            reject({message: `网络异常:${err}`})
        })
    })
};
