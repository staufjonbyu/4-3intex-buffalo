import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function SexTextile() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/sextextile";

  const [length, setLength] = useState();
  const [hair, setHair] = useState();
  const [wrapping, setWrapping] = useState();
  const [age, setAge] = useState(true);

  function axiosRequest() {
    const wrappingBody = {
      length: parseInt(length),
      haircolor_r: parseInt(hair),
      wrapping_b: wrapping === "B" ? 1 : 0,
      ageatdeath: parseInt(age),
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

  console.log(length);
  console.log(hair);
  console.log(wrapping);
  console.log(age);

  return (
    <>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Enter Sex Textile Prediction Info
                </h3>
                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-6">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Length:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        placeholder="0-2.5"
                        onKeyUp={(e) => {
                          setLength(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="mb-1">
                      <label class="form-label" for="form5Example2">
                        Age at Death
                      </label>
                      <select
                        onChange={(e) => setAge(e.target.value)}
                        class="form-select"
                      >
                        <option value="1">Adult (15+)</option>
                        <option value="0">Child (3-15)</option>
                        <option value="0">Infant (1-3)</option>
                        <option value="0">Newborn (0-1)</option>
                        <option value="0">Unknown</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row pb-2 pb-md-0 mb-5">
                  <div class="col-6">
                    <div class="mb-1">
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

export default SexTextile;
