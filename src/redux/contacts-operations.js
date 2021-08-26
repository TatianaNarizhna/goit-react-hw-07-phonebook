import axios  from "axios";
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:7777';

const addContact = data => dispatch => {
    const contacts = { name:data.name, number: data.number };

    dispatch(actions.addContactRequest);
    
    axios
    .post('/contacts', contacts)
    .then(({ data }) => 
     dispatch(actions.addContactSuccess(data)))
     .catch(error => dispatch(actions.addContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addContact,
}

