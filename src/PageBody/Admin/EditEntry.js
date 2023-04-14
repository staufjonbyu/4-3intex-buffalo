import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditEntry() {
  const url = "https://de8jo1lugqs3e.cloudfront.net/api/Crud/";

  const [data, setData] = useState("");
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

  let { burialNum, area, eastWest, sqew, northSouth, sqns } = useParams();

  useEffect(() => {
    axios
      .get(
        `${url}${burialNum}/${area}/${eastWest}/${sqew}/${northSouth}/${sqns}`
      )
      .then((res) => {
        setData(res.data);
        setSquarenorthsouth(res.data.squarenorthsouth);
        setHeaddirection(res.data.headdirection);
        setSex(res.data.sex);
        setNorthsouth(res.data.northsouth);
        setDepth(res.data.depth);
        setEastwest(res.data.eastwest);
        setAdultsubadult(res.data.adultsubadult);
        setFacebundles(res.data.facebundles);
        setSouthtohead(res.data.southtohead);
        setPreservation(res.data.preservation);
        setFieldbookpage(res.data.fieldbookpage);
        setSquareeastwest(res.data.squareeastwest);
        setGoods(res.data.goods);
        setText(res.data.text);
        setWrapping(res.data.wrapping);
        setHaircolor(res.data.haircolor);
        setWesttohead(res.data.westtohead);
        setSamplescollected(res.data.samplescollected);
        setArea(res.data.area);
        setBurialid(res.data.burialid);
        setLength(res.data.length);
        setBurialnumber(res.data.burialnumber);
        setDataexpertinitials(res.data.dataexpertinitials);
        setWesttofeet(res.data.westtofeet);
        setAgeatdeath(res.data.ageatdeath);
        setSouthtofeet(res.data.southtofeet);
        setExcavationrecorder(res.data.excavationrecorder);
        setPhotos(res.data.photos);
        setHair(res.data.hair);
        setBurialmaterials(res.data.burialmaterials);
        setDateofexcavation(res.data.dateofexcavation);
        setFieldbookexcavationyear(res.data.fieldbookexcavationyear);
        setClusternumber(res.data.clusternumber);
        setShaftnumber(res.data.shaftnumber);
      });
  }, []);

  const [display, setDisplay] = useState(false);

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
      burialid: parseInt(burialid),
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
                  Edit Burial Main Entry
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
                        onChange={(e) => {
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
                        value={headdirection}
                        onChange={(e) => {
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
                        value={sex}
                        onChange={(e) => {
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
                        value={northsouth}
                        onChange={(e) => {
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
                        value={depth}
                        onChange={(e) => {
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
                        value={eastwest}
                        onChange={(e) => {
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
                        value={adultsubadult}
                        onChange={(e) => {
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
                        value={facebundles}
                        onChange={(e) => {
                          setFacebundles(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="depth">
                        South to Head:
                      </label>
                      <input
                        type="text"
                        id="depth"
                        class="form-control"
                        value={southtohead}
                        onChange={(e) => {
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
                        value={preservation}
                        onChange={(e) => {
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
                        value={fieldbookpage}
                        onChange={(e) => {
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
                        value={squareeastwest}
                        onChange={(e) => {
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
                        value={goods}
                        onChange={(e) => {
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
                        value={text}
                        onChange={(e) => {
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
                        value={wrapping}
                        onChange={(e) => {
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
                        value={haircolor}
                        onChange={(e) => {
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
                        value={westtohead}
                        onChange={(e) => {
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
                        value={samplescollected}
                        onChange={(e) => {
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
                        value={Area}
                        onChange={(e) => {
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
                        value={burialid}
                        onChange={(e) => {
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
                        value={length}
                        onChange={(e) => {
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
                        value={burialnumber}
                        onChange={(e) => {
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
                        value={dataexpertinitials}
                        onChange={(e) => {
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
                        value={westtofeet}
                        onChange={(e) => {
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
                        value={ageatdeath}
                        onChange={(e) => {
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
                        value={southtofeet}
                        onChange={(e) => {
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
                        value={excavationrecorder}
                        onChange={(e) => {
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
                        value={photos}
                        onChange={(e) => {
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
                        value={hair}
                        onChange={(e) => {
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
                        value={burialmaterials}
                        onChange={(e) => {
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
                        value={dateofexcavation}
                        onChange={(e) => {
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
                        value={clusternumber}
                        onChange={(e) => {
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
                        value={fieldbookexcavationyear}
                        onChange={(e) => {
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
                        value={shaftnumber}
                        onChange={(e) => {
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
