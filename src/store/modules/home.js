const state = {
    articleType: ''
}

const actions = {
    changeArticleType ({ commit }, type) {
        commit('SET_ARTICLE_TYPE', type)
    }
}

const mutations = {
    SET_ARTICLE_TYPE (state, type) {
        state.articleType = type
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}