import Vue from 'vue'
import Vuex from 'vuex'
import data from '../assets/data.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    card:{},
    cartas:[],
    puntos : 0,
    minutos: '05',
    segundos:'00',
    final: false,
    inicio: false
  },
  mutations: {
    setItems(state,item){
      state.items.push(item);
    },
    setCara(state,count){
      state.items[count].cara = !state.items[count].cara;
    },
    setCarta(state,carta){
      state.cartas.push(carta)
    },
    setVaciar(state,count){
      state.cartas = state.cartas.filter(doc => {
        return doc.count != count
      })
    },
    eliminar(state){
      state.cartas = [];
    },
    updateBlock(state,id){
      state.items[id].bloqueo = !state.items[id].bloqueo;
    },
    setMinute(state,min){
      state.minutos = min;
    },
    setSecond(state,sec){
      state.segundos = sec;
    },
    setFinal(state, fin){
      state.final = fin;
    },
    setInicio(state,ini){
      state.inicio = ini;
    },
    suma(state, sum){
      state.puntos = state.puntos + sum;
    }

  },
  actions: {
    getItems({commit}){
      const items = data.sort((a, b) => {return Math.random() - 0.5});
      let count =0;
      items.forEach(resp => {
        commit('setItems', {
          id:count,
          name: resp.name,
          src: resp.src,
          point: resp.point,
          cara: resp.cara,
          bloqueo: true
        });
        count++;
      });  
    },
    elegirCarta({commit},count){
      //const {cara,id} = carta;
      //console.log('cara',count);
      //console.log('id',id)
      commit('setCara',count);
    },
    seleccionarCartas({commit},carta){
      commit('setCarta',carta)
    },
    vaciarCartas({commit},count){
      commit('setVaciar',count)
    },
    eliminarCartas({commit}){
      commit('eliminar')
    },
    actualizarBlock({commit},id){
      commit('updateBlock',id);
      //console.log(id)
    },
    actualizarMinuto({commit},min){
      //console.log(min);
      commit('setMinute',min);
    },
    actualizarSegundos({commit},sec){
      commit('setSecond',sec);
    }
  },
  modules: {
  }
})
