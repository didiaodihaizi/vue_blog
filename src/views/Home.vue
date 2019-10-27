<template>
    <div class="home">
        <ul class="article-list">
            <li class="article-item" v-for="item in articleList" :key="`${item.type}${item.id}`" @click="toDetail(item)">
                <div class="article-inner">
                    <h1 class="article-title">{{ item.title }}</h1>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="create-time">{{ item.create_time }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import articleList from '@/article/data'
import articleMixins from '@/mixins/articleMixins'
export default {
    mixins: [articleMixins],
    data () {
        return {
            articleList: []
        }
    },
    mounted () {
        articleList.forEach(async item => {
            const res = await item
            res.default.type = item.type
            this.articleList.push(res.default)
        })
    },
    methods: {
        toDetail (item) {
            this.$router.push(`/article/${item.type}/${item.id}`)
        }
    }
}
</script>
<style lang="less">
.home {
    background: rgb(63, 63, 63);
    width: 100%;
    min-height: 100%;
    .article-item {
        padding: 30px;
        color: #999;
        cursor: pointer;
        &:hover {
            color: #fff;
        }
    }
    .article-inner {
        box-shadow: 4px 4px 18px rgba(0,0,0,0.46);
        padding: 15px;
    }
    .article-title {
        margin-bottom: 20px;
    }
    .create-time {
        text-align: right;
        color: #fff;
        margin-top: 10px;
    }
}
</style>
