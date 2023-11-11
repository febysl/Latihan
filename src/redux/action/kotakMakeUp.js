import { createSlice } from '@reduxjs/toolkit'

// createslice digunankan untuk membuat action atau fungsi baru
export const kotakMakeUp = createSlice({

  name: 'makeUp',
  // default value/isi
  initialState: {
    jumlahmakeup : 10,
    namaBrand : "lato lato",
    Penerbit : "sari roti",
    listBedak : ["Bedak tabur" , "Bedak foundation " , "Bedak halus"]
  },
  // fungsi fungsi yang digunakan untuk memanipulasi value yang ada didalam make up
  reducers: {
    kurangiMakeUp: (state) => {
      
      state.jumlahmakeup = state.jumlahmakeup -1
    },
    tambahiMakeUp: (state) => {
      
      state.jumlahmakeup = state.jumlahmakeup +1
    },
    gantiBrand : (state, action) => {
      state.namaBrand = action.payload.namaBrand
      state.Penerbit = action.payload.Penerbit

    },
    tambahBedak : (state, action) => {
      state.listBedak.push(action.payload)
    },
    kurangBedak : (state, action) => {
      state.listBedak.pop()
    }
  },
})

export const { kurangiMakeUp, tambahiMakeUp, gantiBrand, tambahBedak, kurangBedak} = kotakMakeUp.actions

export default kotakMakeUp.reducer