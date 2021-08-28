import axios  from "axios";
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:7777';

const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactRequest());

    try {
        const { data } = await  axios.get('/contacts');
        dispatch(actions.fetchContactSuccess(data))
    } catch (error) {
        dispatch(actions.fetchContactError(error)); 
    }
}

const addContact = data => async dispatch => {
    const contacts = { name:data.name, number: data.number };
    dispatch(actions.addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contacts);
        dispatch(actions.addContactSuccess(data));
    } catch (error) {
        dispatch(actions.addContactError(error));
    }
}

const deleteItem = id => dispatch => {
    dispatch(actions.deleteItemRequest());

    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteItemSuccess(id)))
    .catch(error => dispatch(actions.deleteItemError(error)));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchContacts,
    addContact,
    deleteItem,
}


