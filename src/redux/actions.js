import { createAction } from "@reduxjs/toolkit";

const fetchContactRequest = createAction('contact/fetchContactRequest');
const fetchContactSuccess = createAction('contact/fetchContactSuccess');
const fetchContactError = createAction('contact/fetchContactError');

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const deleteItemRequest = createAction('contact/deleteItemRequest');
const deleteItemSuccess = createAction('contact/deleteItemSuccess');
const deleteItemError = createAction('contact/deleteItemError');

const changeFilter = createAction('filter/change');

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemError,
    changeFilter,
 };
