const initialState = {
    pesquisaInfo: null,
  };
  
  const pesquisaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PESQUISA_INFO':
        return {
          ...state,
          pesquisaInfo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const setPesquisaInfo = (pesquisaInfo) => {
    return {
      type: 'SET_PESQUISA_INFO',
      payload: pesquisaInfo,
    };
  }
  export default pesquisaReducer;