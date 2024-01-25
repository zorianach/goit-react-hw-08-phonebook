import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(80vh - 40px);
  border: 2px solid rgb(81, 29, 131); 
border-radius: 15px;
padding: 15px;
background-color: rgba(255, 255, 255, 0.867);
width: 100%;
// max-height: 400px;
`
;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 56px;
  text-align: center;
  color: rgb(81, 29, 131);
`;
export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  color: black;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  color:black;
`;

export const Link = styled(NavLink)`
  margin-top: 25px;
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: rgb(220, 164, 34);
  box-shadow: gray;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
