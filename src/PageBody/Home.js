import React from "react";
import { MapView } from "@aws-amplify/ui-react";
import "../Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import digsite from "./DigSite.jpg";
import sand from "./SiwaSandDunes.jpg";
import tombs from "./tombs.jpg";
import map from "./map.jpg";

function Home() {
  return (
    <div>
      <main>
        <section>
          <br></br>

          <h3>Welcome to the Fag el-Gamous Burial Information site!</h3>
          <br></br>
          <p>
            <ul>
              <li>
                If you want to view information about specific mummies and other
                artifacts, check out the{" "}
                <a href="/burial" className="link">
                  Burial
                </a>
                &nbsp;tab (if you are an authorized administrator,{" "}
                <a href="/login" className="link">
                  login
                </a>{" "}
                to edit the data).
              </li>
              <br></br>
              <li>
                To try and predicta mummy's sex, burial wrapping, or head
                direction, check out the{" "}
                <a href="/supervised" className="link">
                  Predictions
                </a>{" "}
                tab.
              </li>
            </ul>
          </p>
        </section>
        <section>
          <br></br>
          <h2>About Fag el-Gamous</h2>
          <p>
            The Fag el-Gamous cemetery was discovered by a team of
            archaeologists from Brigham Young University in 1980. The site is
            located in the Fayoum Depression near Cairo. To date, over 1,000
            bodies have been excavated from the cemetery. The mummies have been
            remarkably well preserved due to the landscape sealing in the
            moisture as well as favorable atmospheric conditions at the burial
            spot.
          </p>
          <div>
            <Carousel
              className="carousel"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div key="digsite">
                <img src={digsite} alt="digsite" />
              </div>
              <div key="image2">
                <img src={sand} alt="image2" />
              </div>
              <div key="image3">
                <img src={tombs} alt="image3" />
              </div>
            </Carousel>
          </div>
        </section>
        <br></br>
        <h2>Location of Fag el-Gamous</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <img src={map} alt="image3" />
          <div
            className="mapview"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MapView
              style={{ height: "300px", width: "400px" }}
              initialViewState={{
                latitude: 29.3,
                longitude: 30.8,
                zoom: 9,
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
