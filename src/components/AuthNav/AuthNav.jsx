import { Container } from 'components/Header/Header.styled';
import { NavLink } from 'react-router-dom';
import { NavItem, NavItems } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
        <NavItems>
            <NavItem>
                <NavLink  to="/registration">
                    Register
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink  to="/login">
                    Log In
                </NavLink>
            </NavItem>
         </NavItems>
    </Container>
  );
};
