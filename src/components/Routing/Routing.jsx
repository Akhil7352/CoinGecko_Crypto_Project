import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../../pages/Layout";


const Home = lazy(() => import('../../pages/Home'))
const CoinDetailPage = lazy(() => import('../../pages/CoinDetailPage.jsx'))

function Routing() {
  return (
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
  );
}

export default Routing;
