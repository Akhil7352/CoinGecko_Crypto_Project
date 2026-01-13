import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailPage from "../../pages/CoinDetailPage.jsx";
import MainLayout from "../../pages/Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="details/:coinId" element={<CoinDetailPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
