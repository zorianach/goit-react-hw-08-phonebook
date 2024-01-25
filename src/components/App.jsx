import { Suspense, lazy, useEffect } from "react";
import {Layout} from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import {PublicRoute} from "../guards/PublicRoute";
import { selectProfile } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "../redux/auth/thunks";
import {PrivateRoute} from "../guards/PrivateRoute";
// import ContactsPage from "pages/ContactsPage";
import { RegistrationPage } from "pages/RegistrationPage";
import { LoginPage } from "pages/LoginPage";
import { useAuth } from "hooks/useAuth";

// const Layout = lazy (()=> import ('./Layout/Layout'));
// const HomePage = lazy(() => import('pages/HomePage/HomePage/HomePage'));
// const RegistrationPage = lazy(()=> import('pages/RegistrationPage'));
const ContactsPage = lazy(()=> import ('pages/ContactsPage'));


export const App = () => {
  const profile = useSelector(selectProfile)
  const { isRefreshing } = useAuth();

	const dispatch = useDispatch();

  useEffect(() => {
		!profile && dispatch(refreshThunk())
	}, [dispatch, profile])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<>loading...</>}>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />}/>}
          /> 
          <Route path='/login'element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage/>}/>}
          />
					<Route path="/registration"
                element={
                  <PublicRoute redirectTo="/login" component={<RegistrationPage />}
                    />
                }
					/>
          <Route path="*" element={<HomePage />}/>
        </Route>
        </Routes>
      </Suspense>    
  );
};

// export default {App};
