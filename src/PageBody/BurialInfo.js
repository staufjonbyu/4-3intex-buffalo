import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mainUrl = 'https://de8jo1lugqs3e.cloudfront.net/api';

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
        </div>
    )
}

