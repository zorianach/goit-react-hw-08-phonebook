// import axios from 'axios';
import { api } from './api';
 

export const getAllContactsApi = async () => {
    const response = await api.get('/contacts');
    console.log('response', response)
    return response.data;
}

export const addContactApi = async (contact) => {
    // console.log('contact', contact)
    const response = await api.post('/contacts', contact);
    return response.data;
}

export const deleteContactApi = async (contactId) => {
    const response = await api.delete(`/contacts/${contactId}`);
    return response.data;
}
