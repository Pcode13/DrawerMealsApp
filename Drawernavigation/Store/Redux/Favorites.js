import { createSlice } from "@reduxjs/toolkit";

const favoritesSlics = createSlice({
    name: 'favorties',
    initialState:{
        id:[]
    },
    reducers:{
        addFavorties: (state,action) =>{
state.id.push(state,action.payload.id)
        },

        removeFavorties :(state,action)=>{
state.id.slice(state.id.indexOf(action.payload.id),1);
        }
    }

})

export const addFavorite =favoritesSlics.actions.addFavorties;
export const removeFavorite =favoritesSlics.actions.removeFavorties;

export default favoritesSlics.reducer

