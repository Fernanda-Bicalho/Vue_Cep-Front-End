import { createStore } from 'vuex'

const store = createStore({
  state: {
    address: null,  
  },
  mutations: {
    setAddress(state, address) {
      state.address = address
    },
  },
  actions: {
    async fetchAddress({ commit }, cep) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (data.erro) {
        commit('setAddress', 'CEP não encontrado')
      } else {
        commit('setAddress', `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`)
      }
    },
  },
})

export default store

