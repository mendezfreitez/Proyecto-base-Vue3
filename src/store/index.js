import { createStore } from 'vuex'
 
export default createStore({
  state: {
    barText : '',
    anchoBar: 0,
    altoBar: 0,
    visibleBar: true,
    iconoBtnMenu:'arrow_back',
    listaSideBar: [
      { nom: 'Mis Productos', id:0, ico: 'assignment', to:'/' },
      { nom: 'Listado de Ventas', id:1, ico: 'list', to:'/ventas' },
      { nom: 'Mis Clientes', id:2, ico: 'supervised_user_circle', to:'/clientes' },
      { nom: 'Repartidores', id:3, ico: 'local_shipping', to:'/repartidores' },
      { nom: 'Reportes', id:4, ico: 'list_alt', to:'/reportes' },
    ]
  },
  mutations: {
    setBarText: (state, txt) => {
      state.barText = txt;
    },
    setAnchoBar: (state, ancho) => {
      state.anchoBar = ancho;
      ancho > 0 ? state.iconoBtnMenu = 'arrow_forward' : state.iconoBtnMenu = 'arrow_back';
    },
    setAltoBar: (state, alto) => {
      state.altoBar = alto;
      alto > 0 ? state.iconoBtnMenu = 'arrow_forward' : state.iconoBtnMenu = 'arrow_back';
    }
  },
  actions: {
  },
  modules: {
  }
})
