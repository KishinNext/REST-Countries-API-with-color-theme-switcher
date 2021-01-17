import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    filterPaises:[],
    searcher:[],
    mode: 'light',
    infocountry: {},
    border:[],
    longrow:8,
  },
  mutations: {
    setCountries(state,  payload){
      state.paises = payload
    },
    setColorMode(state, payload){
      state.mode = payload
    },
    setInfoCountry(state, payload){
      state.infocountry = payload
    },
    setFilter(state, payload){
      state.filterPaises =payload
    },
    setBorders(state, payload){
      state.border = payload
    },
    setSearcher(state, payload){
      state.searcher =payload
    },
    setLongRow(state, payload){
      state.longrow =payload
    }
  },
  actions: {

    async getBorders({commit, state}){
      const list_bordes = Object.values(state.infocountry.borders)
      const object_name = []
      for(const i in list_bordes){
        try {
          // console.log(list_bordes[i])
          const res = await fetch('../../country.json')
          const db = await res.json()
          const name = db.find(name => name.alpha3code === list_bordes[i])
          object_name.push(name.Country_name)
        } catch (error) {
          console.log(error)
        }
      }
 
      commit('setBorders', object_name)
    
    },
    async getCountries({commit, state}){
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        commit('setCountries', data)
      
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
      localStorage.setItem('mode', JSON.stringify(state.mode))
      commit('setColorMode', state.mode)
    },
    async getInfoCountry({commit}, country){

      try {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        const data = await res.json()
        const resultado =  data.find(pais => pais.name === country)
        commit('setInfoCountry', resultado)
        
      } catch (error) {
        console.log('Error catch getCountries', error)
      }

    },
    filtropais({ commit, state}, region){

      const filtro = state.paises.filter(pais =>
        pais.region.includes(region)
      )

      commit('setFilter', filtro)
      commit('setSearcher', filtro)
      commit('setLongRow', filtro.length)
    },

    filtroName({ commit, state}, name) {
      
      if(state.filterPaises.length === 0){
        
        
        const filtro = state.paises.filter((pais) => {
          let nombreApi = pais.name.toLowerCase();
          let nombreInput = name.toLowerCase();
          if (nombreApi.includes(nombreInput)) {
            return pais;
          }
          
        });

        commit('setSearcher', filtro)
        commit('setFilter', filtro)
        commit('setLongRow', filtro.length)
      }
      else{
        const filtro = state.filterPaises.filter((pais) => {
          let nombreApi = pais.name.toLowerCase();
          let nombreInput = name.toLowerCase();
          if (nombreApi.includes(nombreInput)) {
            return pais;
          }
          
        });
        commit('setLongRow', filtro.length)
        commit('setSearcher', filtro)
      }


    },

    
  },
  modules: {
  },
  getters:{
    topPaisesPoblacion(state){

      if(state.filterPaises.length === 0){
        
        return state.paises.sort((a, b) =>{
          return a.population < b.population  ? 1 : -1 
        })
      }else{
  
        return state.searcher.sort((a, b) =>{
          return a.population < b.population  ? 1 : -1 
        })
      }
    


    }
  }
})
