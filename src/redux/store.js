import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

//import rootReducer from './reducers'
// export const store = configureStore({ reducer: rootReducer })

export const addNewContact = createAction('myValue/addNewContact')
export const deleteContact = createAction('myValue/deleteContact')

// export const myReducer = createReducer([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   ], {
//     [addNewContact]:(state, action) => state+ action.payload,
//     [deleteContact]:(state, action) => state- action.payload,
//   })

export const myReducer = createReducer(0, {
    [addNewContact]:(state, action) => state+ action.payload,
    [deleteContact]:(state, action) => state- action.payload,
  })

console.log(addNewContact())


export const store = configureStore({ reducer: {
    myValue: myReducer
} })
