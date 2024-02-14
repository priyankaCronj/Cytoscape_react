import cytoscape from "cytoscape";
import React, { useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";
const Demo1 = () => {
  useEffect(() => {
    // Cytoscape initialization
    const cy = cytoscape({
      container: document.getElementById("cy"),

      elements: {
        nodes: [
          {
            data: { id: "a" },
          },
          {
            data: { id: "b" },
          },
          {
            data: {id: "c"},
          },
        ],
        edges: [
          {
            data: { id: "ab", source: "a", target: "b" },
          },
          {
            data: { id: "bc", source: "b", target: "c" },
          },
          {
            data: { id: "ca", source: "c", target: "a" },
          },
        ],
      },

      layout: {
        name: "grid",
        rows: 3,
      },

      // so we can see the ids
      style: [
        {
          selector: "node",
          style: {
            label: "data(id)",
          },
        },
      ],
    });

    // Cleanup function
    return () => {
      // Destroy the cytoscape instance when the component unmounts
      cy.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <CytoscapeComponent
      id="cy"
      style={{ width: "600px", height: "400px", border: "3px solid red" }}
    />
  );
};

export default Demo1;
