import { createSlice } from "@reduxjs/toolkit"


export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        total:0
    },
    reducers:{
        addCart:(state,action)=>{
            state.items.push(action.payload)
            state.total += 1
        },
        removeCart:(state,action)=>{
            state.items.filter(elm=> action.payload !== elm.id)
            state.total -= 1
        }
    }
})

export const {addCart,removeCart} = CartSlice.actions

export default CartSlice.reducer