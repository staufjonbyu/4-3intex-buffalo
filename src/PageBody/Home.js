import React from "react";
import "../App.css";
import sand from './SiwaSandDunes.jpg'
function Home() {
  return (
    <div>
      <main>
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
