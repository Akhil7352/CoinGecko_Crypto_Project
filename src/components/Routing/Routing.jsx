import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../../pages/Layout";
import CustomErrorBoundry from "../ErrorBoundry/ErrorBoundry.jsx";


const Home = lazy(() => import('../../pages/Home'))
const CoinDetailPage = lazy(() => import('../../pages/CoinDetailPage.jsx'))

function Routing() {
    return (

        <CustomErrorBoundry>
                 <Routes>
            <Route path="/" element={<MainLayout />}>

                <Route index element={
                    <Home />
                } />
                <Route path="details/:coinId" element={
                    <CoinDetailPage />
                } />

            </Route>
        </Routes>
        </CustomErrorBoundry>
       
    );
}

export default Routing;
