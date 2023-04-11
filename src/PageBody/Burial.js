import React, { useEffect, useState } from "react";

const mainUrl = 'http://intexapi-env-1.eba-27nra4uc.us-east-1.elasticbeanstalk.com/api/Main'

function Burial() {

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [obj, setObj] = useState([]);

  useEffect(() => {
    async function getData(){
      const url = `${mainUrl}?page=${page}`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
      setObj(result);
    }
    getData();
  }, [page])
  
  
  return (
    <div>
    <div style={{ height: "500px", overflow: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>Burial Number</th>
            <th>Burial Area</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(x => {
              return(
                <tr key={x.id}>
                  <td>{x.burialnumber}</td>
                  <td>{x.area}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    <div>
    {
      obj ? 
      <div>
        {
          obj.previousPage !== "NaN" ? <button onClick={() => {setPage(page - 1); setData([])}}>Previous</button> : <></>
        }
        {
          obj.nextPage !== "NaN" ? <button onClick={() => {setPage(page + 1); setData([])}}>Next</button> : <></>
        }
      </div>
      : <></>
    }
  </div>
  </div>
  );
}

export default Burial;
