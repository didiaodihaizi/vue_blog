const requireArticle = require.context('./', true, /[a-z0-9]+\.json$/i, 'lazy')
const keys = requireArticle.keys()
let list = []

for (let i = 0; i < keys.length; i++) {
    requireArticle(keys[i]).then(res => {
        const type = keys[i].match(/\/(\S*)\//)[1]
        res.type = type
        for (let a = 0; a < list.length; a++) {
            if (compareTime(res, list[a])) {
                const index = list.indexOf(list[a])
                const arr = list.splice(index)
                list.push(res).contact(arr)
                break
            }
        }
        if (list.length === 0) {
            list.push(res)
        }
    })
}

function compareTime (a, b) {
    return new Date(a.create_time) > new Date(b.create_time)
}

export default list