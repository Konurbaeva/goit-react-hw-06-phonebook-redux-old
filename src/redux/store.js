import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

const myValueSlice = createSlice({
    name: 'myValue',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      ],
      reducers: {
     addNewContact(state, action){
      return [...state, action.payload];
     },
     deleteContact(state, action){
        return state.filter(contact => contact !== action.payload);
     }
    },
})

export const { addNewContact, deleteContact } = myValueSlice.actions;

console.log(myValueSlice.actions)

export const store = configureStore({ reducer: {
    myValue: myValueSlice.reducer,
} })
