import React, { useEffect, useState } from "react";
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';

const mainUrl = 'http://intexapi-env-1.eba-27nra4uc.us-east-1.elasticbeanstalk.com/api'

function Burial() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [obj, setObj] = useState([]);
  const [filter, setFilter] = useState([]);
  const [ages, setAge] = useState('');
  const [areas, setArea] = useState('');
  const [wrappings, setWrapping] = useState('');
  const [sex, setSex] = useState('');
  const [hairColors, setHairColor] = useState('');


  useEffect(() => {
    async function getData(){
      const url = `${mainUrl}/Main?page=${page}&age=${ages}&wrapping=${wrappings}&sex=${sex}&hairColor=${hairColors}&area=${areas}`;
      const response = await fetch(url);
      const result = await response.json();
      const urlFilter = `${mainUrl}/Filter`;
      const filterResponse = await fetch(urlFilter);
      const filterResult = await filterResponse.json();
      setFilter(filterResult);
      setData(result.results);
      setObj(result); 
    }
    getData();
  }, [page,ages,sex,wrappings,hairColors,areas])
// 
  
    return(
<>
      {authStatus !== 'authenticated' ? 
      <center>

<div>
    <br/>
<div style={{ height: "500px", overflow: "auto" }}>
  <table>
    <thead>
      <tr>
        <th>Burial Number</th>
        <th>  
          <select onChange={i => {setAge(i.target.value); setData([])}}>
            <option selected disabled>Select area</option>
            {
              filter.areas ?
              filter.areas.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
            </select>
        </th>
        <th>
          <select onChange={i => {setAge(i.target.value);}}>
            <option selected disabled>Select age</option>
            {
              filter.ages ?
              filter.ages.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
          </select>
        </th>
        <th>
          <select onChange={i => {setSex(i.target.value);}}>
              <option selected disabled>Select sex</option>
              {
                filter.sex ?
                filter.sex.map(a => {
                  return (
                    <option value={a}>{a}</option>
                  )
                }): <></>
              }    
              </select>
        </th>
        <th>
          <select onChange={i => {setHairColor(i.target.value);}}>
            <option selected disabled>Select hairColors</option>
            {
              filter.hairColors ?
              filter.hairColors.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
          </select>
        </th>
        <th>
          <select onChange={i => {setWrapping(i.target.value);}}>
            <option selected disabled>Select wrapping</option>
            {
              filter.wrappings ?
              filter.wrappings.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
          </select>
        </th>
        <th>
          <select onChange={i => {setAge(i.target.value);}}>
            <option selected disabled>Select age</option>
            {
              filter.ages ?
              filter.ages.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
          </select>
        </th>
        <th>
          <select onChange={i => {setAge(i.target.value);}}>
              <option selected disabled>Select sex</option>
              {
                filter.sex ?
                filter.sex.map(a => {
                  return (
                    <option value={a}>{a}</option>
                  )
                }): <></>
              }    
              </select>
        </th>
        <th>
          <select onChange={i => {setAge(i.target.value);}}>
            <option selected disabled>Select hairColors</option>
            {
              filter.hairColors ?
              filter.hairColors.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
          </select>
        </th>
        <th>
          <select onChange={i => {setAge(i.target.value);}}>
            <option selected disabled>Select wrapping</option>
            {
              filter.wrappings ?
              filter.wrappings.map(a => {
                return (
                  <option value={a}>{a}</option>
                )
              }): <></>
            }    
          </select>
        </th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(x => {
          return(
            <tr>
              <td>{x.burialnumber}</td>
              <td>{x.area}</td>
              <td>{x.ageatdeath}</td>
              <td>{x.sex}</td>
              <td>{x.haircolor}</td>
              <td>{x.wrapping}</td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
</div>
<div>
      {
        obj && data ? 
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
            obj.nextPage !== "NaN" ? <button onClick={() => {setPage(page + 1); setData([])}}>Next</button> : <></>
          }
          {
            obj.previousPage !== "NaN" ? <button onClick={() => {setPage(page - 1); setData([])}}>Previous</button> : <></>
          }
          
        </div>
        : <></>
      }
      <br/>
      {obj.totalPages > 0 ? <p>Page {page} of {obj.totalPages}</p> : <></>}
    </div>
</center> : 
<center>

      <div>
      
    <br/>
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
                  <tr>
                    <tr>
                    <td>{x.burialnumber}</td>
                    <td>{x.area}</td>
                    <td>{x.ageatdeath}</td>
                    <td>{x.sex}</td>
                    <td>{x.haircolor}</td>
                    <td>{x.wrapping}</td>
                  </tr>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    <div>
      {
        obj && data ? 
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
            obj.nextPage !== "NaN" ? <button onClick={() => {setPage(page + 1); setData([])}}>Next</button> : <></>
          }
          {
            obj.previousPage !== "NaN" ? <button onClick={() => {setPage(page - 1); setData([])}}>Previous</button> : <></>
          }
          
        </div>
        : <></>
      }
      <br/>
      {obj.totalPages > 0 ? <p>Page {page} of {obj.totalPages}</p> : <></>}
    </div>
    </center>
        
        }

    </>
    );
}


export default Burial;
