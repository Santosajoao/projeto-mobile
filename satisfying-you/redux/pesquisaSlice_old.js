import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pesquisaId: null,
    pesquisaNome: null,
    pesquisaImagem: null,
    pesquisaData: null,
};

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState : initialState,
    reducers: {
        setPesquisa: (state, action) => {
            state.pesquisaId = action.payload.pesquisaId;
            state.pesquisaNome = action.payload.pesquisaNome;
            state.pesquisaImagem = action.payload.pesquisaImagem;
            state.pesquisaData = action.payload.pesquisaData;
        },
    },
});

export const { setPesquisa } = pesquisaSlice.actions;
export default pesquisaSlice.reducer;