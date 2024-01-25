import styled from 'styled-components';

export const UserNavigation = styled.div`
  display: flex;
  // margin-left: auto;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 18px;
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
`;

export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  margin-top: 0px;
  margin-bottom: 0px;
  color: rgb(219, 219, 219);
`;


export const LogOutBtn = styled.button`
font-weight: 600;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  // padding: 0.063em 1em;
  padding: 8px 16px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 8px;
  cursor: pointer;
 
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    color: #000000;
    background-color: rgb(219, 219, 219, 0.9);
    border: 1px solid #000000;
  }
`;

