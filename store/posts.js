import PostService from '@/services/PostService'

export const state = () => ({
  posts: [],
  post: {}
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  }
}

export const actions = {
  async fetchPosts({ commit }) {
    return PostService.get().then(response => {
      commit('SET_POSTS', response.data)
    })
  },
  async fetchPost({ commit }, id) {
    return PostService.find(id).then(response => {
      commit('SET_POST', response.data)
    })
  }
}
