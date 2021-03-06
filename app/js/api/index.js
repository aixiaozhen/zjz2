import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    transformRequest: [function(data) {
        let newData = ""
        for (const k in data) {
            if (data.hasOwnProperty(k) === true) {
                newData += `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}&`
            }
        }
        return newData
    }],
})

function apiAxios(method, url, params, response) {
    http({
        method,
        url,
        data: method === "POST" || method === "PUT" ? params : null,
        params: method === "GET" || method === "DELETE" ? params : null,
    }).then(res => {
        response(res)
    }).catch(err => {
        response(err)
    })
}

export default {
    get(url, params, response) {
        return apiAxios("GET", url, params, response)
    },
    post(url, params, response) {
        return apiAxios("POST", url, params, response)
    },
    put(url, params, response) {
        return apiAxios("PUT", url, params, response)
    },
    delete(url, params, response) {
        return apiAxios("DELETE", url, params, response)
    },
}
