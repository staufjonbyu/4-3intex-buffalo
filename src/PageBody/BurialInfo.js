import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BurialStyles.css";

//const mainUrl = "https://localhost:7127/api";
const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api";

export default function BurialInfo() {
  let { burialNum, area, eastWest, sqew, northSouth, sqns } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const url = `${mainUrl}/Info/${burialNum}/${area}/${eastWest}/${sqew}/${northSouth}/${sqns}`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result.result);
    }
    getData();
  }, []);

  return (
    <div>
      {data.url ? <img src={data.url}></img> : <p></p>}
      <h4>
        Burial #{data.burialnumber} at{" "}
        {data.squarenorthsouth +
          " " +
          data.northsouth +
          " " +
          data.squareeastwest +
          " " +
          data.eastwest}
      </h4>
      <table className="table table-striped table-bordered">
        <thead>
          <th className="column-header border">Burial Id</th>
          <th className="column-header border">Area</th>
          <th className="column-header border">Head Direction</th>
          <th className="column-header border">Age at Death</th>
          <th className="column-header border">Hair Color</th>
          <th className="column-header border">Burial Length</th>
          <th className="column-header border">Burial Depth</th>
          <th className="column-header border">Sex</th>
          <th className="column-header border">Textile Structure</th>
          <th className="column-header border">Textile Function</th>
          <th className="column-header border">Textile Color</th>
          <th className="column-header border">Wrapping</th>
          <th className="column-header border">Material</th>
        </thead>
        <tbody>
          <tr>
            <th>{data.id}</th>
            <th>{data.area}</th>
            <th>{data.headdirection}</th>
            <th>{data.ageatdeath}</th>
            <th>{data.haircolor}</th>
            <th>{data.burialLength}</th>
            <th>{data.burialDepth}</th>
            <th>{data.sex}</th>
            <th>{data.textileStructure}</th>
            <th>{data.value}</th>
            <th>{data.textileColor}</th>
            <th>{data.wrapping}</th>
            <th>{data.material}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
