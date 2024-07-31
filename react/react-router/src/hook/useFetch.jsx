import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () =>{
            setisLoading(true)  // for show user that the page is on loading
            try {   
                const Response = await fetch(url)
            if (!Response.ok){
                throw new Error(Response.statusText)
            }
            const json = await Response.json()
            setData(json)
            setisLoading(false) 
            setError(null)
            } catch (err) {
                setisLoading(false)
                setError(err.message)
                console.log(err.message)
            }
        }
        fetchData()
    }, [url])
    return {data, isLoading, error}
    
}
