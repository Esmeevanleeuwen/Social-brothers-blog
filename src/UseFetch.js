import { useState, useEffect } from 'react';

const UseFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() =>{
      const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
          .then(res =>{
            if(!res.ok){
              throw Error('could not fetch the data');
            }
            return res.json();
          })
          //  update the state with the data
          .then(data =>{
            console.log(data);
            setData(data);
            setError(null);
            setIsPending(false);
          })
          .catch(err => { 
            if (err.name === 'AbortError') {
              console.log('fetch aborted');
            } else {
              setIsPending(false)
              setError(err.message)
            }
          }) 

          // stops the fetching when the component is unmounted
          return() => abortCont.abort();

    }, [url]);

      
      return { data, isPending, error}
}

export default UseFetch;