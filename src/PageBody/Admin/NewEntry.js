import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function NewEntry() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/api/Crud";

  const [squarenorthsouth, setSquarenorthsouth] = useState("");
  const [headdirection, setHeaddirection] = useState("");
  const [sex, setSex] = useState("");
  const [northsouth, setNorthsouth] = useState("");
  const [depth, setDepth] = useState("");
  const [eastwest, setEastwest] = useState("");
  const [adultsubadult, setAdultsubadult] = useState("");
  const [facebundles, setFacebundles] = useState("");
  const [southtohead, setSouthtohead] = useState("");
  const [preservation, setPreservation] = useState("");
  const [fieldbookpage, setFieldbookpage] = useState("");
  const [squareeastwest, setSquareeastwest] = useState("");
  const [goods, setGoods] = useState("");
  const [text, setText] = useState("");
  const [wrapping, setWrapping] = useState("");
  const [haircolor, setHaircolor] = useState("");
  const [westtohead, setWesttohead] = useState("");
  const [samplescollected, setSamplescollected] = useState("");
  const [area, setArea] = useState("");
  const [burialid, setBurialid] = useState(0);
  const [length, setLength] = useState("");
  const [burialnumber, setBurialnumber] = useState("");
  const [dataexpertinitials, setDataexpertinitials] = useState("");
  const [westtofeet, setWesttofeet] = useState("");
  const [ageatdeath, setAgeatdeath] = useState("");
  const [southtofeet, setSouthtofeet] = useState("");
  const [excavationrecorder, setExcavationrecorder] = useState("");
  const [photos, setPhotos] = useState("");
  const [hair, setHair] = useState("");
  const [burialmaterials, setBurialmaterials] = useState("");
  const [dateofexcavation, setDateofexcavation] = useState(
    "2023-04-13T20:29:32.244Z"
  );
  const [fieldbookexcavationyear, setFieldbookexcavationyear] = useState("");
  const [clusternumber, setClusternumber] = useState("");
  const [shaftnumber, setShaftnumber] = useState("");

  const [display, setDisplay] = useState(false);
  const [data, setData] = useState("");

  function axiosRequest() {
    const wrappingBody = {
      id: 0,
      squarenorthsouth: squarenorthsouth,
      headdirection: headdirection,
      sex: sex,
      northsouth: northsouth,
      depth: depth,
      eastwest: eastwest,
      adultsubadult: adultsubadult,
      facebundles: facebundles,
      southtohead: southtohead,
      preservation: preservation,
      fieldbookpage: fieldbookpage,
      squareeastwest: squareeastwest,
      goods: goods,
      text: text,
      wrapping: wrapping,
      haircolor: haircolor,
      westtohead: westtohead,
      samplescollected: samplescollected,
      area: area,
      burialid: burialid,
      length: length,
      burialnumber: burialnumber,
      dataexpertinitials: dataexpertinitials,
      westtofeet: westtofeet,
      ageatdeath: ageatdeath,
      southtofeet: southtofeet,
      excavationrecorder: excavationrecorder,
      photos: photos,
      hair: hair,
      burialmaterials: burialmaterials,
      dateofexcavation: dateofexcavation,
      fieldbookexcavationyear: fieldbookexcavationyear,
      clusternumber: clusternumber,
      shaftnumber: shaftnumber,
    };

    axios.post(url, wrappingBody).then((res) => {console.log(res); window.location.href = '/burial'});

    setDisplay(!display);

    console.log(wrappingBody);

    // //axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));
  }
  console.log(shaftnumber);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  New Burial Main Entry
                </h3>
                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Square North South:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setSquarenorthsouth(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Head Direction:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setHeaddirection(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Sex:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setSex(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        North South:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setNorthsouth(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Depth:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setDepth(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        East West:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setEastwest(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Adult Sub Adult:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setAdultsubadult(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Face Bundles:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setFacebundles(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        South to House:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setSouthtohead(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Preservation:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setPreservation(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Fieldbook Page:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setFieldbookpage(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Square East West:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setSquareeastwest(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Goods:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setGoods(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Text:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setText(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Wrapping:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setWrapping(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Hair Color:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setHaircolor(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        West to Head:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setWesttohead(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Samples Collected:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setSamplescollected(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Area:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setArea(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Burial ID:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setBurialid(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Length:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setLength(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Burial Number:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setBurialnumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Data Expert Initials:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setDataexpertinitials(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        West to Feet:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setWesttofeet(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Age at Death:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setAgeatdeath(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        South to Feet:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setSouthtofeet(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Excavation Recorder:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setExcavationrecorder(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Photos:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setPhotos(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Hair:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setHair(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Burial Materials:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setBurialmaterials(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Date of Excavation:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setDateofexcavation(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Cluster Number:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setClusternumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        Fieldbook Excavation year:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setFieldbookexcavationyear(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-4"></div>

                  <div class="col-4">
                    <div class="mb-1">
                      <label class="form-label" for="depth">
                        Shaft Number:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        onKeyUp={(e) => {
                          setShaftnumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4"></div>
                </div>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    axiosRequest();
                  }}
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

export default NewEntry;
