<template>
    <div class="slider">
        <div class="bg"></div>
        <div class="slider-container">
            <img class="avator" src="~@/assets/images/avator.jpg" alt="">
            <p class="name">低调di孩子</p>
            <p class="intro-item desc">性别男，爱好吃</p>
            <p class="intro-item desc">我也知道界面丑，但我不会设计啊</p>
            <p class="intro-item qq">qq: 709497553</p>
            <ul class="theme-list">
                <li class="theme-item" v-for="item in themeList" :key="item.id">
                    <a @click="filterArticle(item.type)">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            themeList: [
                { id: 1, name: '性能优化', type: 'performance' },
                { id: 2, name: 'webpack', type: 'webpack' }
            ]
        }
    },
    methods: {
        filterArticle (type) {
            this.$router.push(`/type/${type}`)
        }
    }
}
</script>

<style lang="less" scoped>
.slider {
    text-align: center;
    position: relative;
    height: 100%;
    background: url(~@/assets/images/left-slider.jpeg) no-repeat center center;
    background-size: cover;
}
.bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    opacity: 0.7;
    // z-index: -1;
}
.slider-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 100%;
    a {
        color: #fff;
        &:hover {
            color: #fff;
            background: #258fb8;
            border-radius: 2px;
            padding: 3px;
            margin: 2px;
        }
    }
    .name {
        margin: 0.67em 0;
        font-size: 30px;
    }
    .desc {
        font-size: 14px;
    }
}
.avator {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.theme-list {
    line-height: 30px;
    margin-top: 20px;
}
.theme-item {
    cursor: pointer;
}
.intro-item  {
    margin-bottom: 5px;
}
</style>