/*
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import about from './modules/about'
import post from './modules/post'
import count from './modules/count'
import todos from './modules/todos';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    about,
    post,
    count,
    todos,
  },
});
*/
import { createStore } from 'vuex'
import about from './modules/about'
import post from './modules/post'
import count from './modules/count'
import lesson from './modules/lesson'

const store = createStore({
  modules: {
    about,
    post,
    count,
    lesson,
  },
})

export default store
