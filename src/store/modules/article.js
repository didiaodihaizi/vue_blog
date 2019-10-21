
const state = {
    articleList: []
}

const actions = {
    updateAllArticle ({ commit }, list) {
        commit('SET_ARTICLE_LIST', list)
    }
}

const mutations = {
    SET_ARTICLE_LIST (state, list) {
        state.articleList = list
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}