import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

type CubeProps = {
  rotating?: boolean;
} & JSX.IntrinsicElements["mesh"];

const Cube = ({ rotating = false, ...props }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (rotating) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Cube rotating position={[0, 1, 0]} />
    </Canvas>
  );
}

export default App;
