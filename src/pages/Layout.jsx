import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Suspense } from "react";
import { Facebook } from "react-content-loader";
import PageLoader from "../components/PageLoader/PageLoader.jsx"


function MainLayout() {
    return (
        <>
            <Navbar />

            <Suspense fallback={<PageLoader/>} >
                 <Outlet />
            </Suspense>
           
        </>

    )
}


export default MainLayout;