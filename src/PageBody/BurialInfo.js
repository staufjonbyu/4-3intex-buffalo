import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const mainUrl = 'https://localhost:7127/api';

export default function BurialInfo(){
    let { id } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        async function getData()
        {
            const url = `${mainUrl}/Info/${id}`;
            const response = await fetch(url);
            const result = await response.json();
            setData(result.result);
        }
        getData();
    },[]);

    function axiosRequest() {
        const wrappingBody = {
          depth: 0,
          femurLength: 0,
          adultsubadult_: 0,
          hairColor_brown: 0,
          area_ne: 0,
          area_se: 0,
        };
    
        axios
          .post(mainUrl, wrappingBody)
          .then((res) => console.log(res.data.predictedValue));
        // //axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));
    
        
        }

    

    return(
        <div>
            <h4>Burial #{data.burialnumber}</h4>
            <div>
                <p>
                    Area: {data.area}
                </p>
                <p>
                    Depth: {data.depth}
                </p>
                <p>
                    Length: {data.length}
                </p>
            </div>
            <button type="button" onClick={() => axiosRequest()}>axios</button>
        </div>
    )

    }
