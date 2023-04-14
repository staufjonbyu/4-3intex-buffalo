import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function HeadDirection() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/headdirection";

  const [depth, setDepth] = useState(0);
  const [samples, setSamples] = useState(true);
  const [area, setArea] = useState(0);

  const [display, setDisplay] = useState(false);
  const [data, setData] = useState("");

  function axiosRequest() {
    const wrappingBody = {
      depth: parseInt(depth),
      samplescollected_unknown: samples ? 1 : 0,
      area_sw: area === "SW" ? 1 : 0,
    };

    axios
      .post(url, wrappingBody)
      .then((res) => setData(res.data.predictedValue));

    setDisplay(!display);
    // //axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));
  }

  //   useEffect(() => {
  //     axios.get(`${url}view`).then((result) => {
  //       setData(result.data["data"]);
  //     });
  //   }, []);

  console.log(depth);
  console.log(samples);
  console.log(area);

  return (
    <>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Enter Head Direction Prediction Info
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
                        placeholder="0-3"
                        onKeyUp={(e) => {
                          setDepth(e.target.value);
                        }}
                      />
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
                    onClick={() => setSamples(!samples)}
                  />
                  <label class="form-check-label" for="form5Example3">
                    Were samples collected?
                  </label>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => axiosRequest()}
                >
                  Submit
                </button>
                <div
                  style={{ display: display ? "block" : "none" }}
                  className="card rounded-3 mt-3"
                >
                  <h3 class="mb-4 mt-4">
                    Prediction:{" "}
                    {data === "e"
                      ? "East"
                      : data === "w"
                      ? "West"
                      : data === "s"
                      ? "South"
                      : data === "n"
                      ? "North"
                      : "Unknown"}
                  </h3>
                  <button
                    onClick={() => window.location.reload()}
                    type="button"
                    class="btn btn-primary mb-4"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadDirection;
