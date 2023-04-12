import React from "react";
import { MapView } from '@aws-amplify/ui-react';
import "../App.css";
import sand from './SiwaSandDunes.jpg'
function Home() {
  return (
    <div>
      <main>
        <h1>Map of Cairo</h1>
        <div>
          <MapView style={{ height: "400px", width: "100%" }}
            initialViewState={{
              latitude: 30.0444,
              longitude: 31.2357,
              zoom: 14,
            }}/>
           </div> 
          <br></br>
          <br></br>
          <img src={sand}></img>
        <section>
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet dui eget lorem bibendum semper. Aliquam eget laoreet sapien. Ut
            vitae commodo massa. Nullam vitae dolor id ante blandit dapibus.
            Nullam venenatis bibendum erat, eu ullamcorper massa mollis ac.
          </p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet dui eget lorem bibendum semper. Aliquam eget laoreet sapien. Ut
            vitae commodo massa. Nullam vitae dolor id ante blandit dapibus.
            Nullam venenatis bibendum erat, eu ullamcorper massa mollis ac.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
