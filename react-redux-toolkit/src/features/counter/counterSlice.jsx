import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    reset: (state) => {
     
      state.value = 0
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset,incrementByAmount } = counterSlice.actions

export default counterSlice.reducer