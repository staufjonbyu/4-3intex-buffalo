import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";

async function initializeMap() {
    const map = await createMap({
        container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
        center: [30.0444, 31.2357], // [Longitude, Latitude]
        zoom: 11,
    })
}

initializeMap();