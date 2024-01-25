import { NavLink } from 'react-router-dom';
import { HeaderStyles, NavigationStyles, NavigationItem } from './Header.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

const Header = () => {
	const { isLoggedIn } = useAuth();


	return (
		<HeaderStyles>
			<nav>
				<NavigationStyles>
					<NavigationItem>
						<NavLink to='/'>
                            Home
                        </NavLink>
					</NavigationItem>
					{isLoggedIn && 
					<NavigationItem>
						<NavLink to='/contacts'>Contacts</NavLink>
					</NavigationItem>}
				</NavigationStyles>
			</nav>
					{isLoggedIn 
					? (<UserMenu />) 
					: (<AuthNav/>)}
			
		</HeaderStyles>
	)
}

export default Header