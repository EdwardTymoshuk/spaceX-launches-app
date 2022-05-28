import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.spacexdata.com/v4/',
    headers: {}
})

export const getLaunches = () => {
    return instance.get('/launches').then(res => res.data)
}
export const getRockets = () => {
    return instance.get('/rockets').then(res => res.data)
}