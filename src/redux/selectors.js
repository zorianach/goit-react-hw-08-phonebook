import { paramsForNotify } from "components/paramsForNotify";
import { Notify } from "notiflix";

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsAuth = (state) => {
  // console.log('token', state.auth.token)
  return state.auth.token
}
export const selectProfile = (state) => {
  console.log('selectProfile', state.auth.profile)

  return state.auth.profile}

export const selectAllContacts = (state) => state.contacts;
export const selectIsLoading = (state) => state.contacts.isLoading
export const selectError = (state) => state.contacts.error

export const selectFilter = (state) => state.filter; 

export const selectFilteredContacts = state => {
    const {contacts} = selectAllContacts(state); 
    const filter = selectFilter(state); 
    if (!filter) {
      return contacts;
    } else {
        const normalizedFilter = filter.toLowerCase();
        const filteredContacts = contacts.filter(
            ({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || number.trim().includes(normalizedFilter)
        );
        
        if (normalizedFilter && !filteredContacts.length) {
        Notify.failure(`No contacts matching your request`, paramsForNotify);
      }
    return filteredContacts}
  };