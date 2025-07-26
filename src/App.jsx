import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";

function App() {
  return (
    <Canvas>
      <PerspectiveCamera
        position={[3, 3, 3]}
        makeDefault
        near={0.1}
        far={1000}
      />
      <OrbitControls />
      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
