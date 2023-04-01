import React, { Suspense } from "react";
import { Model } from "@assets/3dModel/Scene";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useDeviceDetect from "@/helpers/useDeviceDetect";

import s from "./WebgiViewer.module.scss";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <div className={s.root} id="webgi-canvas-container">
      <Canvas>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model
            position={isMobile ? [-2, -2, 4] : [-4, -2, 4]}
            rotation={[0, 20, 0]}
            scale={[0.01, 0.01, 0.01]}
          />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default WebgiViewer;
