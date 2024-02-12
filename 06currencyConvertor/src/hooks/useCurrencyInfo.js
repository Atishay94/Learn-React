import {useState, useEffect} from "react"

// design custom hooks {5:34:30}

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency]) // ,[] dependency array
    console.log(data);
    return data
}

export default useCurrencyInfo;