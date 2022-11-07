import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hello: 'world'
}

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    //
  }
})

export default slice.reducer
