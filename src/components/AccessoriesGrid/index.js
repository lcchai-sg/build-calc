import React from 'react';

import VTX from '../products/vtx';
import Antennas from '../products/antenna';
import Receivers from '../products/receiver';
import PDB from '../products/pdb';
import Propellers from '../products/props';
import productRenderer from '../lib/productRenderer';

import './index.css';

const AccessoriesGrid = (props) => {
  return (
    <div className="AccProductGrid">
      <div className="AccProductGridColumn">
        <h2>Video Transmitter</h2>
        {productRenderer(VTX, props)}
      </div>
      <div className="AccProductGridColumn">
        <h2>VTX Antenna</h2>
        {productRenderer(Antennas, props)}
      </div>
      <div className="AccProductGridColumn">
        <h2>Receiver</h2>
        {productRenderer(Receivers, props)}
      </div>
      <div className="AccProductGridColumn">
        <h2>PDB</h2>
        {productRenderer(PDB, props)}
      </div>
      <div className="AccProductGridColumn">
        <h2>Propellers</h2>
        {productRenderer(Propellers, props)}
      </div>
    </div>
  );
}

export default AccessoriesGrid;