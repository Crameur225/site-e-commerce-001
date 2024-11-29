import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    statusTab: false
}
const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
           addTocart(state, action){
            const {productId, quantity} = action.payload;
            const indexProduct = (state.items).findIndex(item =>item.productId === productId)
            if(indexProduct >= 0){
                state.items[indexProduct].quantity += quantity;
            }else{
                state.items.push({productId, quantity})
            }
           },
           changeQuantity(state, action){
            const {productId, quantity} = action.payload
            const findIndex = (state.items).findIndex(product => product.productId === productId)
            if(quantity > 0){
                state.items[findIndex].quantity = quantity
            }else{
                //supprimer
                state.items = state.items.filter((item) => item.productId !== productId)
            }
           },
           toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
           }
        }
    }
)
export const {addTocart, changeQuantity, toggleStatusTab} = cartSlice.actions
export default cartSlice.reducer;