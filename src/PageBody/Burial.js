import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "./BurialStyles.css";
import "bootstrap/dist/css/bootstrap.css";

const mainUrl = "https://localhost:7127/api";
//const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api";
function Burial() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [obj, setObj] = useState([]);
  const [filter, setFilter] = useState([]);
  const [ages, setAge] = useState("");
  const [areas, setArea] = useState("");
  const [wrappings, setWrapping] = useState("");
  const [sex, setSex] = useState("");
  const [hairColors, setHairColor] = useState("");

  useEffect(() => {
    async function getData() {
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
  }, [page, ages, sex, wrappings, hairColors, areas]);
  //

  

  return (
    <>
        <div>
          <button type="button" onClick={() => window.location.reload()}>Reset Filters</button>
        </div>
      {authStatus !== "authenticated" ? (
        <center>

        
          <div>
            <br />
            <div style={{ height: "500px", overflow: "auto" }}>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Burial Number</th>
                    <th>
                      <select
                        onChange={(i) => {
                          setArea(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select area
                        </option>
                        {filter.areas ? (
                          filter.areas.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th>
                      <select
                        onChange={(i) => {
                          setAge(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select age
                        </option>
                        {filter.ages ? (
                          filter.ages.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th>
                      <select 
                        onChange={(i) => {
                          setSex(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select sex
                        </option>
                        {filter.sex ? (
                          filter.sex.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th>
                      <select
                        onChange={(i) => {
                          setHairColor(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select hairColors
                        </option>
                        {filter.hairColors ? (
                          filter.hairColors.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th>
                      <select
                        onChange={(i) => {
                          setWrapping(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select Wrapping
                        </option>
                        {filter.wrappings ? (
                          filter.wrappings.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    {/* <th>
                      <select
                        onChange={(i) => {
                          setAge(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select Textile Color
                        </option>
                        {filter.ages ? (
                          filter.ages.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th>
                      <select
                        onChange={(i) => {
                          setAge(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select Textile Structure
                        </option>
                        {filter.sex ? (
                          filter.sex.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th> */}
                    <th>
                      <select
                        onChange={(i) => {
                          setAge(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select Depth
                        </option>
                        {filter.hairColors ? (
                          filter.hairColors.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th>
                      <select
                        onChange={(i) => {
                          setAge(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select Length
                        </option>
                        {filter.wrappings ? (
                          filter.wrappings.map((a) => {
                            return <option value={a}>{a}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x) => {
                    return (
                      <tr>
                        <td><a href={`/burial/${x.burialnumber}/${x.area}/${x.eastwest}/${x.squareeastwest}/${x.northsouth}/${x.squarenorthsouth}`}>{x.burialnumber}</a></td>
                        <td>{x.area}</td>
                        <td>{x.ageatdeath}</td>
                        <td>{x.sex}</td>
                        <td>{x.haircolor}</td>
                        <td>{x.wrapping}</td>
                        <td>{x.depth}</td>
                        <td>{x.length}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            {obj && data ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {obj.nextPage !== "NaN" ? (
                  <button
                    onClick={() => {
                      setPage(page + 1);
                      setData([]);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <></>
                )}
                {obj.previousPage !== "NaN" ? (
                  <button
                    onClick={() => {
                      setPage(page - 1);
                      setData([]);
                    }}
                  >
                    Previous
                  </button>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            <br />
            {obj.totalPages > 0 ? (
              <p>
                Page {page} of {obj.totalPages}
              </p>
            ) : (
              <></>
            )}
          </div>
        </center>
      ) : (
        <center>
          <div>
            <br />
            <div style={{ height: "500px", overflow: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>Burial Number</th>
                    <th>Burial Area</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x) => {
                    return (
                      <tr>
                        <tr>
                          <td><a href={`/burial/${x.burialnumber}/${x.area}/${x.eastwest}/${x.squareeastwest}/${x.northsouth}/${x.squarenorthsouth}`}>{x.burialnumber}</a></td>
                          <td>{x.area}</td>
                          <td>{x.ageatdeath}</td>
                          <td>{x.sex}</td>
                          <td>{x.haircolor}</td>
                          <td>{x.wrapping}</td>
                          <td>{x.depth}</td>
                          <td>{x.length}</td>
                        </tr>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            {obj && data ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {obj.nextPage !== "NaN" ? (
                  <button
                    onClick={() => {
                      setPage(page + 1);
                      setData([]);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <></>
                )}
                {obj.previousPage !== "NaN" ? (
                  <button
                    onClick={() => {
                      setPage(page - 1);
                      setData([]);
                    }}
                  >
                    Previous
                  </button>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            <br />
            {obj.totalPages > 0 ? (
              <p>
                Page {page} of {obj.totalPages}
              </p>
            ) : (
              <></>
            )}
          </div>
        </center>
      )}
    </>
  );
}

export default Burial;
