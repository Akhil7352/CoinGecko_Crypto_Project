import { useParams } from "react-router-dom";

function CoinDetailPage() {

    const { coinID } = useParams();

    return (
        <div>CoinDetailPage {coinID}</div>
    )
};

export default CoinDetailPage;