import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

function SplineCard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/otxUCFqWC1LllKRJ/scene.splinecode');

    return () => {
      console.log('cleaning up');
    };
  }, []);

  return <canvas id="canvas3d" ref={canvasRef} />;
}

export default SplineCard;