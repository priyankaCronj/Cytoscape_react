import React, { useState } from "react";
import cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import klay from "cytoscape-klay";
import fcose from "cytoscape-fcose";
import cola from "cytoscape-cola";
import elk from "cytoscape-elk";
import dagre from "cytoscape-dagre";
import MutipleNode from "./demo/MutipleNode";
import NumberOfNode from "./demo/NumberOfNode";

cytoscape.use(cola);
cytoscape.use(klay);
cytoscape.use(fcose);
cytoscape.use(elk);
cytoscape.use(dagre);

function App() {
  const elements = [
    { data: { id: "a", label: "Node 1" } },
    { data: { id: "b", label: "Node 2" } },
    { data: { id: "c", label: "Node 3" } },
    { data: { id: "d", label: "Node 4" } },
    { data: { id: "e", label: "Node 5" } },
    { data: { id: "f", label: "Node 6" } },
    { data: { id: "ab", source: "a", target: "b" } },
    { data: { id: "bc", source: "b", target: "c" } },
    { data: { id: "cd", source: "c", target: "d" } },
    { data: { id: "de", source: "d", target: "e" } },
    { data: { id: "ef", source: "e", target: "f" } },
    { data: { id: "fa", source: "f", target: "a" } },
  ];

  const [currentLayout, setCurrentLayout] = useState("grid");

  const handleLayoutChange = (layoutName) => {
    setCurrentLayout(layoutName);
  };

  const renderLayoutButton = (layoutName, label) => (
    <button key={layoutName} onClick={() => handleLayoutChange(layoutName)}>
      {label}
    </button>
  );

  const layouts = {
    random: { name: "random", animate: true },
    grid: { name: "grid", animate: true },
    preset: { name: "preset" },
    circle: { name: "circle" },
    concentric: { name: "concentric" },
    breadthfirst: { name: "breadthfirst" },
    cose: { name: "cose" },
    cola: { name: "cola" },
    dagre: { name: "dagre" },
    klay: { name: "klay" },
    fcose: { name: "fcose" },
    elk: { name: "elk" },
  };

  return (
    <>
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            gap: "1rem",
            width: "30%",
            flexWrap: "wrap",
            flexDirection:"column"
            
          }}
        >
          <p>layout</p>
          {Object.entries(layouts).map(([layoutName, layout]) =>
            renderLayoutButton(layoutName, layoutName)
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CytoscapeComponent
            elements={elements}
            style={{
              width: "500px",
              height: "500px",
              border: "5px solid black",
              margin: "auto",
              padding: "10px",
            }}
            layout={layouts[currentLayout]}
          />
        </div>
      </div> */}
      {/* <MutipleNode/> */}
      <NumberOfNode/>
    </>
  );
}

export default App;
