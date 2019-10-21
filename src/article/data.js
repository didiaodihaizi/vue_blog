const requireArticle = require.context('./', true, /[a-z0-9]+\.js$/i, 'lazy')
const keys = requireArticle.keys()
let list = []
;(async () => {
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i])
        if (keys[i].indexOf('data') !== -1) {
            continue
        }
        const res = requireArticle(keys[i])
        const type = keys[i].match(/\/(\S*)\//)[1]
        res.type = type
        list.push(res)
        // for (let a = 0, len = list.length; a < len; a++) {
        //     if (compareTime(res, list[a])) {
        //         const index = list.indexOf(list[a])
        //         const arr = list.splice(index)
        //         list.push(res)
        //         list = list.concat(arr)
        //         break
        //     }
        // }
        // if (list.length === 0) {
        //     list.push(res)
        // }
    }
    // window.articles = list
})()

function compareTime (a, b) {
    return new Date(a.create_time) > new Date(b.create_time)
}

export default list