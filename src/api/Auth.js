import request from "@/helpers/request";

// request url
const URL = {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    getUserInfo: '/auth'
}

// import api functions
export default  {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    register({username, password}) {
        return request(URL.register, 'POST',{username, password})
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    login({username, password}) {
        return request(URL.login, 'POST', {username, password})
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    logout() {
        return request(URL.logout)
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getUserInfo () {
        return request(URL.getUserInfo)
    }
}
