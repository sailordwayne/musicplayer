import { configureStore } from '@reduxjs/toolkit'
import example from './example'

export default configureStore({
  reducer: {
    example
  }
})
