import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fecthCoinData } from "../../services/fetchCoinData.js";
import zustandStore from '../../zustand/zustand.js';
import {useNavigate } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader.jsx"



function CoinTable() {
 
    const { currency } = zustandStore();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['coins', page, currency],
        queryFn: () => fecthCoinData(page, currency),
        // retry: 3,
        // retryDelay: 1000,
        gcTime: 2 * 60 * 1000,
        staleTime: 2 * 60 * 1000,
    });

    function handleCoinRedirect(id){
        navigate(`/details/${id}`);
    }


    if (isError) {
        return <div> Error: {error.message} </div>
    };
    if (isLoading){
        return <PageLoader />
    }

    return (
        <>

            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[85vw] mx-auto">
                <div className=" w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                    {/* Header of the Table */}
                    <div className="basis-[40%]">
                        Coin
                    </div>
                    <div className="basis-[20%]">
                        Price
                    </div>
                    <div className="basis-[20%]">
                        24h Change
                    </div>
                    <div className="basis-[20%]">
                        Market Cap
                    </div>
                </div>

                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading && <PageLoader/>}
                    {data && data.map((coin) => {
                        return (
                            <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} 
                            className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">

                                <div className="flex items-center justify-start gap-3 basis-[40%]">
                                    <div className="w-20 h-20">
                                        <img src={coin.image} className="w-full h-full" loading="lazy" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl">{coin.name}</div>
                                        <div className="text-sm">{coin.symbol}</div>
                                    </div>

                                </div>

                                <div className="basis-[20%]">
                                    {coin.current_price}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.price_change_24h}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.market_cap}
                                </div>

                            </div>
                        )
                    })}
                </div>

                <div className="flex gap-4 justify-center items-center">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="btn btn-primary btn-wide text-white text-2xl">
                        Prev
                    </button>
                    <button
                        onClick={() => setPage(page + 1)}
                        className="btn btn-secondary btn-wide text-white text-2xl"
                    >
                        Next

                    </button>
                </div>
            </div>

        </>
    );
}

export default CoinTable;