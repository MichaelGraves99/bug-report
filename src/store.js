import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _api = Axios.create({
  baseURL: ' https://bcw-sandbox.herokuapp.com/api/MSG'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    comments: [],
    actBug: {},
    actComment: {}

  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setActBug(state, data) {
      state.actBug = data
    },
    setComments(state, data) {
      state.comments = data
    },
    setActComment(state, data) {
      state.actComment = data
    }
  },
  actions: {
    getBugs({ commit, dispatch }) {
      -_api.get('bugs')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getComments({ commit, dispatch }, payload) {
      -_api.get('bugs/' + payload + '/comment')
        .then(res => {
          commit('setComment', res.data.results)
        })
    },
    getBug({ commit, dispatch }, payload) {
      -_api.get('bugs/' + payload._id || payload)
        .then(res => {
          commit('setActBugs', res.data.results)
        })
    },
    getComment({ commit, dispatch }, payload) {
      -_api.get('bugs/' + payload.bug + '/comment/' + payload._id)
        .then(res => {
          commit('setActComment', res.data.results)
        })
    },
    createBug({ commit, dispatch }, payload) {
      _api.post('bugs', payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    createComment({ commit, dispatch }, payload) {
      _api.post('bugs/' + payload.bug + '/comment', payload)
        .then(res => {
          dispatch('getComments', payload.bug)
        })
    },

    markComplete({ commit, dispatch }, payload) {
      _api.delete('bugs/' + payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    deleteComment({ commit, dispatch }, payload) {
      _api.delete('bugs/' + payload.bug + '/comments/' + payload._id)
        .then(res => {
          dispatch('getComments', payload.bug)
        })
    }
  }
})
