import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//step1:
//create store
//wrap app component under provider in main.jsx
//create slice
//register reducer in store