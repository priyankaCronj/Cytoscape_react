import React, { useState } from "react";
import cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import cola from "cytoscape-cola";

cytoscape.use(cola);

const MutipleNode = () => {
    const [currentLayout, setCurrentLayout] = useState("circle");
    const [elements, setElements] = useState([]);
  
    const handleLayoutChange = (layoutName) => {
      setCurrentLayout(layoutName);
    };
  
    const renderLayoutButton = (layoutName, label) => (
      <button key={layoutName} onClick={() => handleLayoutChange(layoutName)}>
        {label}
      </button>
    );
  
    const generateGraph = () => {
      const nodes = [];
      const edges = [];
  
      // Generate 500 nodes
      for (let i = 1; i <= 500; i++) {
        nodes.push({ data: { id: `node${i}`, label: `Node ${i}` } });
      }
  
      // Connect nodes in a chain
      for (let i = 1; i < 500; i++) {
        edges.push({ data: { id: `edge${i}`, source: `node${i}`, target: `node${i + 1}` } });
      }
  
      setElements([...nodes, ...edges]);
    };
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
     <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            gap: "1rem",
            width: "30%",
            flexWrap: "wrap",
            flexDirection: "column",
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
          <button onClick={generateGraph}>Generate 500 Nodes</button>
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
      </div>
  
  )
}

export default MutipleNode