import {
  OrbitControls,
  SpotLight,
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
    THREE.SpotLightHelper,
    "red"
  );

  const {
    color,
    distance,
    attenuation,
    angle,
    anglePower,
  } = useControls({
    color: "#876ae5",
    distance: 6,
    attenuation: 2.2,
    angle: 1,
    anglePower: 1,
  });

  return (
    <SpotLight
      ref={ref}
      color={color}
      distance={distance}
      angle={angle}
      penumbra={0.1}
      attenuation={attenuation}
      anglePower={anglePower}
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
          <meshStandardMaterial
            color="white"
            roughness={1}
            metalness={0}
          />
        </mesh>

        <mesh
          rotation-x={-Math.PI / 2}
          position-y={-0.5}
        >
          <planeGeometry args={[5, 5]} />
          {/* <meshStandardMaterial
            color="white"
            roughness={0.2}
            metalness={0.8}
          /> */}
          <meshPhysicalMaterial
            color="white"
            clearcoat={0.5}
            reflectivity={0.8}
          />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
