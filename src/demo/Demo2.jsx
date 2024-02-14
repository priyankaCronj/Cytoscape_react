// SquareGraph.js
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

const SquareGraph = () => {
  const elements = [
    { data: { id: 'A' } },
    { data: { id: 'B' } },
    { data: { id: 'C' } },
    { data: { id: 'D' } },
    { data: { id: 'AB', source: 'A', target: 'B' } },
    { data: { id: 'BC', source: 'B', target: 'C' } },
    { data: { id: 'CD', source: 'C', target: 'D' } },
    { data: { id: 'DA', source: 'D', target: 'A' } },
  ];

  const layout = {
    name: 'preset',
  };

  const style = [
    {
      selector: 'node',
      style: {
        width: 30,
        height: 30,
        shape: 'ellipse',
        backgroundColor: '#ccc',
        label: 'data(id)',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 2,
        lineColor: '#888',
      },
    },
  ];

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: '400px', height: '400px' }}
      layout={layout}
      stylesheet={style}
    />
  );
};

export default SquareGraph;
