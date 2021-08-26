import axios  from "axios";

axios.defaults.baseURL = 'http://localhost:7777';

const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
}

const addContact = contact => {
    return axios.post('/contacts', contact).then(({ data }) => data);
}