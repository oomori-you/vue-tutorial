import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: 'This is store message!',
        counter: 0
      }
    },
    mutations: {
      count: function(state) {
        state.counter++;
      },
      reset: function(state) {
        state.counter = 0;
      }
    }
  })
}

export default createStore
