import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "./BurialStyles.css";
import "bootstrap/dist/css/bootstrap.css";

function convertAge(age) {
  const ages = {
    A: "Adult",
    C: "Child",
    I: "Infant",
    IN: "Infant",
    N: "Newborn",
    U: "Unknown",
  };

  if (age in ages) {
    return ages[age];
  }
  return "";
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
  return "";
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
  return "";
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
  return "";
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
  return (
    <>
      <div>
        <button type="button" onClick={() => window.location.reload()}>
          Reset Filters
        </button>
      </div>
      {authStatus !== "authenticated" ? (
        <center>
          <div>
            <br />
            <div style={{ height: "500px", overflow: "auto" }}>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        onChange={() => setBNum(!bNum)}
                      ></input>
                      Burial Number
                    </th>
                    <th>
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
                    <th>
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
                    <th>
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
                    <th>
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
                    <th>
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
                    <th>
                      <input
                        type="checkbox"
                        onChange={() => setDepth(!depth)}
                      ></input>
                      Burial Depth
                    </th>
                    <th>
                      <input
                        type="checkbox"
                        onChange={() => setLength(!length)}
                      ></input>
                      Burial Length
                    </th>
                    <th>Edit</th>
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
                          <td>
                            <a
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
