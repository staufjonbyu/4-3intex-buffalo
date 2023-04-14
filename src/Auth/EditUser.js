import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";




const EditUser = () => {

  const { firstname, lastname, email, role } = useParams();
  const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api/User";
  //const mainUrl = "https://localhost:7127/api/User";
  const [success, setSuccess] = useState(null);
  const [firstName, setFirstName] = useState(firstname);
  const [lastName, setLastName] = useState(lastname);
  const [roleName, setRoleName] = useState(role);
  const [user, setUser] = useState(email);


  console.log(firstName);
  console.log(lastName);

  function onSubmit()
  {
    const obj = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      hash: "",
      role: roleName
    }

    axios.put(`${mainUrl}/${email}`, obj).then(() => window.location.href = '/admin');
  }

  return (
    <>
        <section>
          {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
          <div class="container py-5">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="card rounded-3">
                  <div class="card-body p-4">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Edit User</h3>
                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-md-6 mb-3">
                        <div class="form-outline">
                          <label class="form-label" htmlFor="firstName">
                            First Name:
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <div class="form-outline">
                          <label class="form-label" htmlFor="lastName">
                            Last Name:
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            className="form-control"
                          />
                        </div>
                      </div>

                    </div>
                    <div class="col-md-12 mb-3">
                      <div class="form-outline">
                        <label class="form-label" htmlFor="user">Email:</label>
                        <input
                          disabled
                          type="email"
                          id="user"
                          autoComplete="off"
                          
                          value={email}
                          required
                          aria-describedby="uidnote"
                          class="form-control"
                        />

                      </div>
                      <div class="col-md-6 mb-3">
                        <div class="form-outline">
                          <label class="form-label" htmlFor="role">
                            Role:
                          </label>
                          <select
                            id="role"
                            autoComplete="off"
                            onChange={(e) => setRoleName(e.target.value)}
                            className="form-control"
                          >
                            

                          <option value="">Select role</option>
                          <option selected={roleName === 'Admin' ? true : false}value="Admin">Admin</option>
                          <option selected={roleName === 'Researcher' ? true : false}value="Researcher">Researcher</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button
                        onClick={() => onSubmit()}
                        type="button"
                        class="btn btn-primary mt-4"
                      >
                        Submit Changes
                      </button>
                    </div>

                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default EditUser;
