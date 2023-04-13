import React from "react";
import ReactImageMagnify from "react-image-magnify";
import graph from "../images/graph.png";

function Graph(props) {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "graph",
          isFluidWidth: true,
          src: graph,
        },
        largeImage: {
          src: graph,
          alt: "graph",
          width: 1000,
          height: 800,
        },
      }}
    />
  );
}

export default Graph;
