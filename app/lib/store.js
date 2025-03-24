import { configureStore } from '@reduxjs/toolkit'
import frontReducer from './features/frontSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        front: frontReducer
    }
  })
}