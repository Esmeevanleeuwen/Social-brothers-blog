import { useState, useEffect } from 'react';

const UseFetch = (url) =>{
    const [data, setData] = useState(null); // data is the response from the server
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() =>{
      const abortCont = new AbortController();  // used to cancel the request
        fetch(url, {signal: abortCont.signal})  // fetch the data from the server
          .then(res =>{  
            if(!res.ok){ 
              throw Error('could not fetch the data');
            }
            return res.json();
          })
          .then(data =>{     //  update the state with the data
            console.log(data);
            setData(data);
            setError(null);
            setIsPending(false); 
          })
          .catch(err => {  // if there is an error, update the state
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