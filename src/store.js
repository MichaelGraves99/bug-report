import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/MSG'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    notes: [],
    actNote: {},
    actBug: {}
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setNotes(state, data) {
      state.notes = data
    },
    setActNote(state, data) {
      state.actNote = data
    },
    setActBug(state, data) {
      state.actBug = data
    }
  },
  actions: {
    getBugs({ commit, dispatch }) {
      _api.get('bugs')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getBug({ commit, dispatch }, payload) {
      _api.get('bugs/' + (payload._id || payload))
        .then(res => {
          commit('setActBug', res.data.results)
        })
    },
    getNote({ commit, dispatch }, payload) {
      _api.get('bugs/' + payload.bug + '/notes/' + payload._id)
        .then(res => {
          commit('setActNote', res.data.results)
        })
    },
    getNotes({ commit, dispatch }, payload) {
      _api.get('bugs/' + payload + '/notes')
        .then(res => {
          commit('setNotes', res.data.results)
        })
    },
    createBug({ commit, dispatch }, payload) {
      _api.post('bugs', payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    createNote({ commit, dispatch }, payload) {
      _api.post('bugs/' + payload.bug + '/notes', payload)
        .then(res => {
          dispatch('getNotes', payload.bug)
        })
    },
    markComplete({ commit, dispatch }, payload) {
      _api.delete('bugs/' + payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    deleteNote({ commit, dispatch }, payload) {
      _api.delete('bugs/' + payload.bug + '/notes/' + payload._id)
        .then(res => {
          dispatch('getNotes', payload.bug)
        })
    }
  }
})