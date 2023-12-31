import axios from "axios";

const BASEURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false";

const getapi = async () => {
    const response = await axios.get(BASEURL);
    return response.data;
}

export {getapi};