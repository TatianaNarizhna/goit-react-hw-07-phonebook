import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const { 
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemError, 
    changeFilter} = actions;

const items = createReducer([], {
    [fetchContactSuccess]: (_, action) => action.payload,
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteItemSuccess]: (state, action) => 
    state.filter(contact => contact.id !== action.payload)
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteItemRequest]: () => true,
    [deleteItemSuccess]: () => false,
    [deleteItemError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
    items,
    filter,
    loading,
})
  

