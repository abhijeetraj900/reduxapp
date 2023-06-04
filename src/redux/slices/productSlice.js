 import {createSlice} from "@reduxjs/toolkit";
 
    const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: []
    },
    reducers: {
        laodProducts: (state, action)=>{
            state.products= action.payload
        }
    }
})

export const {laodProducts}= productSlice.actions;
export default productSlice.reducer;