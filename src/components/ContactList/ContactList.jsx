
import {  useDispatch, useSelector } from "react-redux";
import { ContactListStyle, ContactItem, Line, Buttons, DeleteButton } from "./ContactList.styled";
import { Notify } from "notiflix";
import { paramsForNotify } from "components/paramsForNotify";
import { deleteContactThunk } from "../../redux/contactsSlice/thunks";
import { selectFilteredContacts } from "../../redux/selectors";
// import { LuHeart } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";


const ContactList = () => {

    const contacts = useSelector(selectFilteredContacts);
    // console.log('contacts', contacts)
    const dispatch = useDispatch();
 
    const onDeleteContact = (id, name) => {
        dispatch(deleteContactThunk(id))
        return (Notify.info(`Contact ${name} has been deleted from your Contacts`, paramsForNotify))
 
      };
    return ( <ContactListStyle>
            {contacts.map(({name, number, id}) => {
                return (
                <ContactItem key={id} >
                    <Line >{name}:    <span>{number}</span></Line>
                    <Buttons>
                    <DeleteButton title="Delete contact" type="button" onClick={() => onDeleteContact(id, name)}>
                        <RiDeleteBin5Line/>
                    </DeleteButton>
                    {/* <AddFavouriteButton title="Add contact to the Favourites" type="button">
                        <LuHeart />
                    </AddFavouriteButton> */}
                    </Buttons>
                </ContactItem>
            )})}
        </ContactListStyle>
    );
            }
    export default ContactList;
 