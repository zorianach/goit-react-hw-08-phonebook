import styled from 'styled-components';

const ContactListStyle = styled.ul`
    padding: 0px;
    // margin-left: 20px;
    margin: 0px;
    width: 400px;
    list-style-type: disc;
`
const ContactItem = styled.li`
    display: flex;
    // justify-content: flex-start;
    justify-content: space-between;
    gap: 20px;
    width: 372px;
    padding: 0;
    align-items: center;
    
    span {
      color: rgb(32, 12, 51);
      font-weight: 600;
    }
`;

const Line = styled.p`
margin: 0px;
line-height: 2;
// margin-left: 40px;
`;

const Buttons = styled.div`
display: flex;
gap: 5px;
`

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1px 6px;
  
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  &:hover {
    background: rgb(136, 51, 215);
    // border: #ffffff;
    color: #ffffff;
    font-weight: 500;
  }
`;
const AddFavouriteButton = styled.button`
display: flex;
  align-items: center;
  gap: 10px;
  padding: 1px 6px;
  
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  &:hover {
    background: rgb(136, 51, 215);
    // border: 1px solid #ffffff;
    color: #ffffff;
    font-weight: 500;
  }
`
export {ContactListStyle, ContactItem, Line, Buttons, DeleteButton, AddFavouriteButton};