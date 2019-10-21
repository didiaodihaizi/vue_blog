<template>
    <div class="article ql-editor">
        <div class="content">
            <div v-html="article.content"></div>
        </div>
        
    </div>
</template>

<script>
import allArticle from '@/article/data'
export default {
    data () {
        return {
            allArticle,
            article: {}
        }
    },
    mounted () {
        const { id, type } = this.$route.params
        this.allArticle.forEach(async item => {
            const res = await item
            if (item.type === type && res.default.id == id) {
                this.article = res.default
            }
        })
    }
}
</script>

<style lang="less">
.article {
    background: rgb(63, 63, 63);
    .content {
        box-shadow: 4px 4px 18px rgba(0,0,0,0.46);
        padding: 30px;
        color: #fff;
    }
}
</style>