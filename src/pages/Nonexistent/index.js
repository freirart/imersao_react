import React from 'react';
import { Link } from 'react-router-dom';
import Plane from '../../assets/imgs/Plane.png';
import Button from '../../components/Button';
import './Nonexistent.css';

function Nonexistent() {
  return (
    <div className="error">
      <div className="sky">
        <h2>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h2>
        <div className="grass" />
        <img alt="Plane" className="plane" src={Plane} />
      </div>
      <div className="field">
        <h2>Oops... it looks like you got lost.</h2>
        <Button className="btn">
          <Link to="/" className="btn-content">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Nonexistent;
