import { configureStore } from '@reduxjs/toolkit'
import kotakMakeUp from '../action/kotakMakeUp'

export default configureStore({
  reducer: {
    makeUp : kotakMakeUp
  },
})

// pada store berisi makeup(nama) yang didalamnya berisi elemen elemen dri kotakmakeup agar datanya terdefinisi
// tempat untuk naruh makeup yang kita simpan