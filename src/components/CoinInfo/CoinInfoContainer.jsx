import CoinInfo from "./CoinInfo";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../PageLoader/PageLoader"
import Alert from "../Alert/Alert";
import { useState } from "react";
import zustandStore from "../../zustand/zustand";


function CoinInfoContainer({coinId}){

    const { currency } = zustandStore();
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState("");

    const { data: historicData, isLoading, isError} = useQuery({
        queryKey: ['coinHistoricData', coinId, currency, days, interval],
        queryFn: () => fetchCoinHistoricData(coinId, interval, days, currency),
        gcTime: 1000 * 60 *2,
        staleTime: 1000 * 60 * 2,
    });
    
    if(isLoading){
        return <PageLoader />
    }

    if(isError){
        return <Alert message={"Error Fetching the data"} type={"error"}/>
    }

    return (

        <>
         <CoinInfo 
         historicData={historicData} 
         setDays={setDays} 
         setCoinInterval={setCoinInterval} 
         days={days}
         currency={currency}
         />
        </>

    )
}

export default CoinInfoContainer;