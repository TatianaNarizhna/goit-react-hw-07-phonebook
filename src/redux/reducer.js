import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const { 
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteItem, 
    changeFilter} = actions;

const items = createReducer([], {
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteItem]: (state, action) => 
    state.filter(contact => contact.id !== action.payload)
});

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
});


export default combineReducers({
    items,
    filter,
    loading,
})
  

//   const filter = (state = '', { type, payload }) => {
//     switch(type) {
//         case 'filter/change':
//             return payload;

//             default:
//                 return state;
//     }
// }

//   const items = (state = [], { type, payload }) => {
//       switch (type) {
//           case types.ADD_CONTACT:
//               return [...state, payload ];

//               case types.DELETE_ITEM:
//                   return state.filter(contact => contact.id !== payload);

//               default:
//                   return state;
//       }
//   }

