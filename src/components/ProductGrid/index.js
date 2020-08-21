import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import Frames from '../products/frames';
import FCs from '../products/fcs';
import Motors from '../products/motors';
import SCs from '../products/esc';
import Cameras from '../products/camera';
import VTX from '../products/vtx';
import Antennas from '../products/antenna';
import Receivers from '../products/receiver';
import PDB from '../products/pdb';
import Propellers from '../products/props';

import productRenderer from '../lib/productRenderer';
import './index.css';

const ProductGrid = (props) => {
  return (
    <div className="ProductGrid">
      <div className="ProductGridColumn">
        <Tooltip
          title="Your frame is the basis on which everything else is built. All of the frames listed here are between 210 and 250 mm in size."
          placement="bottom"
          arrow
        >
          <h2>Frames</h2>
        </Tooltip>
        {productRenderer(Frames, props)}
      </div>
      <div className="ProductGridColumn">
        <Tooltip
          title="The flight controller coordinates communication between the various components on the quad copter."
          placement="bottom"
          arrow
        >
          <h2>Flight Controllers</h2>
        </Tooltip>
        {productRenderer(FCs, props)}
      </div>
      <div className="ProductGridColumn">
        <Tooltip
          title="Motors...horsepower..."
          placement="bottom"
          arrow
        >
          <h2>Motors</h2>
        </Tooltip>
        {productRenderer(Motors, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>Speed Controllers</h2>
        {productRenderer(SCs, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>Cameras</h2>
        {productRenderer(Cameras, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>VTX</h2>
        {productRenderer(VTX, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>Antennas</h2>
        {productRenderer(Antennas, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>Receivers</h2>
        {productRenderer(Receivers, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>PDB</h2>
        {productRenderer(PDB, props)}
      </div>
      <div className="ProductGridColumn">
        <h2>Propellers</h2>
        {productRenderer(Propellers, props)}
      </div>
    </div>
  );
}

export default ProductGrid;