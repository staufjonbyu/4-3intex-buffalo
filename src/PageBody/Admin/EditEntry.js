import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditEntry() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/api/Crud/";

  const [data, setData] = useState("");

  let { burialNum, area, eastWest, sqew, northSouth, sqns } = useParams();

  useEffect(() => {
    axios
      .get(
        `${url}${burialNum}/${area}/${eastWest}/${sqew}/${northSouth}/${sqns}`
      )
      .then((res) => setData(res.data));
  }, []);

  const id = data.id;
  const [squarenorthsouth, setSquarenorthsouth] = useState();
  const [headdirection, setHeaddirection] = useState();
  const [sex, setSex] = useState();
  const [northsouth, setNorthsouth] = useState();
  const [depth, setDepth] = useState();
  const [eastwest, setEastwest] = useState();
  const [adultsubadult, setAdultsubadult] = useState();
  const [facebundles, setFacebundles] = useState();
  const [southtohead, setSouthtohead] = useState();
  const [preservation, setPreservation] = useState();
  const [fieldbookpage, setFieldbookpage] = useState();
  const [squareeastwest, setSquareeastwest] = useState();
  const [goods, setGoods] = useState();
  const [text, setText] = useState();
  const [wrapping, setWrapping] = useState();
  const [haircolor, setHaircolor] = useState();
  const [westtohead, setWesttohead] = useState();
  const [samplescollected, setSamplescollected] = useState();
  const [Area, setArea] = useState();
  const [burialid, setBurialid] = useState();
  const [length, setLength] = useState();
  const [burialnumber, setBurialnumber] = useState();
  const [dataexpertinitials, setDataexpertinitials] = useState();
  const [westtofeet, setWesttofeet] = useState();
  const [ageatdeath, setAgeatdeath] = useState();
  const [southtofeet, setSouthtofeet] = useState();
  const [excavationrecorder, setExcavationrecorder] = useState();
  const [photos, setPhotos] = useState();
  const [hair, setHair] = useState();
  const [burialmaterials, setBurialmaterials] = useState();
  const [dateofexcavation, setDateofexcavation] = useState();
  const [fieldbookexcavationyear, setFieldbookexcavationyear] = useState();
  const [clusternumber, setClusternumber] = useState();
  const [shaftnumber, setShaftnumber] = useState();

  const [display, setDisplay] = useState(false);

  const handleInputChange = (e) => {
    setSquarenorthsouth(e.target.value);
  };

  function axiosRequest() {
    const wrappingBody = {
      id: id,
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
      area: Area,
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

    axios
      .put(
        `${url}${burialNum}/${area}/${eastWest}/${sqew}/${northSouth}/${sqns}`,
        wrappingBody
      )
      .then((res) => console.log(res));

    setDisplay(!display);

    console.log(wrappingBody);

    // //axios.post(`${url}addticket`, obj).then(() => console.log('Ticket added'));
  }

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
                        value={squarenorthsouth}
                        onKeyUp={(e) => {
                          setSquarenorthsouth(e.target.value);
                        }}
                        onChange={handleInputChange}
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
                        value={data.headdirection}
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
                        value={data.sex}
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
                        value={data.northsouth}
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
                        value={data.depth}
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
                        value={data.eastwest}
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
                        value={data.adultsubadult}
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
                        value={data.facebundles}
                        onKeyUp={(e) => {
                          setFacebundles(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        South to Hsouthtoheadead:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        value={data.southtohead}
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
                        value={data.preservation}
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
                        value={data.fieldbookpage}
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
                        value={data.squareeastwest}
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
                        value={data.goods}
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
                        value={data.text}
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
                        value={data.wrapping}
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
                        value={data.haircolor}
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
                        value={data.westtohead}
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
                        value={data.samplescollected}
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
                        value={data.Area}
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
                        value={data.burialid}
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
                        value={data.length}
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
                        value={data.burialnumber}
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
                        value={data.dataexpertinitials}
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
                        value={data.westtofeet}
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
                        value={data.ageatdeath}
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
                        value={data.southtofeet}
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
                        value={data.excavationrecorder}
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
                        value={data.photos}
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
                        value={data.hair}
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
                        value={data.burialmaterials}
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
                        value={data.dateofexcavation}
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
                        value={data.clusternumber}
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
                        value={data.fieldbookexcavationyear}
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
                        value={data.shaftnumber}
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

export default EditEntry;
