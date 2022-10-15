import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

//import rootReducer from './reducers'
// export const store = configureStore({ reducer: rootReducer })

const myReducer = createReducer([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  ], {
      
  })

const addNewContact = createAction('myValue/addNewContact')

console.log(addNewContact())


export const store = configureStore({ reducer: {
    myValue: myReducer
} })
