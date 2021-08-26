import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const deleteItem = createAction('contact/delete');

const changeFilter = createAction('filter/change');

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteItem, 
    changeFilter };
