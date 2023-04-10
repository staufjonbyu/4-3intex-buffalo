import React from "react";
import BurialCard from "./BurialCard";

function Burial({ data }) {
//   const replaceNullValues = (data) => {
//     const replacedData = data.map((result) => {
//       return Object.keys(result).reduce((acc, key) => {
//         acc[key] = result[key] === null ? "" : result[key];
//         return acc;
//       }, {});
//     });

//     return replacedData;
//   };
//   const tableData = replaceNullValues(data.results);
  if (!data) {
    return <div>Loading data...</div>;
  } else {
    return (
      <div>
          {data.results.map(oneItem => <BurialCard{...oneItem}/>)}
            {/* {data.results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.squarenorthsouth}</td>
                <td>{result.headdirection}</td>
                <td>{result.sex}</td>
                <td>{result.northsouth}</td>
                <td>{result.depth}</td>
                <td>{result.eastwest}</td>
                <td>{result.adultsubadult}</td>
                <td>{result.facebundles}</td>
                <td>{result.southtohead}</td>
                <td>{result.preservation}</td>
                <td>{result.fieldbookpage}</td>
                <td>{result.squareeastwest}</td>
                <td>{result.goods}</td>
                <td>{result.text}</td>
                <td>{result.wrapping}</td>
                <td>{result.haircolor}</td>
                <td>{result.westtohead}</td>
                <td>{result.samplescollected}</td>
                <td>{result.area}</td>
                <td>{result.burialid}</td>
                <td>{result.length}</td>
                <td>{result.burialnumber}</td>
                <td>{result.dataexpertinitials}</td>
                <td>{result.westtofeet}</td>
                <td>{result.ageatdeath}</td>
                <td>{result.southtofeet}</td>
                <td>{result.excavationrecorder}</td>
                <td>{result.photos}</td>
                <td>{result.hair}</td>
                <td>{result.burialmaterials}</td>
                <td>{result.dateofexcavation}</td>
                <td>{result.fieldbookexcavationyear}</td>
              </tr> 
            ))}*/}
      </div>
    );
  }
}

export default Burial;
