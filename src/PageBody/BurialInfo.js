import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api";

export default function BurialInfo(){
    let { burialNum, area, eastWest, sqew, northSouth, sqns } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        async function getData()
        {
            const url = `${mainUrl}/Info/${burialNum}/${area}/${eastWest}/${sqew}/${northSouth}/${sqns}`;
            const response = await fetch(url);
            const result = await response.json();
            setData(result.result);
        }
        getData();
    },[]);

    

    return(
        <div>
            {data.url ? <img src={data.url}></img> : <p>No image to display</p>}
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
                <p>
                    Location: <b>{data.squarenorthsouth + ' ' + data.northsouth + ' ' + data.squareeastwest + ' ' + data.eastwest}</b>
                </p>
            </div>
        </div>
    )

    }
