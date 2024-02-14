import React, { useState } from "react";
import cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import cola from "cytoscape-cola";

cytoscape.use(cola);

function NumberOfNode() {
  const [currentLayout, setCurrentLayout] = useState("random");
  const [numNodes, setNumNodes] = useState();
  const [elements, setElements] = useState([]);

  const handleLayoutChange = (layoutName) => {
    setCurrentLayout(layoutName);
  };

  const handleNumNodesChange = (e) => {
    setNumNodes(parseInt(e.target.value, 10) || 0);
  };

  const generateGraph = () => {
    const nodes = [];
    const edges = [];

    // Generate nodes based on user input
    for (let i = 1; i <= numNodes; i++) {
      nodes.push({ data: { id: `node${i}`, label: `Node ${i}` } });
    }

    // Connect nodes in a chain
    for (let i = 1; i < numNodes; i++) {
      edges.push({
        data: { id: `edge${i}`, source: `node${i}`, target: `node${i + 1}` },
      });
    }

    setElements([...nodes, ...edges]);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <label>
              Number of Nodes:
              <input
                type="number"
                value={numNodes}
                onChange={handleNumNodesChange}
              />
            </label>
            <button onClick={generateGraph}>Generate Nodes</button>
          </div>
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
              width: "1000px",
              height: "500px",
              border: "5px solid black",
              margin: "auto",
              padding: "10px",
            }}
            layout={layouts[currentLayout]}
          />
        </div>
      </div>
    </>
  );
}

export default NumberOfNode;
