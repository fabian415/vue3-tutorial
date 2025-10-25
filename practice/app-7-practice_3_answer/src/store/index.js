import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('user')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {
    async login({ commit }, { username, password }) {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 模擬延遲
      if (username === 'cuteuser' && password === '1234') {
        commit('setUser', { username, token: 'mock-token-abc' })
        return true
      } else {
        return false
      }
    }
  }
})

export default store
