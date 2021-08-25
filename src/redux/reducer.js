import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';


const items = createReducer([], {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteItem]: (state, action) => 
    state.filter(contact => contact.id !== action.payload)
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
    items,
    filter
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

