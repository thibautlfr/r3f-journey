import { Canvas } from "@react-three/fiber";

import * as THREE from "three";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      {/* Objects */}
      <mesh
        position={[-3, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[THREE.MathUtils.degToRad(45), 0, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation-y={Math.PI / 4}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh
        position={[3, 0, 0]}
        scale={[2, 2, 2]}
        rotation-y={Math.PI / 4}
        rotation-z={THREE.MathUtils.degToRad(30)}
      >
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}

export default App;
