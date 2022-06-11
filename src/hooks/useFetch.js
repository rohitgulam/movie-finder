import React, { useState, useEffect } from 'react'


const useFetch = (uri) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState()

    useEffect(() => {
        const fetchData = async  () => {
            

            setLoading(true)

            try{
                const response = await fetch(uri);
                const data = await response.json();
                setData(data);
                setLoading(false);

            }catch (error){ 
                setError(error)
            }
            
        }
        fetchData()

    }, [uri])

  return {
      data, loading, error
  }
    

  
}

export default useFetch