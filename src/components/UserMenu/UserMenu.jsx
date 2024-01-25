import { useDispatch } from 'react-redux';
import { LogOutBtn, UserEmail, UserName, UserWrapper} from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { UserNavigation } from './UserMenu.styled';
import { logoutThunk } from '../../redux/auth/thunks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavigation>
      <UserWrapper>
        <div>
          {user && <UserName>{user.name}</UserName>}
          {user &&<UserEmail>{user.email}</UserEmail>}
        </div>
        {/* <UserAvatar></UserAvatar> */}
      </UserWrapper>
      <LogOutBtn type="button" onClick={() => dispatch(logoutThunk())}>
        LogOut
      </LogOutBtn>
    </UserNavigation>
  );
};