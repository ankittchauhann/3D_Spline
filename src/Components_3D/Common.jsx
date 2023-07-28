import React from "react";
import { Application } from "@splinetool/runtime";

const Tshirt = ({ url }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load(url);
  }, [url]);

  return <canvas ref={canvasRef} id="canvas3d" />;
};

export default Tshirt;
