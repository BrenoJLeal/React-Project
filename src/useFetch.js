import { useState,useEffect } from "react";
const useFetch = (url) => {
        //useStates para os blogs 
        const [data,setData] = useState(null); 
        //useStates para o loading
        const [isPending, SetIsPending] = useState(true);
        const [error, setError] = useState(null); 

    useEffect(() => {
        const abortCont = new AbortController();
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json();
            })
            .then((data) =>{
                //blogs
                setData(data);
                //loading
                SetIsPending(false);
                //msg de erro
                setError(null)
            })
            .catch(err =>{
                if (err.name == 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    SetIsPending(false)
                    setError(err.message);
                }
            })
        return () => abortCont.abort();
    },[url]);
    return {data, isPending, error}
}
export default useFetch;