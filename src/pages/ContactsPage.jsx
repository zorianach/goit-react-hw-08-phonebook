import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import AddContactForm from 'components/Forms/AddContactForm/AddContactForm';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContactsThunk } from '../redux/contactsSlice/thunks';
import { selectIsLoading } from '../redux/selectors';

const ContactsPage = () => {
const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)


  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);
 

  return (
      <>
       <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList />
        {isLoading && <Loader/>}
     </Section>
    </>
  )
}

export default ContactsPage