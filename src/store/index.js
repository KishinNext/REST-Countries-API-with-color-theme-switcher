import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    filterPaises:[],
    mode: ''
  },
  mutations: {
    setCountries(state,  payload){
      state.paises = payload
    },
    setColorMode(state, payload){
      state.mode = payload
    }
  },
  actions: {
    async getCountries({commit}){
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        this.commit('setCountries', data)
      } catch (error) {
        console.log('Error catch getCountries', error)
      }
    },
    getColorMode({commit, state}, mode){
      
      if(mode=== "dark"){
        state.mode="light"
      }else{
        state.mode = 'dark'
      }
 
      commit('setColorMode', state.mode)
    }
  },
  modules: {
  },
  getters:{
    sortCountries(state){
      return state.paises.sort((a, b) =>{
        return a.population < b.population ? 1 : -1
      })

    }
  }
})
