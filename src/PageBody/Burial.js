import React, { useEffect, useState } from "react";
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';

const mainUrl = 'http://intexapi-env-1.eba-27nra4uc.us-east-1.elasticbeanstalk.com/api/Main'

function Burial() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [obj, setObj] = useState([]);
  const [filter, setFilter] = useState([]);

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
    return(
<>
      {authStatus !== 'authenticated' ? 
      <center>

<div>
<div>

{/* <select onChange={e => {setFilter(e.vaule)}}>
          <option selected disabled>Hair Color</option>
          {
            hair_color ? hair_color.map(i => {
              return(
                <option value={i.value}>{i.vaule}</option>
              )
            }) : <option></option>
          }
</select> */}

</div>
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
</center> : 
<center>

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
    </center>
        
        }
    </>
    );
}


export default Burial;
