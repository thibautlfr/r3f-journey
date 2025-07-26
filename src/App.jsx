import {
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const ref = useRef();
  const helper = useHelper(
    ref,
    THREE.PointLightHelper,
    0.5,
    "red"
  );
  const { color, distance, decay, intensity } =
    useControls({
      color: "#ff0000",
      distance: 3,
      decay: 2,
      intensity: 0.5,
    });

  return (
    <pointLight
      ref={ref}
      position={[1, 1, 1]}
      intensity={intensity}
      distance={distance}
      decay={decay}
      color={color}
    />
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />

        <Lights />
        {/* <ambientLight intensity={0.2} /> */}
        {/* <directionalLight
          intensity={0.5}
          position={[3, 3, 3]}
          color="red"
        />
        <directionalLight
          intensity={0.5}
          position={[0, 3, -3]}
          color="green"
        />
        <directionalLight
          intensity={0.5}
          position={[-3, 3, 3]}
          color="blue"
        /> */}

        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh
          rotation-x={-Math.PI / 2}
          position-y={-0.5}
        >
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
