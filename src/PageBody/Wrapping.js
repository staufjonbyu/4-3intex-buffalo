import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Wrapping() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/wrapping";

  const [depth, setDepth] = useState();
  const [femur, setFemur] = useState();
  const [hair, setHair] = useState();
  const [area, setArea] = useState();
  const [adult, setAdult] = useState(false);

  function axiosRequest() {
    const wrappingBody = {
      depth: parseInt(depth),
      femurLength: parseInt(femur),
      adultsubadult_: adult ? 1 : 0,
      hairColor_brown: parseInt(hair),
      area_ne: area === "NE" ? 1 : 0,
      area_se: area === "SE" ? 1 : 0,
    };

    axios
      .post(url, wrappingBody)
      .then((res) => console.log(res.data.predictedValue));

    console.log(wrappingBody);
    // //axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));
  }

  //   useEffect(() => {
  //     axios.get(`${url}view`).then((result) => {
  //       setData(result.data["data"]);
  //     });
  //   }, []);

  console.log(depth);
  console.log(femur);
  console.log(hair);
  console.log(area);
  console.log(adult);

  return (
    <>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Enter Wrapping Prediction Info
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
                        Femur Length:
                      </label>
                      <input
                        type="type"
                        id="depth"
                        class="form-control"
                        placeholder="0-27"
                        onKeyUp={(e) => {
                          setFemur(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row pb-2 pb-md-0 mb-5">
                  <div class="col-6">
                    <div class="">
                      <label class="form-label" for="form5Example2">
                        Hair Color
                      </label>
                      <select
                        onChange={(e) => setHair(e.target.value)}
                        class="form-select"
                      >
                        <option value="0">Brown</option>
                        <option value="0">Black</option>
                        <option value="1">Red</option>
                        <option value="0">Brown-Red</option>
                        <option value="0">Blonde</option>
                        <option value="0">Unknown</option>
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
                <div class="mb-4 justify-content-center">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form5Example3"
                    onClick={() => setAdult(!adult)}
                  />
                  <label class="form-check-label" for="form5Example3">
                    Is this an Adult?
                  </label>
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

export default Wrapping;
