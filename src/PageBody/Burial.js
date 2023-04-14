/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "./BurialStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

function convertAge(age) {
  const ages = {
    A: "Adult",
    C: "Child",
    I: "Infant (I)",
    IN: "Infant (IN)",
    N: "Newborn",
    U: "Unknown",
  };

  if (age in ages) {
    return ages[age];
  }

  return age;
}

function convertSex(sex) {
  const sexes = {
    M: "Male",
    F: "Female",
    U: "Unknown",
  };

  if (sex in sexes) {
    return sexes[sex];
  }
  return sex;
}

function convertHair(hair) {
  const haircolors = {
    B: "Brown",
    K: "Black",
    A: "Brown-Red",
    R: "Red",
    D: "Blonde",
    U: "Unknown",
  };

  if (hair in haircolors) {
    return haircolors[hair];
  }
  return hair;
}

function convertWrapping(wrap) {
  const wrappings = {
    W: "Full remains",
    H: "Partial remains",
    B: "Bones/Partial remains",
    S: "Unknown",
  };

  if (wrap in wrappings) {
    return wrappings[wrap];
  }
  return wrap;
}

//const mainUrl = "https://localhost:7127/api";
const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api";
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
  const [depth, setDepth] = useState(false);
  const [length, setLength] = useState(false);
  const [bNum, setBNum] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function getData() {
      const url = `${mainUrl}/Main?page=${page}&age=${ages}&wrapping=${wrappings}&sex=${sex}&hairColor=${hairColors}&area=${areas}&depth=${depth}&length=${length}&burialNum=${bNum}`;
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
  }, [page, ages, sex, wrappings, hairColors, areas, depth, length, bNum]);
  //

  function axiosDelete(x)
  {
    const url = `${mainUrl}/Crud/${x.burialnumber}/${x.area}/${x.eastwest}/${x.squareeastwest}/${x.northsouth}/${x.squarenorthsouth}`;
    axios.delete(url).then(res => {console.log(res); window.location.reload();});
    
  }
  return (
    <>
      <div>
        <br></br>
        <p>
          This page allows you to find information on specific burials uncovered
          at Fag el-Gamous and filter the results based on important criteria.
          To view more detailed information about a specific burial, click on
          the Burial Number for the desired record. <br></br>Admins: Edit the
          data by <a href="/login">logging in</a>.
        </p>
        <button
          className="pagination-button"
          type="button"
          onClick={() => window.location.reload()}
        >
          Reset Filters
        </button>
        <a 
          href="/newentry"
          class="pagination-button"
          style={{textDecoration: 'none'}}
          >
            
            Add Record
        </a>
      </div>
      
      {authStatus !== "authenticated" ? (
        <center>
          <div>
            <br />
            <div style={{ height: "500px", overflow: "auto" }}>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th className="column-header">
                      Burial Number<br></br>
                      <button
                        className="sort-button"
                        type="button"
                        onClick={() => {
                          setBNum(!bNum);
                          setDepth(false);
                          setLength(false);
                        }}
                      >
                        {bNum ? "Unsort" : "Sort"}
                      </button>{" "}
                    </th>
                    <th className="column-header">
                      Area <br></br>
                      <select
                        onChange={(i) => {
                          setArea(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Area
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
                    <th className="column-header">
                      Age<br></br>
                      <select
                        onChange={(i) => {
                          setAge(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Age
                        </option>
                        {filter.ages ? (
                          filter.ages.map((a) => {
                            return <option value={a}>{convertAge(a)}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th className="column-header">
                      Sex <br></br>
                      <select
                        onChange={(i) => {
                          setSex(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Sex
                        </option>
                        {filter.sex ? (
                          filter.sex.map((a) => {
                            return <option value={a}>{convertSex(a)}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th className="column-header">
                      Hair Color<br></br>
                      <select
                        onChange={(i) => {
                          setHairColor(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Hair Color
                        </option>
                        {filter.hairColors ? (
                          filter.hairColors.map((a) => {
                            return <option value={a}>{convertHair(a)}</option>;
                          })
                        ) : (
                          <></>
                        )}
                      </select>
                    </th>
                    <th className="column-header">
                      {" "}
                      Wrapping<br></br>
                      <select
                        onChange={(i) => {
                          setWrapping(i.target.value);
                        }}
                      >
                        <option selected disabled>
                          Wrapping
                        </option>
                        {filter.wrappings ? (
                          filter.wrappings.map((a) => {
                            return (
                              <option value={a}>{convertWrapping(a)}</option>
                            );
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
                    <th className="column-header">
                      Burial Depth <br />
                      <button
                        className="sort-button"
                        type="button"
                        onClick={() => {
                          setDepth(!depth);
                          setLength(false);
                          setBNum(false);
                        }}
                      >
                        {depth ? "Unsort" : "Sort"}
                      </button>
                    </th>
                    <th className="column-header">
                      Body Length <br />
                      <button
                        className="sort-button"
                        type="button"
                        onClick={() => {
                          setLength(!length);
                          setDepth(false);
                          setBNum(false);
                        }}
                      >
                        {length ? "Unsort" : "Sort"}
                      </button>
                    </th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data !== [] ? (
                    data.map((x) => {
                      return (
                        <tr>
                          <td>
                            <a
                              style={{textDecoration: 'none'}}
                              href={`/burial/${x.burialnumber}/${x.area}/${x.eastwest}/${x.squareeastwest}/${x.northsouth}/${x.squarenorthsouth}`}
                            >
                              {x.burialnumber}
                            </a>
                          </td>
                          <td>{x.area}</td>
                          <td>{x.ageatdeath}</td>
                          <td>{x.sex}</td>
                          <td>{x.haircolor}</td>
                          <td>{x.wrapping}</td>
                          <td>{x.depth}</td>
                          <td>{x.length}</td>
                          <td>
                            <a
                              style={{textDecoration: 'none'}}
                              href={`/edit/${
                                x.burialnumber ? x.burialnumber : ""
                              }/${x.area ? x.area : ""}/${
                                x.eastwest ? x.eastwest : ""
                              }/${x.squareeastwest ? x.squareeastwest : ""}/${
                                x.northsouth ? x.northsouth : ""
                              }/${
                                x.squarenorthsouth ? x.squarenorthsouth : ""
                              }`}
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                          <a style={{textDecoration: 'none'}} href="#" onClick={() => {axiosDelete(x);}}>Delete</a>
                          </td>
                         
                        </tr>
                      );
                    })
                  ) : (
                    <h3>Loading Data</h3>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            {data ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {page > obj.totalPages ? (
                  <button
                    className="pagination-button"
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

                {page < obj.totalPages ? (
                  <button
                    className="pagination-button"
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
              </div>
            ) : (
              <></>
            )}
            <br />
            {obj.totalPages > 0 ? (
              <span>
                Page {page} of {obj.totalPages}
              </span>
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
                  {data !== [] ? (
                    data.map((x) => {
                      return (
                        <tr>
                          <td>
                            <a
                              href={`/burial/${x.burialnumber}/${x.area}/${x.eastwest}/${x.squareeastwest}/${x.northsouth}/${x.squarenorthsouth}`}
                            >
                              {x.burialnumber}
                            </a>
                          </td>
                          <td>{x.area}</td>
                          <td>{x.ageatdeath}</td>
                          <td>{x.sex}</td>
                          <td>{x.haircolor}</td>
                          <td>{x.wrapping}</td>
                          <td>{x.depth}</td>
                          <td>{x.length}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <h3>Loading Data</h3>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            {obj !== {} && data !== [] ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {obj.previousPage !== "NaN" ? (
                  <button
                    className="pagination-button"
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

                {obj.nextPage !== "NaN" ? (
                  <button
                    className="pagination-button"
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
              </div>
            ) : (
              <></>
            )}
            <br />
            {obj.totalPages > 0 ? (
              <span>
                Page {page} of {obj.totalPages}
              </span>
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
