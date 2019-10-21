
import articlePromise from '@/article/data'

export default {
    data () {
        return {

        }
    },
    async mounted () {
        let arr = []
        await articlePromise.forEach(async item => {
            let res = await item
            res.type = item.type
            arr.push(res)
        })
        this.$store.dispatch('article/updateAllArticle', arr)
    }
}