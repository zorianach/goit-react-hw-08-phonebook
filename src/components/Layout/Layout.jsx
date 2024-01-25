// import { Suspense } from 'react';
import {LayoutBox} from './Layout.styled'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header/Header';


export const Layout = () => {
    return (
        <>
        <Header />
        <LayoutBox>
            {/* <Suspense fallback={<div>Loading page...</div>}> */}
					<Outlet />
		 		 {/* </Suspense> */}
        </LayoutBox>
        </>
    )
};

