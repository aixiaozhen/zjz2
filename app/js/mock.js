// 引入mockjs
const Mock = require("mockjs")
// 获取 mock.Random 对象
const Random = Mock.Random

const articleData = function() {
    const article = {
        title: Random.ctitle(10, 25),
        content: Random.cparagraph(5),
    }
    return article
}

// Mock.mock( url, post/get , 返回的数据)
Mock.mock("/news/index", "get", articleData)
