import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Sex() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/sex";

  const [depth, setDepth] = useState();
  const [length, setLength] = useState();
  const [westtofeet, setWest] = useState();
  const [wrapping, setWrapping] = useState();
  const [area, setArea] = useState();

  function axiosRequest() {
    const wrappingBody = {
      depth: parseInt(depth),
      length: parseInt(length),
      westtofeet: parseInt(westtofeet),
      wrapping_b: wrapping === "B" ? 1 : 0,
      area_sw: area === "SW" ? 1 : 0,
    };

    axios
      .post(url, wrappingBody)
      .then((res) => console.log(res.data.predictedValue));
    // //axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));
  }

  //   useEffect(() => {
  //     axios.get(`${url}view`).then((result) => {
  //       setData(result.data["data"]);
  //     });
  //   }, []);

  console.log(depth);
  console.log(length);
  console.log(westtofeet);
  console.log(wrapping);
  console.log(area);

  return (
    <>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Enter Sex Prediction Info
                </h3>
                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-6">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Depth:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        placeholder="0-2.5"
                        onKeyUp={(e) => {
                          setDepth(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Length:
                      </label>
                      <input
                        type="type"
                        id="depth"
                        class="form-control"
                        placeholder="0-27"
                        onKeyUp={(e) => {
                          setLength(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row pb-2 pb-md-0 mb-5">
                  <div class="col-6">
                    <div class="">
                      <label class="form-label" for="form5Example2">
                        Wrapping
                      </label>
                      <select
                        onChange={(e) => setWrapping(e.target.value)}
                        class="form-select"
                      >
                        <option value="B">Bones</option>
                        <option value="W">Whole</option>
                        <option value="H">Partial</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-1">
                      <label class="form-label" for="form5Example2">
                        Area
                      </label>
                      <select
                        onChange={(e) => setArea(e.target.value)}
                        class="form-select"
                      >
                        <option value="SE">South East</option>
                        <option value="SW">South West</option>
                        <option value="NE">North East</option>
                        <option value="NW">North West</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row pb-2 pb-md-0 mb-3">
                  <div class="col-3"></div>
                  <div class="col-6 mb-4 justify-content-center">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Length West from Head:
                      </label>
                      <input
                        type="type"
                        id="depth"
                        class="form-control"
                        placeholder="0-27"
                        onKeyUp={(e) => {
                          setWest(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-3"></div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => axiosRequest()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sex;
