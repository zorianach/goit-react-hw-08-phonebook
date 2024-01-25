import { styled } from "styled-components";

export const NavLink = styled.link`
display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;
// a:hover {
//         color: white;}

// active {
//     color: #e84a5f;
    }
`
     
export const NavItems = styled.ul`
display: flex;
padding-left: 0px;
//  justify-content: flex-start;
//  align-items: center;
list-style: none;
gap: 40px;
font-size: 22px;

`
export const NavItem = styled.li`
text-decoration: none;

:hover, {
 color: white;
}

`